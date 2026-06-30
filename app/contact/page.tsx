import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { getSiteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Menyamya District Development Authority — office address, phone, email, and online enquiry form.",
};

export default function ContactPage() {
  const site = getSiteConfig();

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Reach the Menyamya District Development Authority with enquiries, service requests, or partnership proposals."
      />

      <Container className="py-14">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Details */}
          <div>
            <SectionHeading title="Office Details" />
            <dl className="space-y-6">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-1">
                  Address
                </dt>
                <dd className="text-sm text-zinc-700">{site.contact.address}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-1">
                  Phone
                </dt>
                <dd className="text-sm text-zinc-700">{site.contact.phone}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-1">
                  Email
                </dt>
                <dd className="text-sm text-zinc-700">{site.contact.email}</dd>
              </div>
            </dl>

            {/* Static map placeholder */}
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-2">
                Location
              </p>
              <div className="aspect-video w-full rounded-lg border border-zinc-200 bg-zinc-100 flex items-center justify-center">
                <div className="text-center text-sm text-zinc-400">
                  <p className="font-medium">Menyamya Station</p>
                  <p className="text-xs mt-1">7°06′47″S 145°59′31″E</p>
                  <a
                    href="https://www.openstreetmap.org/?mlat=-7.113&mlon=145.992&zoom=12"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-xs text-primary hover:underline"
                  >
                    Open in OpenStreetMap →
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <SectionHeading title="Office Hours" />
              <dl className="space-y-2 text-sm text-zinc-700">
                <div className="flex justify-between">
                  <dt>Monday – Friday</dt>
                  <dd>8:00 AM – 4:30 PM</dd>
                </div>
                <div className="flex justify-between border-t border-zinc-100 pt-2">
                  <dt>Saturday – Sunday</dt>
                  <dd className="text-zinc-400">Closed</dd>
                </div>
              </dl>
              <p className="mt-3 text-xs text-zinc-500">
                Papua New Guinea Standard Time (UTC+10)
              </p>
            </div>
          </div>

          {/* Enquiry Form */}
          <div>
            <SectionHeading
              title="Send an Enquiry"
              subtitle="Use the form below or contact us directly by phone or email."
            />
            <ContactForm />
          </div>
        </div>
      </Container>
    </>
  );
}
