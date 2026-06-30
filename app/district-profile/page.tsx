import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import StatGrid from "@/components/StatGrid";
import { LLGCard } from "@/components/Cards";
import { getDistrict, getLLGs } from "@/lib/content";

export const metadata: Metadata = {
  title: "District Profile",
  description:
    "Geography, population, Local-Level Governments, and community overview of Menyamya District, Morobe Province.",
};

export default function DistrictProfilePage() {
  const district = getDistrict();
  const llgs = getLLGs();

  const stats = [
    { label: "Province", value: "Morobe" },
    { label: "Area", value: "3,729 km²" },
    { label: "2024 Population", value: "119,809" },
    { label: "Local-Level Govts", value: "4 LLGs" },
  ];

  return (
    <>
      <PageHero
        title="District Profile"
        subtitle={`${district.name}, ${district.province}, ${district.country}`}
      />

      <Container className="py-14">
        <StatGrid stats={stats} />
      </Container>

      {/* Geography */}
      <div className="border-y border-zinc-200 bg-zinc-50">
        <Container className="py-14">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading title="Geography &amp; Location" />
              <div className="space-y-4 text-sm text-zinc-700 leading-relaxed">
                <p>
                  Menyamya District is situated in the southern highlands fringe
                  of Morobe Province, Papua New Guinea, at approximately{" "}
                  <strong>{district.coordinates}</strong>. It covers an area of{" "}
                  <strong>{district.areaKm2.toLocaleString()} km²</strong> and its
                  administrative centre is <strong>{district.capital}</strong>.
                </p>
                <p>
                  The district borders several other districts across Morobe and
                  Gulf Provinces. Its terrain is characterised by mountainous
                  highlands, river valleys, and dense forest — typical of the
                  Highland Fringe zone of Papua New Guinea.
                </p>
                <p>
                  Road access to and within the district remains a key development
                  priority for the MDDA, with ongoing investment through the
                  District Infrastructure Program.
                </p>
              </div>
            </div>
            <div>
              <SectionHeading title="Population &amp; Demographics" />
              <div className="space-y-4">
                <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
                  <dl className="space-y-3 text-sm">
                    {[
                      { label: "2024 Census Population", value: "119,809" },
                      { label: "2011 Census Population", value: "87,209" },
                      { label: "Population Growth", value: "≈ +37% over 13 years" },
                      { label: "Population Density", value: "≈ 32 people / km²" },
                      { label: "District Capital", value: district.capital },
                      { label: "Province", value: district.province },
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between border-b border-zinc-100 pb-3">
                        <dt className="text-zinc-500">{row.label}</dt>
                        <dd className="font-medium text-secondary">{row.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <p className="text-xs text-zinc-500">
                  Population data sourced from Papua New Guinea National Census
                  records (2011, 2024).
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* LLGs */}
      <Container className="py-14">
        <SectionHeading
          title="Local-Level Governments"
          subtitle="Menyamya District is administered through four LLGs, each represented on the MDDA Board."
        />
        <div className="grid gap-5 sm:grid-cols-2 mt-6">
          {llgs.map((llg) => (
            <LLGCard key={llg.slug} llg={llg} />
          ))}
        </div>
        <p className="mt-6 text-xs text-zinc-500">
          LLG President names are pending confirmation by MDDA — they are shown
          on the{" "}
          <a href="/about/" className="underline hover:text-primary">
            About
          </a>{" "}
          page once verified.
        </p>
      </Container>

      {/* Culture */}
      <div className="bg-secondary text-white">
        <Container className="py-12">
          <SectionHeading title="Culture &amp; Communities" />
          <div className="mt-4 max-w-2xl space-y-4 text-sm text-zinc-300">
            <p>
              Menyamya District is home to diverse Angan-speaking communities
              known for strong cultural identity, traditional land governance, and
              resilient community structures. The district&apos;s communities have
              maintained distinct cultural practices while engaging with modern
              governance and development frameworks.
            </p>
            <p>
              Cultural heritage and community participation remain important
              considerations in MDDA planning processes, with local knowledge
              informing service delivery approaches across the LLGs.
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}
