import { NextResponse } from "next/server";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email." }, { status: 400 });
    }

    // TODO: Integrate your provider here (Mailchimp/ConvertKit/Resend/Klaviyo/etc.)
    // For now, just log to server:
    console.log("[newsletter] new signup:", email);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}