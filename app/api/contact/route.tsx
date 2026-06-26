
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "The Synergist Website <onboarding@resend.dev>", // Replace with your verified domain later
      to: ["247synergytribe@gmail.com"],
      subject: `${subject} Form Submission from ${name}`,
      replyTo: email,

      html: `
        <h2>Website Contact Form Submission</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <hr/>

        <p>${message}</p>
      `,
    });

    if (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
    });
  } catch {
    return NextResponse.json(
      { message: "Something went wrong." },
      { status: 500 }
    );
  }
}