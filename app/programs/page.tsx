import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import VerifyBadge from "@/components/VerifyBadge";
import { getPrograms } from "@/lib/content";
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
        subtitle="Menyamya DDA invests District Services Improvement Program (DSIP) and District Infrastructure Program (DIP) funds across education, infrastructure, health, and agriculture."
      />

      {/* Funding overview */}
      <div className="border-b border-zinc-200 bg-zinc-50">
        <Container className="py-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-secondary">
                District Services Improvement Program (DSIP)
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                National government funding allocated to every district annually
                for service delivery — covering education support, health programs,
                agriculture, and community grants.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-secondary">
                District Infrastructure Program (DIP)
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                Capital funding for physical infrastructure — roads, bridges,
                government buildings, and other fixed assets across the district&apos;s
                four LLGs.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Programs by category */}
      <Container className="py-14 space-y-14">
        {byCategory.map(({ category, items }) => (
          <section key={category}>
            <SectionHeading title={`${category} Programs`} />
            <div className="grid gap-6 sm:grid-cols-2 mt-4">
              {items.map((program) => (
                <article
                  key={program.slug}
                  className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                        {program.status}
                      </span>
                      {program.fundingSource ? (
                        <span className="inline-flex items-center rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600">
                          {program.fundingSource}
                        </span>
                      ) : null}
                    </div>
                    <VerifyBadge verified={program.verified} />
                  </div>
                  <h3 className="mt-3 font-semibold text-secondary">
                    {program.title}
                  </h3>
                  {program.year ? (
                    <p className="mt-1 text-xs text-zinc-500">{program.year}</p>
                  ) : null}
                  <p className="mt-2 text-sm text-zinc-600">{program.summary}</p>
                  {program.details.length > 0 ? (
                    <ul className="mt-4 space-y-2">
                      {program.details.map((detail, i) => (
                        <li key={i} className="flex gap-2 text-sm text-zinc-600">
                          <span className="text-primary shrink-0">▸</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>
          </section>
        ))}
      </Container>
    </>
  );
}
