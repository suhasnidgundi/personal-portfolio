"use client";

import "@/styles/button.css";
import "@/styles/textblock-textarea.css";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@/utils/schema";

import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div
        style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}
      >
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          <input
            type="text"
            style={{ flexGrow: "1", margin: "3px" }}
            onkeyup="checkName()"
            id="name"
            size="40"
            placeholder="Your name"
            required
            pattern=".{5,}"
          />
          <input
            type="email"
            style={{ flexGrow: "1", margin: "3px" }}
            onkeyup="checkEmail()"
            id="email"
            size="40"
            placeholder="Your email address"
            required
            pattern=".{6,}"
          />
        </div>
        <input
          type="text"
          style={{ margin: "3px" }}
          id="subject"
          size="40"
          placeholder="Email subject"
          onkeyup="checkSubject()"
          autocomplete="none"
          required
        />
        <textarea
          style={{ resize: "none", height: "400px", margin: "3px" }}
          id="body"
          rows="6"
          placeholder="Email body"
          onkeyup="checkBody()"
          required
        ></textarea>
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          <input
            type="submit"
            style={{ flexGrow: "1", margin: "3px" }}
            id="sendButton"
            onclick="CheckAndSend()"
            value="Submit"
            class="AccentButton"
          />
          <div style={{ flexGrow: "1", margin: "3px" }}></div>
          <div style={{ flexGrow: "1", margin: "3px" }}></div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
