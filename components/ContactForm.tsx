"use client";

import { useState, type FormEvent } from "react";
import Icon from "@/components/Icon";
import { site } from "@/data/site";
import { cx } from "@/lib/cx";

type Status = "idle" | "sending" | "sent" | "error";

/** Sends the message to Formspree without leaving the page. */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const response = await fetch(site.formEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error(`Formspree responded with ${response.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      className="card form reveal right"
      action={site.formEndpoint}
      method="POST"
      onSubmit={onSubmit}
    >
      <div className="field">
        <input id="name" name="name" type="text" placeholder=" " required autoComplete="name" />
        <label htmlFor="name">Name</label>
      </div>
      <div className="field">
        <input id="email" name="email" type="email" placeholder=" " required autoComplete="email" />
        <label htmlFor="email">Email Address</label>
      </div>
      <div className="field">
        <input id="phone" name="phone" type="tel" placeholder=" " autoComplete="tel" />
        <label htmlFor="phone">Phone</label>
      </div>
      <div className="field">
        <input id="subject" name="subject" type="text" placeholder=" " required />
        <label htmlFor="subject">Subject</label>
      </div>
      <div className="field full">
        <textarea id="message" name="message" placeholder=" " required />
        <label htmlFor="message">Message</label>
      </div>
      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        <span>{status === "sending" ? "Sending…" : "Send message"}</span> <Icon name="arrow" />
      </button>
      <div
        className={cx("form-status", status === "sent" && "ok", status === "error" && "err")}
        role="status"
        aria-live="polite"
      >
        {status === "sent" &&
          "Your message has been submitted. I will get back to you within 24–48 hours."}
        {status === "error" && "Oops! Something went wrong. Please try again or email me directly."}
      </div>
    </form>
  );
}
