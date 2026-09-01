import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {
  const supabase = await createClient();
  const { request_id, provider_id } = await req.json();

  if (!request_id || !provider_id) {
    return NextResponse.json({ error: "request_id and provider_id required" }, { status: 400 });
  }

  // Race-condition-safe accept: use upsert with conflict on (request_id) where status=pending
  // This ensures only the first provider to accept wins
  const { data, error } = await supabase.rpc("accept_broadcast", {
    p_request_id: request_id,
    p_provider_id: provider_id,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  if (!data?.success) {
    return NextResponse.json({ error: "Request already accepted by another provider" }, { status: 409 });
  }

  return NextResponse.json({ success: true, booking_id: data.booking_id });
}
