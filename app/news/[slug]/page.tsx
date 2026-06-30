import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import VerifyBadge from "@/components/VerifyBadge";
import { getNews, getNewsBySlug } from "@/lib/content";

// Required for static export: pre-render a page for every known slug.
export function generateStaticParams() {
  return getNews().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) return {};
  return { title: item.title, description: item.summary };
}

export default async function NewsItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) notFound();

  return (
    <Container className="py-14">
      <Link
        href="/news/"
        className="text-sm font-medium text-primary hover:underline"
      >
        ← Back to News
      </Link>
      <article className="mt-6 max-w-2xl">
        <header className="mb-6">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <time className="text-sm text-zinc-500">
              {new Date(item.date).toLocaleDateString("en-PG", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <VerifyBadge verified={item.verified} />
          </div>
          <h1 className="text-3xl font-bold text-secondary">{item.title}</h1>
          <p className="mt-3 text-lg text-zinc-600">{item.summary}</p>
        </header>
        <div className="prose prose-zinc max-w-none space-y-4 text-zinc-700">
          {item.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        {item.source ? (
          <p className="mt-8 text-sm text-zinc-500 border-t border-zinc-200 pt-4">
            Source:{" "}
            <a
              href={item.source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {item.source.label}
            </a>
          </p>
        ) : null}
      </article>
    </Container>
  );
}
