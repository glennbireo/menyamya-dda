/**
 * `verified: false` marks facts sourced from public research (news, Wikipedia,
 * parliamentary records) that have not yet been confirmed by MDDA officials.
 * The UI surfaces this via <VerifyBadge> so reviewers can spot what needs
 * sign-off before launch. Flip to `true` once an authorized MDDA source
 * confirms the entry.
 */
export interface Verifiable {
  verified: boolean;
}

export interface BoardMember extends Verifiable {
  name: string;
  role: string;
  bio?: string;
}

export interface LLG extends Verifiable {
  slug: string;
  name: string;
  president?: string;
  description: string;
}

export type ProgramCategory =
  | "Education"
  | "Infrastructure"
  | "Health"
  | "Agriculture"
  | "Governance";

export type ProgramStatus = "Ongoing" | "Completed" | "Planned";

export interface DevelopmentProgram extends Verifiable {
  slug: string;
  title: string;
  category: ProgramCategory;
  status: ProgramStatus;
  summary: string;
  details: string[];
  fundingSource?: string;
  year?: string;
}

export interface NewsSource {
  label: string;
  url: string;
}

export interface NewsItem extends Verifiable {
  slug: string;
  title: string;
  date: string;
  summary: string;
  body: string[];
  source?: NewsSource;
}

export type DocumentCategory =
  | "Development Plan"
  | "Budget"
  | "Annual Report"
  | "Policy";

export interface DocumentLink extends Verifiable {
  title: string;
  description: string;
  category: DocumentCategory;
  year?: string;
  href: string;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface NavLink {
  label: string;
  href: string;
}
