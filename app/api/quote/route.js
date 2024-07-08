// app/api/quote/route.js
import { NextResponse } from "next/server";

export async function GET() {
  const category = "happiness";
  const apiKey = process.env.API_NINJAS_KEY;

  try {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/quotes?category=${category}`,
      {
        headers: {
          "X-Api-Key": apiKey,
        },
      }
    );
    const data = await response.json();
    if (data && data.length > 0) {
      return NextResponse.json({ quote: data[0].quote });
    }
    return NextResponse.json({ quote: null });
  } catch (error) {
    console.error("Error fetching quote:", error);
    return NextResponse.json({ quote: null }, { status: 500 });
  }
}
