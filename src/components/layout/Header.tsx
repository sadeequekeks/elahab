import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { navLinks, site } from "../../data/site";
import { isHeroOverlayPath } from "../../lib/routes";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { openWhatsApp } from "../../lib/whatsapp";
import { BrandLogo } from "./BrandLogo";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHeroOverlay = isHeroOverlayPath(pathname);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /** Transparent glass bar over hero image (home + about, before scroll) */
  const glassHero = isHeroOverlay && !scrolled && !mobileOpen;

  const navClass = ({ isActive }: { isActive: boolean }) => {
    if (isActive) return "text-xs font-bold text-gold transition";
    if (glassHero) {
      return "text-xs font-bold text-white/85 transition hover:text-white";
    }
    return "text-xs font-bold text-ink/80 transition hover:text-ink";
  };

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 w-[calc(100%-2rem)] max-w-7xl rounded-2xl sm:rounded-3xl border ${
          glassHero
            ? "border-white/10 bg-white/10 backdrop-blur-md shadow-sm"
            : "border-neutral-200/50 bg-white/85 backdrop-blur-md shadow-md"
        }`}
      >
        <Container className="flex h-14 items-center justify-between sm:h-16 px-4 sm:px-6">
          <BrandLogo
            src={glassHero ? site.logoOnDark : site.logo}
            className="h-8 w-auto sm:h-9 object-contain rounded-lg"
          />

          <nav
            className={`hidden items-center gap-0.5 rounded-full border px-1 py-1 lg:flex ${
              glassHero
                ? "border-white/10 bg-white/10"
                : "border-neutral-200/40 bg-white/60"
            }`}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `rounded-full px-3 py-1.5 uppercase tracking-wider transition ${navClass({ isActive })}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button
              variant="primary"
              size="sm"
              className="rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider"
              onClick={() =>
                openWhatsApp(
                  `Hello ${site.name}, I'd like to get started with a property inquiry.`,
                )
              }
            >
              Get Started
            </Button>
          </div>

          <button
            ref={hamburgerRef}
            type="button"
            className={`relative z-10 rounded-full p-2 transition lg:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald ${
              glassHero
                ? "text-white hover:bg-white/15"
                : "text-ink hover:bg-neutral-100"
            }`}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <Menu className="h-5 w-5" />
          </button>
        </Container>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => {
          setMobileOpen(false);
          setTimeout(() => {
            hamburgerRef.current?.focus();
          }, 0);
        }}
      />
    </>
  );
}
