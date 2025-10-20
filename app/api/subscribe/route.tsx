import { NextResponse } from "next/server";
import { render } from "@react-email/render";
import { Resend } from "resend";
import WelcomeEmail from "@/app/emails/WelcomeEmail";


const resend = new Resend(process.env.RESEND_API_KEY);
const EMAIL_FROM = process.env.EMAIL_FROM!;
const NOTIFY_TO = process.env.NOTIFY_TO!;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const { email, name } = await req.json();
    const html = await render(<WelcomeEmail name={name} />);


    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email." }, { status: 400 });
    }

    // Send a confirmation email to the subscriber
    await resend.emails.send({
      from: EMAIL_FROM,
      to: email,
      subject: "You're on the Worldside waitlist 🎉",
      html,
      replyTo: "hello@goworldside.com",
    });

    // Notify internally about the new subscriber
    await resend.emails.send({
      from: EMAIL_FROM,
      to: NOTIFY_TO,
      subject: "New newsletter subscriber",
      html: `<p>${email}</p>`,
    });

    // TODO: save the email in DB / sheet here.

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
