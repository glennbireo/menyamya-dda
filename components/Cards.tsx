import Link from "next/link";
import type { DevelopmentProgram, DocumentLink, LLG, NewsItem } from "@/types";
import VerifyBadge from "@/components/VerifyBadge";

export function LLGCard({ llg }: { llg: LLG }) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
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
  );
}

export function ProgramCard({ program }: { program: DevelopmentProgram }) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
          {program.category}
        </span>
        <VerifyBadge verified={program.verified} />
      </div>
      <h3 className="mt-3 font-semibold text-secondary">{program.title}</h3>
      <p className="mt-2 text-sm text-zinc-600">{program.summary}</p>
      <div className="mt-3 flex flex-wrap gap-3 text-xs text-zinc-500">
        <span>Status: {program.status}</span>
        {program.year ? <span>· {program.year}</span> : null}
        {program.fundingSource ? <span>· {program.fundingSource}</span> : null}
      </div>
    </div>
  );
}

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Link
      href={`/news/${item.slug}/`}
      className="block rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:border-primary"
    >
      <div className="flex items-start justify-between gap-2">
        <time className="text-xs text-zinc-500">
          {new Date(item.date).toLocaleDateString("en-PG", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <VerifyBadge verified={item.verified} />
      </div>
      <h3 className="mt-2 font-semibold text-secondary">{item.title}</h3>
      <p className="mt-2 text-sm text-zinc-600">{item.summary}</p>
    </Link>
  );
}

export function DocumentCard({ doc }: { doc: DocumentLink }) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <span className="inline-flex items-center rounded-full bg-secondary/10 px-2 py-0.5 text-xs font-medium text-secondary">
          {doc.category}
        </span>
        <VerifyBadge verified={doc.verified} />
      </div>
      <h3 className="mt-3 font-semibold text-secondary">{doc.title}</h3>
      <p className="mt-2 text-sm text-zinc-600">{doc.description}</p>
      <a
        href={doc.href}
        className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
      >
        View document →
      </a>
    </div>
  );
}
