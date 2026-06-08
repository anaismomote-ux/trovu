import Link from "next/link";

const categories = [
  {
    name: "Hair Styling",
    subtitle: "Precision cuts and luxury coloring",
    span: "md:col-span-8",
    aspect: "aspect-[16/7]",
    img: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80",
  },
  {
    name: "Beauty",
    subtitle: "Aesthetic excellence",
    span: "md:col-span-4",
    aspect: "aspect-[4/5]",
    img: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80",
  },
  {
    name: "Fitness",
    subtitle: "Elite personal coaching",
    span: "md:col-span-4",
    aspect: "aspect-[4/5]",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
  },
  {
    name: "Photography",
    subtitle: "Capturing your finest moments",
    span: "md:col-span-8",
    aspect: "aspect-[16/7]",
    img: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80",
  },
];

export default function CategoriesSection() {
  return (
    <section className="py-[120px] px-[80px] max-w-[1440px] mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="font-playfair text-[32px] leading-[1.3] font-semibold text-on-background mb-2">
            Curated Categories
          </h2>
          <p className="font-manrope text-[16px] text-on-surface-variant">
            Exceptional services for an exceptional lifestyle.
          </p>
        </div>
        <Link
          href="/services"
          className="font-manrope text-[14px] font-semibold tracking-[0.05em] text-primary flex items-center gap-2 group"
        >
          View All{" "}
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            href={`/services/${cat.name.toLowerCase().replace(/ /g, "-")}`}
            className={`${cat.span} group cursor-pointer overflow-hidden relative ${cat.aspect} bg-surface-container rounded-xl`}
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-background/60 to-transparent flex flex-col justify-end p-8">
              <h3 className="font-playfair text-[24px] font-semibold text-white">{cat.name}</h3>
              <p className="font-manrope text-white/80 text-[16px]">{cat.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
