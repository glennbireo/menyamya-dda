import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import VerifyBadge from "@/components/VerifyBadge";
import { getNews, getNewsBySlug } from "@/lib/content";
import { newsImage } from "@/lib/images";

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
    <>
      {/*
        Article hero image — wide, visually striking.
        HCI: Sets context for the article before the reader reaches the
        headline (Recognition). Dark-to-transparent gradient at bottom
        maintains readability if captions or overlapping elements are added
        later. Loads eagerly (fetchPriority high) since it is above the fold.
        TODO: Replace with official MDDA photograph for this news item.
      */}
      <div className="relative h-64 w-full overflow-hidden bg-zinc-200 sm:h-80 lg:h-96">
        <img
          src={newsImage(item.slug)}
          alt={item.title}
          width={1200}
          height={600}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover"
        />
        {/* Bottom gradient softens the cut to the article body */}
        <div
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent"
          aria-hidden="true"
        />
      </div>

      <Container className="pb-16 pt-6">
        <Link
          href="/news/"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← Back to News
        </Link>

        <article className="mt-6 max-w-2xl">
          <header className="mb-6">
            <div className="mb-3 flex flex-wrap items-center gap-3">
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

          <div className="space-y-4 text-zinc-700">
            {item.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {item.source ? (
            <p className="mt-8 border-t border-zinc-200 pt-4 text-sm text-zinc-500">
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
    </>
  );
}
