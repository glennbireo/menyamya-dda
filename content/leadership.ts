import type { BoardMember } from "@/types";

export const boardChairman: BoardMember = {
  name: "Hon. Solen O. Loifa, MP",
  role: "Board Chairman — Member for Menyamya & Minister for Mining",
  bio:
    "Under the District Development Authority Act 2014, the sitting Member of Parliament for the district chairs the MDDA Board.",
  verified: false,
};

export const ceo: BoardMember = {
  name: "District Administrator",
  role: "Chief Executive Officer, MDDA",
  bio:
    "The Act provides that the District Administrator also serves as the Authority's CEO, responsible for day-to-day operations. Name pending confirmation by MDDA.",
  verified: false,
};

export const llgPresidents: BoardMember[] = [
  {
    name: "LLG President — Kapao Rural",
    role: "Board Member",
    verified: false,
  },
  {
    name: "LLG President — Kome Rural",
    role: "Board Member",
    verified: false,
  },
  {
    name: "LLG President — Nanima Kariba Rural (Aseki)",
    role: "Board Member",
    verified: false,
  },
  {
    name: "LLG President — Wapi Rural",
    role: "Board Member",
    verified: false,
  },
];

export const boardMembers: BoardMember[] = [boardChairman, ceo, ...llgPresidents];
