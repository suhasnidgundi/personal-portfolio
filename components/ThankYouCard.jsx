// components/ThankYouCard.jsx
"use client";

import { useState, useEffect } from "react";

const ThankYouCard = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch("/api/quote");
      const data = await response.json();
      if (data && data.quote) {
        setQuote(data.quote);
      }
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  return (
    <div
      className="thank-you-card"
      style={{ borderStyle: "solid", borderColor: "green" }}
    >
      <h2>Thank You!</h2>
      <p>Your message has been sent successfully.</p>
      {quote && (
        <div className="quote">
          <p>&quot;{quote}&quot;</p>
        </div>
      )}
    </div>
  );
};

export default ThankYouCard;
