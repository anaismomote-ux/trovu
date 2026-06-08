-- Enable required extensions
create extension if not exists "uuid-ossp";
create extension if not exists "pg_trgm";

-- ============================================================
-- PROFILES (extends Supabase auth.users)
-- ============================================================
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text unique not null,
  first_name text,
  last_name text,
  avatar_url text,
  role text not null default 'customer' check (role in ('customer','provider','affiliate','business','ops','admin','super_admin')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
alter table public.profiles enable row level security;

create policy "Users can view their own profile" on public.profiles
  for select using (auth.uid() = id);
create policy "Users can update their own profile" on public.profiles
  for update using (auth.uid() = id);

-- ============================================================
-- SERVICE CATEGORIES
-- ============================================================
create table public.categories (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  slug text unique not null,
  parent_id uuid references public.categories(id),
  icon text,
  created_at timestamptz default now()
);

-- ============================================================
-- PROVIDER PROFILES
-- ============================================================
create table public.providers (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade unique not null,
  display_name text,
  bio text,
  category_id uuid references public.categories(id),
  years_experience int default 0,
  location text,
  lat numeric(10,7),
  lng numeric(10,7),
  languages text[] default '{}',
  mobile_available boolean default false,
  studio_available boolean default false,
  status text not null default 'pending' check (status in ('pending','under_review','approved','rejected','suspended')),
  stripe_account_id text,
  rating numeric(3,2) default 0,
  review_count int default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
alter table public.providers enable row level security;

create policy "Anyone can view approved providers" on public.providers
  for select using (status = 'approved');
create policy "Provider can view and update own record" on public.providers
  for all using (auth.uid() = user_id);

-- ============================================================
-- SERVICES
-- ============================================================
create table public.services (
  id uuid default uuid_generate_v4() primary key,
  provider_id uuid references public.providers(id) on delete cascade not null,
  name text not null,
  description text,
  duration_minutes int not null,
  base_price numeric(10,2) not null,
  category_id uuid references public.categories(id),
  booking_type text default 'instant' check (booking_type in ('instant','request')),
  active boolean default true,
  created_at timestamptz default now()
);
alter table public.services enable row level security;

create policy "Anyone can view active services" on public.services
  for select using (active = true);
create policy "Providers can manage own services" on public.services
  for all using (
    auth.uid() = (select user_id from public.providers where id = provider_id)
  );

-- ============================================================
-- AVAILABILITY
-- ============================================================
create table public.availability (
  id uuid default uuid_generate_v4() primary key,
  provider_id uuid references public.providers(id) on delete cascade not null,
  day_of_week int check (day_of_week between 0 and 6), -- 0=Sunday
  start_time time not null,
  end_time time not null,
  is_available boolean default true
);
alter table public.availability enable row level security;

create policy "Anyone can view availability" on public.availability for select using (true);
create policy "Providers manage own availability" on public.availability
  for all using (auth.uid() = (select user_id from public.providers where id = provider_id));

-- ============================================================
-- BOOKINGS
-- ============================================================
create table public.bookings (
  id uuid default uuid_generate_v4() primary key,
  customer_id uuid references public.profiles(id) not null,
  provider_id uuid references public.providers(id) not null,
  service_id uuid references public.services(id) not null,
  status text not null default 'pending' check (status in ('pending','confirmed','in_progress','completed','cancelled','disputed')),
  booking_date date not null,
  start_time time not null,
  end_time time not null,
  total_amount numeric(10,2) not null,
  platform_fee numeric(10,2) not null,
  provider_payout numeric(10,2) not null,
  stripe_payment_intent_id text,
  escrow_released boolean default false,
  notes text,
  voucher_id uuid,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
alter table public.bookings enable row level security;

create policy "Customers can view own bookings" on public.bookings
  for select using (auth.uid() = customer_id);
create policy "Providers can view their bookings" on public.bookings
  for select using (auth.uid() = (select user_id from public.providers where id = provider_id));

-- ============================================================
-- REVIEWS
-- ============================================================
create table public.reviews (
  id uuid default uuid_generate_v4() primary key,
  booking_id uuid references public.bookings(id) unique not null,
  customer_id uuid references public.profiles(id) not null,
  provider_id uuid references public.providers(id) not null,
  rating int check (rating between 1 and 5) not null,
  comment text,
  created_at timestamptz default now()
);
alter table public.reviews enable row level security;

create policy "Anyone can view reviews" on public.reviews for select using (true);
create policy "Customers can create own reviews" on public.reviews
  for insert with check (auth.uid() = customer_id);

-- ============================================================
-- MESSAGES
-- ============================================================
create table public.messages (
  id uuid default uuid_generate_v4() primary key,
  conversation_id uuid not null,
  sender_id uuid references public.profiles(id) not null,
  recipient_id uuid references public.profiles(id) not null,
  content text not null,
  attachment_url text,
  read boolean default false,
  created_at timestamptz default now()
);
alter table public.messages enable row level security;

create policy "Users can view own messages" on public.messages
  for select using (auth.uid() = sender_id or auth.uid() = recipient_id);
create policy "Users can send messages" on public.messages
  for insert with check (auth.uid() = sender_id);

-- ============================================================
-- GIFT VOUCHERS
-- ============================================================
create table public.vouchers (
  id uuid default uuid_generate_v4() primary key,
  code text unique not null,
  purchaser_id uuid references public.profiles(id),
  recipient_email text,
  type text check (type in ('fixed_value','service_specific')) not null,
  amount numeric(10,2),
  service_category_id uuid references public.categories(id),
  balance numeric(10,2),
  expires_at timestamptz,
  stripe_payment_intent_id text,
  status text default 'active' check (status in ('active','partially_used','redeemed','expired','cancelled')),
  created_at timestamptz default now()
);
alter table public.vouchers enable row level security;

create policy "Users can view own vouchers" on public.vouchers
  for select using (auth.uid() = purchaser_id);

-- ============================================================
-- AFFILIATES
-- ============================================================
create table public.affiliates (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) unique not null,
  referral_code text unique not null,
  referral_link text,
  commission_rate numeric(5,4) default 0.08,
  tier text default 'starter' check (tier in ('starter','growth','elite')),
  status text default 'pending' check (status in ('pending','approved','suspended')),
  total_earned numeric(12,2) default 0,
  pending_payout numeric(12,2) default 0,
  created_at timestamptz default now()
);
alter table public.affiliates enable row level security;

create policy "Affiliates can view own record" on public.affiliates
  for select using (auth.uid() = user_id);

-- ============================================================
-- PROVIDER APPLICATIONS
-- ============================================================
create table public.provider_applications (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) not null,
  first_name text not null,
  last_name text not null,
  email text not null,
  category text not null,
  years_experience int,
  bio text,
  portfolio_urls text[] default '{}',
  status text default 'pending' check (status in ('pending','under_review','approved','rejected')),
  reviewed_by uuid references public.profiles(id),
  reviewed_at timestamptz,
  notes text,
  created_at timestamptz default now()
);
alter table public.provider_applications enable row level security;

create policy "Applicants can view own application" on public.provider_applications
  for select using (auth.uid() = user_id);
create policy "Applicants can submit application" on public.provider_applications
  for insert with check (auth.uid() = user_id);

-- ============================================================
-- PORTFOLIO ITEMS
-- ============================================================
create table public.portfolio_items (
  id uuid default uuid_generate_v4() primary key,
  provider_id uuid references public.providers(id) on delete cascade not null,
  image_url text not null,
  caption text,
  order_index int default 0,
  created_at timestamptz default now()
);
alter table public.portfolio_items enable row level security;

create policy "Anyone can view portfolio items" on public.portfolio_items for select using (true);
create policy "Providers manage own portfolio" on public.portfolio_items
  for all using (auth.uid() = (select user_id from public.providers where id = provider_id));

-- ============================================================
-- DYNAMIC PRICING
-- ============================================================
create table public.pricing_rules (
  id uuid default uuid_generate_v4() primary key,
  provider_id uuid references public.providers(id) on delete cascade not null,
  rule_type text check (rule_type in ('peak','off_peak','holiday','last_minute','location')) not null,
  multiplier numeric(4,2) default 1.0,
  start_date date,
  end_date date,
  start_time time,
  end_time time,
  day_of_week int,
  active boolean default true,
  created_at timestamptz default now()
);

-- ============================================================
-- BUSINESS ACCOUNTS
-- ============================================================
create table public.business_accounts (
  id uuid default uuid_generate_v4() primary key,
  owner_id uuid references public.profiles(id) not null,
  business_name text not null,
  email text,
  phone text,
  plan text default 'standard' check (plan in ('standard','growth','enterprise')),
  status text default 'active',
  created_at timestamptz default now()
);

create table public.business_locations (
  id uuid default uuid_generate_v4() primary key,
  business_id uuid references public.business_accounts(id) on delete cascade,
  name text not null,
  address text,
  city text,
  created_at timestamptz default now()
);

create table public.business_staff (
  id uuid default uuid_generate_v4() primary key,
  business_id uuid references public.business_accounts(id) on delete cascade,
  provider_id uuid references public.providers(id),
  role text default 'staff',
  created_at timestamptz default now()
);

-- ============================================================
-- FUNCTIONS: auto-update provider rating after review
-- ============================================================
create or replace function update_provider_rating()
returns trigger language plpgsql as $$
begin
  update public.providers
  set
    rating = (select avg(rating) from public.reviews where provider_id = new.provider_id),
    review_count = (select count(*) from public.reviews where provider_id = new.provider_id)
  where id = new.provider_id;
  return new;
end;
$$;

create trigger on_review_created
  after insert on public.reviews
  for each row execute procedure update_provider_rating();

-- ============================================================
-- REALTIME: enable for messages and bookings
-- ============================================================
alter publication supabase_realtime add table public.messages;
alter publication supabase_realtime add table public.bookings;
