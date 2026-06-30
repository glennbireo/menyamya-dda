import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { NewsCard } from "@/components/Cards";
import { getNews } from "@/lib/content";

export const metadata: Metadata = {
  title: "News & Updates",
  description:
    "Latest news, announcements, and updates from the Menyamya District Development Authority.",
};

export default function NewsPage() {
  const items = getNews();

  return (
    <>
      <PageHero
        title="News &amp; Updates"
        subtitle="Announcements and updates from the Menyamya District Development Authority."
      />
      <Container className="py-14">
        {items.length === 0 ? (
          <p className="text-zinc-500">No news items yet.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <NewsCard key={item.slug} item={item} />
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
