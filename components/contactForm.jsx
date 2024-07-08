"use client";

import "@/styles/button.css";
import "@/styles/textblock-textarea.css";
import "@/styles/thank-you-card.css";
import "@/styles/error-card.css";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@/utils/schema";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [showError, setShowError] = useState(false);
  const [quote, setQuote] = useState("");
  const form = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setShowError(false);
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      await fetchQuote();
      setShowThankYou(true);
    } catch (error) {
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

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

  if (showError) {
    return (
      <div className="error-card">
        <h2>Oops! Something went wrong 😕</h2>
        <p style={{ textAlign: "center" }}>
          We couldn&quot;t send your message. Please try again later. 🔄
        </p>
        <button
          onClick={() => {
            setShowError(false);
            setIsSubmitting(false);
          }}
          className="AccentButton"
        >
          Try Again 🔁
        </button>
      </div>
    );
  }

  if (showThankYou) {
    return (
      <div className="thank-you-card">
        <h2>Thank You! 🎉</h2>
        <p style={{ textAlign: "center" }}>
          Your message has been sent successfully. ✅
        </p>
        {quote && (
          <div className="quote">
            <blockquote>💡 &quot;{quote}&quot;</blockquote>
          </div>
        )}
        <p style={{ textAlign: "center" }}>
          We&quot;ll get back to you soon! 📬
        </p>
      </div>
    );
  }

  return (
    <form ref={form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div
        style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}
      >
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          <input
            type="text"
            style={{
              flexGrow: "1",
              margin: "3px",
              borderColor: touchedFields.name
                ? errors.name
                  ? "red"
                  : "green"
                : "initial",
            }}
            {...register("name")}
            placeholder="Your name"
          />
          <input
            type="email"
            style={{
              flexGrow: "1",
              margin: "3px",
              borderColor: touchedFields.email
                ? errors.email
                  ? "red"
                  : "green"
                : "initial",
            }}
            {...register("email")}
            placeholder="Your Email Address"
          />
        </div>
        <textarea
          style={{
            resize: "none",
            height: "400px",
            margin: "3px",
            borderColor: touchedFields.message
              ? errors.message
                ? "red"
                : "green"
              : "initial",
          }}
          {...register("message")}
          placeholder="Your message"
        ></textarea>
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          <input
            type="submit"
            style={{ flexGrow: "1", margin: "3px" }}
            value={isSubmitting ? "Submitting..." : "Submit"}
            className="AccentButton"
            disabled={isSubmitting}
          />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
