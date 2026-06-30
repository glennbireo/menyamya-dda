"use client";

import { useState } from "react";
import { submitContactForm, isContactFormConfigured } from "@/lib/forms";
import type { ContactFormValues } from "@/lib/forms";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [values, setValues] = useState<ContactFormValues>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const formConfigured = isContactFormConfigured();

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");
    try {
      await submitContactForm(values);
      setState("success");
    } catch {
      setState("error");
      setErrorMsg(
        "Your message could not be sent. Please use the phone or email contact below."
      );
    }
  }

  if (!formConfigured) {
    return (
      <div className="rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm text-amber-800">
        <strong>Online form not yet configured.</strong> To send an enquiry,
        please use the phone or email contact details listed on this page. The
        online form will be activated before site launch.
      </div>
    );
  }

  if (state === "success") {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-5 text-sm text-green-800">
        <strong>Thank you!</strong> Your message has been received. The MDDA team
        will be in touch shortly.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-1">
            Full Name <span aria-hidden>*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={values.name}
            onChange={handleChange}
            className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-1">
            Email Address <span aria-hidden>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={values.email}
            onChange={handleChange}
            className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-zinc-700 mb-1">
          Subject <span aria-hidden>*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={values.subject}
          onChange={handleChange}
          className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option value="">Select a subject…</option>
          <option value="Scholarship enquiry">Scholarship enquiry</option>
          <option value="Tender / procurement">Tender / procurement</option>
          <option value="Development project information">Development project information</option>
          <option value="LLG services">LLG services</option>
          <option value="Media / press enquiry">Media / press enquiry</option>
          <option value="Partnership / NGO">Partnership / NGO</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-1">
          Message <span aria-hidden>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={values.message}
          onChange={handleChange}
          className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>
      {state === "error" ? (
        <p className="text-sm text-red-600" role="alert">
          {errorMsg}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={state === "submitting"}
        className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark disabled:opacity-50"
      >
        {state === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
