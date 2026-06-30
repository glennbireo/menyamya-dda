import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { getSiteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "How residents, students, businesses, and LLGs can access services from the Menyamya District Development Authority.",
};

export default function ServicesPage() {
  const site = getSiteConfig();

  const services = [
    {
      title: "Scholarship Applications",
      description:
        "The Menyamya District Scholarship Program provides annual funding for students from the district pursuing tertiary education. Application details, eligibility criteria, and deadlines will be published here each intake cycle.",
      action: { label: "Contact MDDA for current intake details", href: "/contact/" },
    },
    {
      title: "Academic Incentive Program",
      description:
        "Grade 12 students and teachers at Menyamya Secondary School achieving results between 85% and 100% are eligible for recognition and cash incentives under this DSIP-funded program.",
      action: { label: "Learn more", href: "/programs/" },
    },
    {
      title: "Tenders & Procurement",
      description:
        "MDDA invites tenders for district-funded works under its procurement and tender policy. Registered contractors and suppliers may submit expressions of interest or formal tenders in response to published notices.",
      action: { label: "View Publications page for policy", href: "/publications/" },
    },
    {
      title: "LLG Service Requests",
      description:
        "Residents seeking services at the Local-Level Government level (ward development grants, community project support, local roads) should contact their respective LLG office or MDDA directly.",
      action: { label: "Contact MDDA", href: "/contact/" },
    },
    {
      title: "Development Information Requests",
      description:
        "Community groups, researchers, NGOs, and partners seeking information about the district's development plans, project status, or DSIP/DIP expenditure can submit a written request to MDDA.",
      action: { label: "Contact MDDA", href: "/contact/" },
    },
    {
      title: "ADRA & NGO Partnerships",
      description:
        "The MDDA has formalised partnerships with development agencies such as ADRA to improve service delivery. Partner organisations wishing to operate in the district are encouraged to contact MDDA to discuss coordination and MOU arrangements.",
      action: { label: "Contact MDDA", href: "/contact/" },
    },
  ];

  return (
    <>
      <PageHero
        title="Services"
        subtitle="How residents, students, businesses, and development partners can engage with the Menyamya District Development Authority."
      />

      <Container className="py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <h3 className="font-semibold text-secondary">{service.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 flex-1">
                {service.description}
              </p>
              <Link
                href={service.action.href}
                className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
              >
                {service.action.label} →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-lg border-l-4 border-primary bg-zinc-50 p-6">
          <SectionHeading
            title="Reach Us Directly"
            subtitle="For any service not listed above, contact the Authority directly."
          />
          <dl className="mt-4 space-y-2 text-sm text-zinc-700">
            <div className="flex gap-4">
              <dt className="w-24 font-medium text-zinc-500">Address</dt>
              <dd>{site.contact.address}</dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-24 font-medium text-zinc-500">Phone</dt>
              <dd>{site.contact.phone}</dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-24 font-medium text-zinc-500">Email</dt>
              <dd>{site.contact.email}</dd>
            </div>
          </dl>
        </div>
      </Container>
    </>
  );
}
