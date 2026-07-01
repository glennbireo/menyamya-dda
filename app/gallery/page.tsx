import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { galleryImage } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos and media from Menyamya District — development projects, community events, and district life.",
};

const GALLERY_ITEMS = [
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
  Education:      "bg-green-100 text-green-800",
  Community:      "bg-purple-100 text-purple-800",
  Partnerships:   "bg-amber-100 text-amber-800",
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
          <strong>Note:</strong> These are placeholder images showing the gallery
          layout. Official MDDA photographs are pending upload — contact
          details are on the{" "}
          <a href="/contact/" className="underline hover:text-amber-900">
            Contact
          </a>{" "}
          page if you would like to submit photos.
        </div>

        {/*
          Masonry-style grid.
          HCI Consistency: all images share square aspect ratio creating
          a predictable, scannable grid (Gestalt similarity principle).
          HCI Proximity: caption sits directly below its image.
          First image loads eagerly (above the fold); rest lazy-load.
        */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {GALLERY_ITEMS.map((item, i) => (
            <div key={i} className="group overflow-hidden rounded-xl shadow-sm">
              <div className="aspect-square w-full overflow-hidden bg-zinc-100">
                {/* TODO: Replace with official MDDA photograph */}
                <img
                  src={galleryImage(i)}
                  alt={item.label}
                  width={600}
                  height={600}
                  loading={i < 4 ? "eager" : "lazy"}
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* Caption directly below — Gestalt proximity */}
              <div className="bg-white px-3 py-2.5 border border-t-0 border-zinc-200 rounded-b-xl">
                <span
                  className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${CATEGORY_COLORS[item.category] ?? "bg-zinc-100 text-zinc-700"}`}
                >
                  {item.category}
                </span>
                <p className="mt-1 text-xs font-medium text-zinc-700 leading-snug">
                  {item.label}
                </p>
              </div>
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
