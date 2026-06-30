import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import VerifyBadge from "@/components/VerifyBadge";
import { getLeadership, getDistrict } from "@/lib/content";

export const metadata: Metadata = {
  title: "About MDDA",
  description:
    "Learn about the Menyamya District Development Authority — its establishment, governance structure, vision, and leadership.",
};

export default function AboutPage() {
  const { boardChairman, ceo, llgPresidents } = getLeadership();
  const district = getDistrict();

  return (
    <>
      <PageHero
        title="About the Authority"
        subtitle="Established under the District Development Authority Act 2014 to drive service delivery and development in Menyamya District."
      />

      {/* Establishment */}
      <Container className="py-14">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading title="Our Establishment" />
            <div className="space-y-4 text-zinc-700 text-sm leading-relaxed">
              <p>
                The Menyamya District Development Authority was established under
                the <strong>{district.establishingAct}</strong>, which created a
                uniform framework of District Development Authorities across Papua
                New Guinea to improve local service infrastructure and delivery.
              </p>
              <p>
                Each DDA is a body corporate with perpetual succession, capable of
                holding property, entering contracts, and exercising all the powers
                of a legal entity in service of its district communities.
              </p>
              <p>
                The Authority administers District Services Improvement Program
                (DSIP) and District Infrastructure Program (DIP) funds on behalf of
                the people of Menyamya District, ensuring investments address local
                needs across all four LLGs.
              </p>
            </div>
          </div>
          <div>
            <SectionHeading title="Vision &amp; Mission" />
            <div className="space-y-6">
              <div className="rounded-lg border-l-4 border-primary bg-zinc-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                  Vision
                </p>
                <p className="text-zinc-700 text-sm">
                  A prosperous and well-served Menyamya District where every
                  citizen has access to quality infrastructure, education, health
                  services, and economic opportunity.
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-accent bg-zinc-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">
                  Mission
                </p>
                <p className="text-zinc-700 text-sm">
                  To plan, fund, and deliver infrastructure and services that
                  improve the lives of all people in Menyamya District, with
                  transparency, accountability, and respect for our communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Governance Structure */}
      <div className="border-y border-zinc-200 bg-zinc-50">
        <Container className="py-14">
          <SectionHeading
            title="Governance Structure"
            subtitle="How the Authority is organised under the DDA Act 2014"
          />
          <div className="grid gap-6 sm:grid-cols-3 mt-6">
            <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                The Board
              </p>
              <p className="text-sm text-zinc-700">
                The Board is the governing body of the Authority. It is chaired by
                the District&apos;s Member of Parliament and comprises all Local-Level
                Government Presidents in the district as members.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                Chief Executive Officer
              </p>
              <p className="text-sm text-zinc-700">
                Day-to-day operations are managed by the CEO, who also serves as
                the District Administrator — the most senior public servant in the
                district.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                NEC Oversight
              </p>
              <p className="text-sm text-zinc-700">
                The National Executive Council (NEC) retains oversight of all DDAs
                under section 16 of the Act, and may suspend a Board in cases of
                non-performance or mismanagement.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Leadership */}
      <Container className="py-14">
        <SectionHeading
          title="Board Leadership"
          subtitle="The MDDA Board is composed of the district MP (as Chairman), all four LLG Presidents, and the CEO."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          {/* Chairman */}
          <div className="col-span-full rounded-lg border-2 border-primary bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">
                  Board Chairman
                </p>
                <h3 className="text-lg font-bold text-secondary">
                  {boardChairman.name}
                </h3>
                <p className="text-sm text-zinc-600 mt-0.5">{boardChairman.role}</p>
              </div>
              <VerifyBadge verified={boardChairman.verified} />
            </div>
            {boardChairman.bio ? (
              <p className="mt-3 text-sm text-zinc-600">{boardChairman.bio}</p>
            ) : null}
          </div>

          {/* CEO */}
          <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-1">
                  CEO
                </p>
                <h3 className="font-semibold text-secondary">{ceo.name}</h3>
                <p className="text-sm text-zinc-600 mt-0.5">{ceo.role}</p>
              </div>
              <VerifyBadge verified={ceo.verified} />
            </div>
            {ceo.bio ? (
              <p className="mt-3 text-sm text-zinc-600">{ceo.bio}</p>
            ) : null}
          </div>

          {/* LLG Presidents */}
          {llgPresidents.map((member, i) => (
            <div key={i} className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-1">
                    Board Member
                  </p>
                  <h3 className="font-semibold text-secondary">{member.name}</h3>
                  <p className="text-sm text-zinc-600 mt-0.5">{member.role}</p>
                </div>
                <VerifyBadge verified={member.verified} />
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Key Functions */}
      <div className="bg-secondary text-white">
        <Container className="py-12">
          <SectionHeading title="Key Functions of the Authority" />
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              "Perform service delivery functions across the district's LLGs",
              "Develop, build, repair and improve district infrastructure",
              "Oversee and coordinate district planning and budget priorities",
              "Determine budget allocations for Local-Level Governments",
              "Draw up and implement rolling five-year development plans",
              "Administer DSIP and DIP funds in the public interest",
            ].map((fn) => (
              <li key={fn} className="flex gap-3 text-sm text-zinc-300">
                <span className="text-accent">▸</span>
                {fn}
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </>
  );
}
