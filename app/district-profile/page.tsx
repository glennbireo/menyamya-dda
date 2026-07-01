import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import StatGrid from "@/components/StatGrid";
import { LLGCard } from "@/components/Cards";
import { getDistrict, getLLGs } from "@/lib/content";
import { districtLandscapeImage, cultureImage } from "@/lib/images";

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

      {/* Geography section with landscape image */}
      <div className="border-y border-zinc-200 bg-zinc-50">
        <Container className="py-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionHeading title="Geography &amp; Location" />
              <div className="space-y-4 text-sm leading-relaxed text-zinc-700">
                <p>
                  Menyamya District is situated in the southern highlands fringe
                  of Morobe Province at approximately{" "}
                  <strong>{district.coordinates}</strong>. It covers an area of{" "}
                  <strong>{district.areaKm2.toLocaleString()} km²</strong> and
                  its administrative centre is{" "}
                  <strong>{district.capital}</strong>.
                </p>
                <p>
                  The district borders several districts across Morobe and Gulf
                  Provinces. Its terrain is characterised by mountainous
                  highlands, river valleys, and dense forest — typical of the
                  Highland Fringe zone of Papua New Guinea.
                </p>
                <p>
                  Road access to and within the district remains a key
                  development priority for the MDDA, with ongoing investment
                  through the District Infrastructure Program.
                </p>
              </div>

              <div className="mt-6 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
                <dl className="space-y-3 text-sm">
                  {[
                    { label: "2024 Census Population", value: "119,809" },
                    { label: "2011 Census Population", value: "87,209" },
                    { label: "Population Growth", value: "≈ +37% (2011–2024)" },
                    { label: "Population Density", value: "≈ 32 people / km²" },
                    { label: "District Capital", value: district.capital },
                    { label: "Province", value: district.province },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="flex justify-between border-b border-zinc-100 pb-3 last:border-0 last:pb-0"
                    >
                      <dt className="text-zinc-500">{row.label}</dt>
                      <dd className="font-medium text-secondary">{row.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 text-xs text-zinc-400">
                  Source: Papua New Guinea National Census (2011, 2024).
                </p>
              </div>
            </div>

            {/*
              District landscape image — sets a vivid geographic mental model.
              HCI: The image occupies the right column at desktop, visible
              immediately alongside the text (Gestalt proximity), so the user
              connects data points to a real place without scrolling.
              TODO: Replace with an official aerial/landscape photo of
              Menyamya District once supplied by MDDA.
            */}
            <div className="overflow-hidden rounded-xl shadow-md">
              <img
                src={districtLandscapeImage}
                alt="Highland landscape representative of Menyamya District, Morobe Province, Papua New Guinea"
                width={1200}
                height={600}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <p className="bg-zinc-800 px-3 py-2 text-xs text-zinc-400">
                Placeholder — pending official MDDA district photograph.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/*
        LLG grid — image cards.
        HCI: Each LLG gets a distinct landscape thumbnail so users can
        develop a geographic mental model of the four areas without reading
        dense text (Recognition over Recall).
      */}
      <Container className="py-14">
        <SectionHeading
          title="Local-Level Governments"
          subtitle="Menyamya District is administered through four LLGs, each represented on the MDDA Board."
        />
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {llgs.map((llg) => (
            <LLGCard key={llg.slug} llg={llg} />
          ))}
        </div>
        <p className="mt-6 text-xs text-zinc-500">
          LLG President names are pending confirmation — see the{" "}
          <a href="/about/" className="underline hover:text-primary">
            About
          </a>{" "}
          page once verified.
        </p>
      </Container>

      {/*
        Culture section with full-width image.
        HCI: A wide community photo at the bottom of the page rewards users
        who scroll through (Aesthetic-Usability Effect) and provides a human
        connection after statistical/geographic content.
        TODO: Replace with an official community photograph from Menyamya District.
      */}
      <div className="relative overflow-hidden">
        <img
          src={cultureImage}
          alt="Community gathering representative of the diverse communities of Menyamya District"
          width={1200}
          height={500}
          loading="lazy"
          decoding="async"
          className="h-80 w-full object-cover object-center"
        />
        {/* Overlay text panel — dark scrim ensures WCAG AA contrast */}
        <div className="absolute inset-0 bg-black/55 flex items-end">
          <Container className="pb-10 pt-6">
            <h2 className="text-2xl font-bold text-white">
              Culture &amp; Communities
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-zinc-200">
              Menyamya District is home to diverse Angan-speaking communities
              known for strong cultural identity, traditional land governance,
              and resilient community structures. Cultural heritage and community
              participation remain important considerations in all MDDA planning
              processes.
            </p>
            <p className="mt-2 text-xs text-zinc-400 italic">
              Placeholder photograph — pending official MDDA community image.
            </p>
          </Container>
        </div>
      </div>
    </>
  );
}
