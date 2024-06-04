import { NextResponse } from "next/server";
import { ContactEmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        const { error } = await resend.emails.send({
            from: "Nabeel - Portfolio <contact@nabeelasim.net>",
            to: ["nabeelasim0250@gmail.com"],
            reply_to: email,
            subject: "New message from your portfolio",
            react: ContactEmailTemplate({ name, email, message }),
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        });

        if (error) {
            return NextResponse.json({ success: false }, { status: 500 });
        }

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
