import type { NavLink } from "@/types";

export const siteConfig = {
  orgName: "Menyamya District Development Authority",
  orgShortName: "MDDA",
  tagline: "Serving the people of Menyamya District, Morobe Province",
  contact: {
    address: "MDDA District Office, Menyamya Station, Morobe Province, Papua New Guinea",
    phone: "Pending confirmation",
    email: "Pending confirmation",
  },
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "District Profile", href: "/district-profile/" },
  { label: "Programs", href: "/programs/" },
  { label: "News", href: "/news/" },
  { label: "Publications", href: "/publications/" },
  { label: "Services", href: "/services/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "Contact", href: "/contact/" },
];
