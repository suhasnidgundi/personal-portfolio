// lib/api.js
export async function getQuote() {
  const category = "happiness";
  const apiKey = process.env.API_NINJAS_KEY;

  try {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/quotes?category=${category}`,
      {
        headers: {
          "X-Api-Key": apiKey,
        },
        cache: "no-store", // This ensures we get a fresh quote each time
      }
    );
    const data = await response.json();
    if (data && data.length > 0) {
      return data[0].quote;
    }
  } catch (error) {
    console.error("Error fetching quote:", error);
  }
  return null;
}
