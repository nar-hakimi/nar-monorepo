import { NextResponse } from "next/server";

const SHEET_WEBHOOK_URL = process.env.CONTACT_FORM_SHEET_URL;
const CONTACT_FORM_SECRET = process.env.CONTACT_FORM_SECRET;

export async function POST(request: Request) {
  if (!SHEET_WEBHOOK_URL) {
    console.error("CONTACT_FORM_SHEET_URL is not set");
    return NextResponse.json(
      { ok: false, error: "Contact form is not configured." },
      { status: 500 }
    );
  }

  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  // Honeypot check — "website" is a hidden field real users never fill.
  // Return a fake success so a bot doesn't learn it was caught, but
  // never forward the submission anywhere.
  if (typeof data.website === "string" && data.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }
  delete data.website; // not a real field, don't forward it either way

  if (!data.name || !data.email || !data.goal) {
    return NextResponse.json(
      { ok: false, error: "Missing required field(s): name, email, and goal are required." },
      { status: 400 }
    );
  }

  try {
    const sheetRes = await fetch(SHEET_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, _secret: CONTACT_FORM_SECRET }),
    });

    const result = await sheetRes.json().catch(() => null);

    if (!sheetRes.ok || !result?.ok) {
      console.error("Apps Script forward failed:", result?.error ?? sheetRes.statusText);
      return NextResponse.json(
        { ok: false, error: "Failed to submit — please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form forwarding error:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to submit — please try again." },
      { status: 502 }
    );
  }
}