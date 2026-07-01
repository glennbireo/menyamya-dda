import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import VerifyBadge from "@/components/VerifyBadge";
import { getPrograms } from "@/lib/content";
import { programImage } from "@/lib/images";
import type { ProgramCategory } from "@/types";

export const metadata: Metadata = {
  title: "Development Programs",
  description:
    "DSIP and DIP-funded development programs and projects in Menyamya District — education, infrastructure, health, and more.",
};

const CATEGORY_ORDER: ProgramCategory[] = [
  "Education",
  "Infrastructure",
  "Health",
  "Agriculture",
  "Governance",
];

const STATUS_STYLES: Record<string, string> = {
  Ongoing:   "bg-green-100 text-green-800",
  Completed: "bg-blue-100 text-blue-800",
  Planned:   "bg-zinc-100 text-zinc-600",
};

export default function ProgramsPage() {
  const programs = getPrograms();

  const byCategory = CATEGORY_ORDER.map((cat) => ({
    category: cat,
    items: programs.filter((p) => p.category === cat),
  })).filter((g) => g.items.length > 0);

  return (
    <>
      <PageHero
        title="Development Programs"
        subtitle="MDDA invests DSIP and DIP funds across education, infrastructure, health, and agriculture — building a stronger Menyamya District."
      />

      {/* Funding overview */}
      <div className="border-b border-zinc-200 bg-zinc-50">
        <Container className="py-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-secondary">
                District Services Improvement Program (DSIP)
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                Annual national-government funding covering education support,
                health programs, agriculture, and community grants.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-secondary">
                District Infrastructure Program (DIP)
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                Capital funding for physical infrastructure — roads, bridges,
                government buildings, and other fixed assets across all four LLGs.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/*
        Programs by category.
        HCI: Image-first cards let users identify the program type visually
        (Recognition > Recall) before engaging with descriptive text.
        Images maintain consistent 16:9 ratio within each category group
        (Gestalt Similarity) creating a coherent, scannable layout.
        TODO: Replace picsum images with official MDDA project photographs.
      */}
      <Container className="space-y-16 py-14">
        {byCategory.map(({ category, items }) => (
          <section key={category}>
            <SectionHeading title={`${category} Programs`} />
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              {items.map((program) => (
                <article
                  key={program.slug}
                  className="group overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md"
                >
                  {/* Program photograph — communicates category at a glance */}
                  <div className="aspect-video w-full overflow-hidden bg-zinc-100">
                    <img
                      src={programImage(program.slug)}
                      alt={`${program.category} — ${program.title}`}
                      width={800}
                      height={450}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${STATUS_STYLES[program.status] ?? "bg-zinc-100 text-zinc-600"}`}
                      >
                        {program.status}
                      </span>
                      {program.fundingSource ? (
                        <span className="inline-flex items-center rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600">
                          {program.fundingSource}
                        </span>
                      ) : null}
                      <VerifyBadge verified={program.verified} />
                    </div>
                    <h3 className="mt-3 font-semibold text-secondary">
                      {program.title}
                    </h3>
                    {program.year ? (
                      <p className="mt-0.5 text-xs text-zinc-400">{program.year}</p>
                    ) : null}
                    <p className="mt-2 text-sm text-zinc-600">{program.summary}</p>
                    {program.details.length > 0 ? (
                      <ul className="mt-4 space-y-2">
                        {program.details.map((detail, i) => (
                          <li key={i} className="flex gap-2 text-sm text-zinc-600">
                            <span className="mt-0.5 shrink-0 text-primary">▸</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </Container>
    </>
  );
}
