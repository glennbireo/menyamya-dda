import Container from "@/components/Container";
import { getSiteConfig, getNavLinks } from "@/lib/content";

export default function Footer() {
  const site = getSiteConfig();
  const navLinks = getNavLinks();

  return (
    <footer className="border-t border-zinc-200 bg-secondary text-zinc-300">
      <Container className="py-10">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="font-semibold text-white">{site.orgName}</p>
            <p className="mt-2 text-sm">{site.tagline}</p>
          </div>
          <div>
            <p className="font-semibold text-white">Quick Links</p>
            <ul className="mt-2 space-y-1 text-sm">
              {navLinks.slice(1).map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white">Contact</p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>{site.contact.address}</li>
              <li>{site.contact.phone}</li>
              <li>{site.contact.email}</li>
            </ul>
          </div>
        </div>
        <p className="mt-8 border-t border-white/10 pt-6 text-xs text-zinc-400">
          © {new Date().getFullYear()} {site.orgName}. Established under the
          District Development Authority Act 2014.
        </p>
      </Container>
    </footer>
  );
}
