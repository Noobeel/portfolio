import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { name, email, message } = await request.json();

    const data = {
        service_id: process.env.EMAIL_SERVICE_ID,
        template_id: process.env.EMAIL_TEMPLATE_ID,
        user_id: process.env.EMAIL_USER_ID,
        accessToken: process.env.EMAIL_ACCESS_TOKEN,
        template_params: {
            from_name: name,
            from_email: email,
            message: message,
        },
    };

    const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }
    );

    if (response.status === 200) {
        return NextResponse.json(
            { success: true },
            { status: response.status }
        );
    } else {
        return NextResponse.json(
            { success: false },
            { status: response.status }
        );
    }
}
