/**
 * Card components follow these HCI principles:
 * - Proximity: image sits directly above its related content
 * - Consistency: same aspect-ratio (16:9) across all card types
 * - Affordance: linked cards animate on hover (image zoom + shadow lift)
 * - Recognition: imagery communicates category before the user reads text
 * - Accessibility: meaningful alt text; decorative images marked aria-hidden
 */
import Link from "next/link";
import type { DevelopmentProgram, DocumentLink, LLG, NewsItem } from "@/types";
import VerifyBadge from "@/components/VerifyBadge";
import { llgImage, programImage, newsImage } from "@/lib/images";

// ─── LLG Card ────────────────────────────────────────────────────────────────

export function LLGCard({ llg }: { llg: LLG }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md">
      {/* 16:9 landscape image — Gestalt figure/ground: image above, content below */}
      <div className="aspect-video w-full overflow-hidden bg-zinc-100">
        {/* TODO: Replace with official MDDA photograph of this LLG */}
        <img
          src={llgImage(llg.slug)}
          alt={`Landscape view of ${llg.name}, Menyamya District`}
          width={800}
          height={450}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-secondary">{llg.name}</h3>
          <VerifyBadge verified={llg.verified} />
        </div>
        <p className="mt-2 text-sm text-zinc-600">{llg.description}</p>
        {llg.president ? (
          <p className="mt-3 text-sm font-medium text-zinc-800">
            President: {llg.president}
          </p>
        ) : null}
      </div>
    </div>
  );
}

// ─── Program Card ─────────────────────────────────────────────────────────────

export function ProgramCard({ program }: { program: DevelopmentProgram }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md">
      {/* Image communicates program category before the user reads — Recognition > Recall */}
      <div className="aspect-video w-full overflow-hidden bg-zinc-100">
        {/* TODO: Replace with official MDDA program photograph */}
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
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
            {program.category}
          </span>
          <VerifyBadge verified={program.verified} />
        </div>
        <h3 className="mt-3 font-semibold text-secondary">{program.title}</h3>
        <p className="mt-2 text-sm text-zinc-600">{program.summary}</p>
        <div className="mt-3 flex flex-wrap gap-3 text-xs text-zinc-500">
          <span>{program.status}</span>
          {program.year ? <span>· {program.year}</span> : null}
          {program.fundingSource ? <span>· {program.fundingSource}</span> : null}
        </div>
      </div>
    </div>
  );
}

// ─── News Card ────────────────────────────────────────────────────────────────

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Link
      href={`/news/${item.slug}/`}
      className="group block overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition hover:border-primary hover:shadow-md"
    >
      {/* Image at top — sets visual context before the headline; zoom on hover signals interactivity */}
      <div className="aspect-video w-full overflow-hidden bg-zinc-100">
        {/* TODO: Replace with official MDDA news photograph */}
        <img
          src={newsImage(item.slug)}
          alt=""
          aria-hidden="true"
          width={800}
          height={450}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-2">
          <time className="text-xs text-zinc-500">
            {new Date(item.date).toLocaleDateString("en-PG", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <VerifyBadge verified={item.verified} />
        </div>
        <h3 className="mt-2 font-semibold text-secondary group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        <p className="mt-2 text-sm text-zinc-600 line-clamp-2">{item.summary}</p>
      </div>
    </Link>
  );
}

// ─── Document Card ────────────────────────────────────────────────────────────

export function DocumentCard({ doc }: { doc: DocumentLink }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm">
      {/* Coloured accent bar replaces image — documents are utilitarian, colour communicates category */}
      <div className="h-2 bg-primary" />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <span className="inline-flex items-center rounded-full bg-secondary/10 px-2 py-0.5 text-xs font-medium text-secondary">
            {doc.category}
          </span>
          <VerifyBadge verified={doc.verified} />
        </div>
        <h3 className="mt-3 font-semibold text-secondary">{doc.title}</h3>
        <p className="mt-2 flex-1 text-sm text-zinc-600">{doc.description}</p>
        <a
          href={doc.href}
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          View document →
        </a>
      </div>
    </div>
  );
}
