"use client";

import { useState, type FormEvent } from "react";
import { SITE } from "@/lib/site";

const FORMATS = ["Gummies", "Oral Thin Films", "Softgels", "Liposomal", "Not sure"];
const SERVICES = ["Private Label", "Contract Manufacturing", "Custom Formulation"];

type Errors = Partial<Record<"name" | "email" | "message" | "phone", string>>;

export default function EnquiryForm({
  defaultFormat,
  defaultService,
  categoryNote,
}: {
  defaultFormat?: string;
  defaultService?: string;
  categoryNote?: string;
}) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<
    { kind: "idle" | "sent" | "warn"; text: string } | { kind: "idle"; text: "" }
  >({ kind: "idle", text: "" });
  const [sending, setSending] = useState(false);

  function validate(data: FormData): Errors {
    const errs: Errors = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name) errs.name = "Please tell us your name.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Please enter a valid email address.";
    if (phone && !/^[+()\-\s\d]{7,}$/.test(phone))
      errs.phone = "Please enter a valid phone number, or leave this blank.";
    if (!message) errs.message = "A short description of your enquiry helps us respond faster.";
    return errs;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      setStatus({
        kind: "warn",
        text: "Please correct the highlighted fields and try again.",
      });
      const first = form.querySelector<HTMLElement>('[data-invalid="true"] input, [data-invalid="true"] select, [data-invalid="true"] textarea');
      first?.focus();
      return;
    }

    setSending(true);
    /* ---------------------------------------------------------------
       INTEGRATION BOUNDARY, Enquiry delivery
       No backend / email service is configured for this site yet.
       When a backend is available, POST the FormData to that endpoint
       here and redirect to a success state on 2xx.

       Until then the form hands off to the visitor's own email client
       with the enquiry pre-filled to info@zoelexpharma.com, a real
       delivery path, not a simulated success.
       --------------------------------------------------------------- */
    const body = [
      `New product enquiry via zoelexpharma.com`,
      ``,
      `Name: ${data.get("name")}`,
      `Company: ${data.get("company")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone") || "Not provided"}`,
      `Country: ${data.get("country") || "Not provided"}`,
      `Interested format: ${data.get("format")}`,
      `Service: ${data.get("service")}`,
      `Estimated quantity: ${data.get("quantity") || "Not provided"}`,
      ``,
      `Message:`,
      `${data.get("message")}`,
    ].join("\n");

    const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(
      `Product enquiry: ${data.get("company") || data.get("name")}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSending(false);
    setStatus({
      kind: "sent",
      text: `If your email app opened, review the pre-filled enquiry and press send. If it did not, email ${SITE.email} or contact us on WhatsApp at ${SITE.phone}.`,
    });
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="field" data-invalid={!!errors.name}>
        <label htmlFor="f-name">
          Full Name <span className="req" aria-hidden="true">*</span>
        </label>
        <input id="f-name" name="name" type="text" autoComplete="name" required aria-describedby={errors.name ? "f-name-err" : undefined} />
        {errors.name && (
          <span className="err" id="f-name-err" role="alert">
            {errors.name}
          </span>
        )}
      </div>
      <div className="field">
        <label htmlFor="f-company">Company Name</label>
        <input id="f-company" name="company" type="text" autoComplete="organization" />
      </div>
      <div className="field" data-invalid={!!errors.email}>
        <label htmlFor="f-email">
          Email <span className="req" aria-hidden="true">*</span>
        </label>
        <input id="f-email" name="email" type="email" autoComplete="email" required aria-describedby={errors.email ? "f-email-err" : undefined} />
        {errors.email && (
          <span className="err" id="f-email-err" role="alert">
            {errors.email}
          </span>
        )}
      </div>
      <div className="field" data-invalid={!!errors.phone}>
        <label htmlFor="f-phone">Phone</label>
        <input id="f-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" aria-describedby={errors.phone ? "f-phone-err" : undefined} />
        {errors.phone && (
          <span className="err" id="f-phone-err" role="alert">
            {errors.phone}
          </span>
        )}
      </div>
      <div className="field">
        <label htmlFor="f-country">Country</label>
        <input id="f-country" name="country" type="text" autoComplete="country-name" />
      </div>
      <div className="field">
        <label htmlFor="f-format">Interested Format</label>
        <select id="f-format" name="format" defaultValue={defaultFormat || "Not sure"}>
          {FORMATS.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="f-service">Service</label>
        <select id="f-service" name="service" defaultValue={defaultService || "Private Label"}>
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="f-qty">Estimated Quantity</label>
        <input id="f-qty" name="quantity" type="text" placeholder="e.g. 10,000 units / month" />
      </div>
      <div className="field field--full" data-invalid={!!errors.message}>
        <label htmlFor="f-message">
          Message <span className="req" aria-hidden="true">*</span>
        </label>
        <textarea
          id="f-message"
          name="message"
          required
          aria-describedby={errors.message ? "f-message-err" : "f-message-hint"}
          defaultValue={categoryNote ? `I am interested in your ${categoryNote} category.` : ""}
        />
        {!errors.message && (
          <span className="err" id="f-message-hint" style={{ color: "var(--tx-paper-muted)" }}>
            Share your product idea, target market and estimated quantity.
          </span>
        )}
        {errors.message && (
          <span className="err" id="f-message-err" role="alert">
            {errors.message}
          </span>
        )}
      </div>
      {status.text && (
        <p className={`form__status form__status--${status.kind}`} role="status">
          {status.text}
        </p>
      )}
      <div className="form__foot">
        <button type="submit" className="btn btn--primary" disabled={sending}>
          {sending ? "Preparing…" : "Send Enquiry"} <span className="arrow">→</span>
        </button>
        <p className="form__note">
          Your details are used only to respond to this enquiry. We do not share
          them with third parties.
        </p>
      </div>
    </form>
  );
}
