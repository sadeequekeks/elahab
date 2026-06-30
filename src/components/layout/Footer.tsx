import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import { navLinks, site } from "../../data/site";
import { BrandLogo } from "./BrandLogo";
import { Container } from "../ui/Container";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <BrandLogo src={site.logoOnDark} className="h-10 w-auto" />
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              {site.tagline}
            </p>
            <p className="mt-2 text-sm text-neutral-500">
              Nigeria&apos;s first licensed real estate agency in Egypt.
            </p>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-gold">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-neutral-400 transition hover:text-white rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-gold">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-neutral-400">
              {site.phones.map((phone) => (
                <li key={phone}>
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-white rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald">
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-white rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald">
                  {site.email}
                </a>
              </li>
              {site.offices.map((office) => (
                <li key={office.country} className="text-xs leading-normal">
                  <span className="font-semibold text-neutral-300 block">{office.country} Office:</span>
                  {office.address}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-gold">
              Follow Us
            </h3>
            <div className="mt-4 flex gap-3">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 text-neutral-400 transition hover:border-gold hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={site.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 text-xs font-semibold text-neutral-400 transition hover:border-gold hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald"
                aria-label="TikTok"
              >
                TT
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500 sm:mt-12">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            <Link to="/privacy" className="hover:text-white rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-white rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald">
              Contact
            </Link>
          </div>
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
