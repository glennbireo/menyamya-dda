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

/** Styled initials avatar — used instead of a random stock-photo face,
 *  which would be misleading on a real government site. Replace this
 *  component entirely with an <img> once MDDA supplies official portraits. */
function InitialsAvatar({
  name,
  size = "lg",
}: {
  name: string;
  size?: "sm" | "lg";
}) {
  const initials = name
    .split(" ")
    .filter((w) => /^[A-Z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  const classes =
    size === "lg"
      ? "h-24 w-24 text-2xl"
      : "h-12 w-12 text-sm";

  return (
    <div
      className={`flex items-center justify-center rounded-full bg-primary text-white font-bold shrink-0 ${classes}`}
      aria-label={`Portrait placeholder for ${name}`}
      title="Official portrait pending — TODO: replace with MDDA-supplied photo"
    >
      {initials || "?"}
    </div>
  );
}

export default function AboutPage() {
  const { boardChairman, ceo, llgPresidents } = getLeadership();
  const district = getDistrict();

  return (
    <>
      <PageHero
        title="About the Authority"
        subtitle="Established under the District Development Authority Act 2014 to drive service delivery and development in Menyamya District."
      />

      {/* Establishment & Vision */}
      <Container className="py-14">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading title="Our Establishment" />
            <div className="space-y-4 text-sm leading-relaxed text-zinc-700">
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
                (DSIP) and District Infrastructure Program (DIP) funds on behalf
                of the people of Menyamya District, ensuring investments address
                local needs across all four LLGs.
              </p>
            </div>
          </div>
          <div>
            <SectionHeading title="Vision &amp; Mission" />
            <div className="space-y-6">
              <div className="rounded-xl border-l-4 border-primary bg-zinc-50 p-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                  Vision
                </p>
                <p className="text-sm text-zinc-700">
                  A prosperous and well-served Menyamya District where every
                  citizen has access to quality infrastructure, education, health
                  services, and economic opportunity.
                </p>
              </div>
              <div className="rounded-xl border-l-4 border-accent bg-zinc-50 p-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-amber-700">
                  Mission
                </p>
                <p className="text-sm text-zinc-700">
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
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {[
              {
                heading: "The Board",
                body:
                  "Chaired by the District's MP and comprising all LLG Presidents, the Board is the governing body responsible for strategic direction and major decisions.",
              },
              {
                heading: "Chief Executive Officer",
                body:
                  "Day-to-day operations are managed by the CEO, who also serves as District Administrator — the most senior public servant in the district.",
              },
              {
                heading: "NEC Oversight",
                body:
                  "The National Executive Council retains oversight under section 16 of the Act and may suspend a Board for non-performance or mismanagement.",
              },
            ].map(({ heading, body }) => (
              <div
                key={heading}
                className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                  {heading}
                </p>
                <p className="text-sm text-zinc-700">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/*
        Board Leadership — visual people section.
        HCI: Initials avatars give each member a distinct visual identity
        even before official portraits are available, supporting Recognition.
        The chairman card uses a larger avatar and elevated border to
        establish visual hierarchy (most prominent person, most prominent card).
        TODO: Replace InitialsAvatar with <img> + official portrait once supplied.
      */}
      <Container className="py-14">
        <SectionHeading
          title="Board Leadership"
          subtitle="The MDDA Board is composed of the district MP (Chairman), all four LLG Presidents, and the CEO."
        />

        {/* Chairman — full-width featured card */}
        <div className="mt-6 overflow-hidden rounded-xl border-2 border-primary bg-white shadow-sm">
          <div className="grid sm:grid-cols-[auto_1fr]">
            {/* Portrait area */}
            <div className="flex items-center justify-center bg-primary/5 px-8 py-8 sm:py-0">
              <InitialsAvatar name={boardChairman.name} size="lg" />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Board Chairman
                </p>
                <VerifyBadge verified={boardChairman.verified} />
              </div>
              <h3 className="mt-1 text-xl font-bold text-secondary">
                {boardChairman.name}
              </h3>
              <p className="mt-0.5 text-sm text-zinc-500">{boardChairman.role}</p>
              {boardChairman.bio ? (
                <p className="mt-3 text-sm text-zinc-600">{boardChairman.bio}</p>
              ) : null}
            </div>
          </div>
        </div>

        {/* CEO + LLG Presidents grid */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* CEO */}
          <div className="flex gap-4 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
            <InitialsAvatar name={ceo.name} size="sm" />
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                  CEO
                </p>
                <VerifyBadge verified={ceo.verified} />
              </div>
              <h3 className="mt-0.5 font-semibold text-secondary">{ceo.name}</h3>
              <p className="text-xs text-zinc-500">{ceo.role}</p>
              {ceo.bio ? (
                <p className="mt-2 text-xs text-zinc-600">{ceo.bio}</p>
              ) : null}
            </div>
          </div>

          {/* LLG Presidents */}
          {llgPresidents.map((member, i) => (
            <div
              key={i}
              className="flex gap-4 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm"
            >
              <InitialsAvatar name={member.name} size="sm" />
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                    Board Member
                  </p>
                  <VerifyBadge verified={member.verified} />
                </div>
                <h3 className="mt-0.5 font-semibold text-secondary">{member.name}</h3>
                <p className="text-xs text-zinc-500">{member.role}</p>
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
                <span className="shrink-0 text-accent">▸</span>
                {fn}
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </>
  );
}
