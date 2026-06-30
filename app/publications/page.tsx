import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { DocumentCard } from "@/components/Cards";
import { getDocuments } from "@/lib/content";
import type { DocumentCategory } from "@/types";

export const metadata: Metadata = {
  title: "Publications & Documents",
  description:
    "Transparency hub for Menyamya DDA — development plans, budgets, annual reports, and policies.",
};

const CATEGORY_ORDER: DocumentCategory[] = [
  "Development Plan",
  "Budget",
  "Annual Report",
  "Policy",
];

export default function PublicationsPage() {
  const documents = getDocuments();

  const byCategory = CATEGORY_ORDER.map((cat) => ({
    category: cat,
    items: documents.filter((d) => d.category === cat),
  })).filter((g) => g.items.length > 0);

  return (
    <>
      <PageHero
        title="Publications &amp; Documents"
        subtitle="Transparency is central to the MDDA's mandate. This page will host development plans, budgets, annual reports, and policies as they are approved for public release."
      />

      <Container className="py-14 space-y-12">
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm text-amber-800">
          <strong>Note:</strong> Documents are being compiled by the MDDA
          administration and will be uploaded to this page as they are approved
          for public release. Links marked &quot;Pending upload&quot; will be
          updated shortly before site launch.
        </div>

        {byCategory.map(({ category, items }) => (
          <section key={category}>
            <SectionHeading title={`${category}s`} />
            <div className="grid gap-5 sm:grid-cols-2 mt-4">
              {items.map((doc, i) => (
                <DocumentCard key={i} doc={doc} />
              ))}
            </div>
          </section>
        ))}
      </Container>
    </>
  );
}
