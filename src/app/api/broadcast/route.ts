import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {
  const supabase = await createClient();
  const body = await req.json();
  const { query, category, location, budget_min, budget_max, client_id } = body;

  if (!query || !client_id) {
    return NextResponse.json({ error: "query and client_id are required" }, { status: 400 });
  }

  // Create service request
  const { data: request, error: reqErr } = await supabase
    .from("service_requests")
    .insert({
      client_id,
      mode: "broadcast",
      title: query,
      category: category || "general",
      status: "pending",
      budget_min: budget_min || null,
      budget_max: budget_max || null,
      location_text: location || null,
    })
    .select()
    .single();

  if (reqErr || !request) {
    return NextResponse.json({ error: reqErr?.message || "Failed to create request" }, { status: 500 });
  }

  // In production: trigger Supabase Edge Function to find nearby providers via PostGIS
  // and insert request_broadcasts rows + send push notifications
  // For now, return the created request
  return NextResponse.json({ request_id: request.id, status: "broadcasting" });
}
