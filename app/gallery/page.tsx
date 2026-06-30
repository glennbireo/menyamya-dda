import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos and media from Menyamya District — development projects, community events, and district life.",
};

const PLACEHOLDER_TILES = [
  { label: "District Office Groundbreaking", category: "Infrastructure" },
  { label: "Scholarship Graduation Ceremony 2026", category: "Education" },
  { label: "Road Works — Menyamya Station", category: "Infrastructure" },
  { label: "Academic Incentive Awards Night", category: "Education" },
  { label: "Community Meeting — Kapao Rural LLG", category: "Community" },
  { label: "ADRA Partnership Signing", category: "Partnerships" },
  { label: "Community Meeting — Kome Rural LLG", category: "Community" },
  { label: "Community Meeting — Wapi Rural LLG", category: "Community" },
];

const CATEGORY_COLORS: Record<string, string> = {
  Infrastructure: "bg-blue-100 text-blue-800",
  Education: "bg-green-100 text-green-800",
  Community: "bg-purple-100 text-purple-800",
  Partnerships: "bg-amber-100 text-amber-800",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Photos and media from MDDA projects, events, and community activities across Menyamya District."
      />

      <Container className="py-14">
        <div className="mb-8 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
          <strong>Note:</strong> Real photos are pending upload by MDDA
          administration. The tiles below show placeholder captions for content
          categories that will be populated before launch.
        </div>

        <SectionHeading title="Recent Projects &amp; Events" />
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-4">
          {PLACEHOLDER_TILES.map((tile, i) => (
            <div
              key={i}
              className="aspect-square rounded-lg bg-zinc-100 border border-zinc-200 flex flex-col items-center justify-center p-3 text-center"
            >
              <span
                className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium mb-2 ${CATEGORY_COLORS[tile.category] ?? "bg-zinc-200 text-zinc-700"}`}
              >
                {tile.category}
              </span>
              <p className="text-xs text-zinc-500">{tile.label}</p>
              <p className="mt-2 text-xs text-zinc-400 italic">Photo pending</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <SectionHeading
            title="Submit Photos"
            subtitle="Community members and partner organisations with photos relevant to district development are welcome to submit them for inclusion."
          />
          <a
            href="/contact/"
            className="mt-4 inline-block rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark"
          >
            Contact MDDA to submit photos
          </a>
        </div>
      </Container>
    </>
  );
}
