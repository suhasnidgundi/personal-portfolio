"use client";

import "@/styles/button.css";
import "@/styles/textblock-textarea.css";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@/utils/schema";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    reset,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      console.log(data);
      // Send the email using EmailJS
      emailjs
        .sendForm(
          process.env.SERVICE_ID,
          process.env.TEMPLATE_ID,
          form.current,
          process.env.PUBLIC_KEY
        )
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error);
            setIsSubmitting(false);
          }
        );
    } catch (error) {
      console.log(error);
    }
  };

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
            placeholder="Your email address"
          />
        </div>
        <input
          type="text"
          style={{
            margin: "3px",
            borderColor: touchedFields.subject
              ? errors.subject
                ? "red"
                : "green"
              : "initial",
          }}
          {...register("subject")}
          placeholder="Email subject"
        />
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
          placeholder="Email message"
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
