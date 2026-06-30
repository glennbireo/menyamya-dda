import Link from "next/link";
import type { Metadata } from "next";
import Container from "@/components/Container";
import StatGrid from "@/components/StatGrid";
import SectionHeading from "@/components/SectionHeading";
import { NewsCard } from "@/components/Cards";
import {
  getDistrict,
  getNews,
  getPrograms,
  getSiteConfig,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Menyamya District Development Authority",
  description:
    "Official website of the Menyamya District Development Authority, Morobe Province, Papua New Guinea.",
};

export default function HomePage() {
  const site = getSiteConfig();
  const district = getDistrict();
  const latestNews = getNews().slice(0, 3);
  const programs = getPrograms().filter((p) => p.status === "Ongoing").slice(0, 3);

  const stats = [
    { label: "Population (2024 Census)", value: "119,809" },
    { label: "Area", value: "3,729 km²" },
    { label: "Local-Level Govts", value: "4 LLGs" },
    { label: "Established", value: "2014" },
  ];

  return (
    <>
      {/* Hero */}
      <div className="bg-secondary text-white">
        <Container className="py-16 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            {district.province} · {district.country}
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            {site.orgName}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-zinc-300">{site.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/about/"
              className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark"
            >
              About the Authority
            </Link>
            <Link
              href="/programs/"
              className="rounded-md border border-white/30 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Development Programs
            </Link>
          </div>
        </Container>
      </div>

      {/* Stats */}
      <div className="border-b border-zinc-200 bg-zinc-50">
        <Container className="py-10">
          <StatGrid stats={stats} />
        </Container>
      </div>

      {/* Chairman welcome */}
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="Welcome from the Chairman"
              subtitle="A message from the MDDA Board Chairman"
            />
            <div className="prose prose-zinc max-w-none space-y-4 text-zinc-700">
              <p>
                The Menyamya District Development Authority exists to serve every
                man, woman, and child across Kapao Rural, Kome Rural, Nanima Kariba
                Rural, and Wapi Rural LLGs. Our mandate under the District
                Development Authority Act 2014 is clear: deliver services, build
                infrastructure, and invest in people.
              </p>
              <p>
                Through the District Services Improvement Program and the District
                Infrastructure Program, we are building roads, offices, schools,
                and the human capacity that Menyamya District needs to flourish.
              </p>
              <p className="font-medium text-secondary">
                — Hon. Solen O. Loifa, MP
                <br />
                <span className="font-normal text-zinc-500">
                  Board Chairman, MDDA · Member for Menyamya
                </span>
              </p>
            </div>
          </div>
          <div>
            <SectionHeading
              title="Our Mandate"
              subtitle="What the Authority is established to do"
            />
            <ul className="space-y-3 text-zinc-700">
              {[
                "Perform service delivery functions across all four LLGs",
                "Develop, build, repair and improve district infrastructure",
                "Oversee and coordinate district planning and budget priorities",
                "Determine budget allocations for Local-Level Governments",
                "Draw up and implement rolling five-year development plans",
                "Oversee DSIP and DIP expenditure in the public interest",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-primary/10 text-center text-xs leading-5 text-primary font-bold">
                    ✓
                  </span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Active Programs */}
      <div className="bg-zinc-50 border-y border-zinc-200">
        <Container className="py-14">
          <div className="flex items-center justify-between mb-6">
            <SectionHeading
              title="Active Development Programs"
              subtitle="Key investments driving growth in the district"
            />
            <Link
              href="/programs/"
              className="text-sm font-medium text-primary hover:underline"
            >
              View all →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {programs.map((p) => (
              <div
                key={p.slug}
                className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"
              >
                <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                  {p.category}
                </span>
                <h3 className="mt-3 font-semibold text-secondary">{p.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{p.summary}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Latest News */}
      <Container className="py-14">
        <div className="flex items-center justify-between mb-6">
          <SectionHeading title="Latest News" />
          <Link
            href="/news/"
            className="text-sm font-medium text-primary hover:underline"
          >
            All news →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {latestNews.map((item) => (
            <NewsCard key={item.slug} item={item} />
          ))}
        </div>
      </Container>

      {/* Quick links */}
      <div className="bg-primary text-white">
        <Container className="py-12">
          <h2 className="text-xl font-bold text-center mb-8">Quick Access</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: "Services", href: "/services/" },
              { label: "Publications", href: "/publications/" },
              { label: "District Profile", href: "/district-profile/" },
              { label: "Contact Us", href: "/contact/" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-white/20 p-4 text-center text-sm font-medium hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
