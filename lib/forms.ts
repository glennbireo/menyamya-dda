/**
 * Static export has no API routes, so the contact form posts directly to a
 * third-party form backend (e.g. Web3Forms, Formspree) from the browser.
 * Set NEXT_PUBLIC_CONTACT_FORM_ENDPOINT and NEXT_PUBLIC_CONTACT_FORM_ACCESS_KEY
 * at build time once MDDA picks a provider. Until then, submission is
 * disabled and the UI falls back to the phone/email contact details.
 */
export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function isContactFormConfigured(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT);
}

export async function submitContactForm(values: ContactFormValues): Promise<void> {
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;
  if (!endpoint) {
    throw new Error("Contact form endpoint is not configured.");
  }

  const accessKey = process.env.NEXT_PUBLIC_CONTACT_FORM_ACCESS_KEY;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...values,
      ...(accessKey ? { access_key: accessKey } : {}),
    }),
  });

  if (!response.ok) {
    throw new Error(`Form submission failed with status ${response.status}`);
  }
}
