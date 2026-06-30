/**
 * Single seam between pages and content. Every page reads through these
 * accessors rather than importing /content directly, so swapping the static
 * data files for a CMS later only means rewriting this file.
 */
import { district } from "@/content/district";
import { llgs } from "@/content/llgs";
import { boardMembers, boardChairman, ceo, llgPresidents } from "@/content/leadership";
import { programs } from "@/content/programs";
import { news } from "@/content/news";
import { documents } from "@/content/documents";
import { siteConfig, navLinks } from "@/content/site";

export function getDistrict() {
  return district;
}

export function getLLGs() {
  return llgs;
}

export function getLLGBySlug(slug: string) {
  return llgs.find((llg) => llg.slug === slug);
}

export function getLeadership() {
  return { boardMembers, boardChairman, ceo, llgPresidents };
}

export function getPrograms() {
  return programs;
}

export function getProgramBySlug(slug: string) {
  return programs.find((program) => program.slug === slug);
}

export function getNews() {
  return [...news].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getNewsBySlug(slug: string) {
  return news.find((item) => item.slug === slug);
}

export function getDocuments() {
  return documents;
}

export function getSiteConfig() {
  return siteConfig;
}

export function getNavLinks() {
  return navLinks;
}
