import { NextResponse } from "next/server";

export async function POST(request, response) {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    const postData = await request.json();

    const { gRecaptchaToken } = postData;

    const formData = new URLSearchParams({
        secret: secretKey,
        response: gRecaptchaToken
    }).toString();

    try {
        const res = await fetch(
            "https://www.google.com/recaptcha/api/siteverify",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formData
            }
        );

        if (!res.ok) {
            throw new Error('Failed to verify reCAPTCHA');
        }

        const data = await res.json();

        if (data.success && data.score > 0.5) {
            console.log("data.score:", data.score);

            return NextResponse.json({
                success: true,
                score: data.score,
            });
        } else {
            return NextResponse.json({ success: false });
        }

    } catch (e) {
        console.error("reCAPTCHA verification error:", e);
        return NextResponse.json({ success: false });
    }
}