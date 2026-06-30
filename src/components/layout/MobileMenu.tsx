import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import { navLinks, site } from "../../data/site";
import { openWhatsApp } from "../../lib/whatsapp";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const focusableSelector = 'a[href], button, select, textarea, input, [tabindex]:not([tabindex="-1"])';
    const container = containerRef.current;
    if (!container) return;

    const focusableElements = Array.from(
      container.querySelectorAll<HTMLElement>(focusableSelector)
    );

    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab") {
        const elements = Array.from(
          container.querySelectorAll<HTMLElement>(focusableSelector)
        );
        if (elements.length === 0) return;

        const firstEl = elements[0];
        const lastEl = elements[elements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstEl) {
            lastEl.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastEl) {
            firstEl.focus();
            e.preventDefault();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] lg:hidden" role="presentation">
      {/* Backdrop - tabIndex={-1} excludes it from keyboard focus order */}
      <button
        type="button"
        tabIndex={-1}
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close menu"
      />

      {/* Drawer */}
      <div
        ref={containerRef}
        className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col bg-white shadow-2xl sm:w-80"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex items-center justify-between border-b border-neutral-100 px-5 py-4">
          <span className="font-[family-name:var(--font-heading)] text-lg font-bold text-ink">
            Menu
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-full p-2 text-ink hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto px-3 py-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              onClick={onClose}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3.5 text-base font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald ${
                  isActive
                    ? "bg-emerald/10 text-emerald"
                    : "text-ink hover:bg-neutral-50"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-neutral-100 p-4 bg-neutral-50">
          <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-3">WhatsApp Channels</p>
          <div className="grid gap-2">
            {site.allWhatsapps.map((chan) => (
              <button
                key={chan.number}
                type="button"
                onClick={() => {
                  onClose();
                  openWhatsApp(`Hello El Albab, I'd like to make an inquiry.`, chan.number);
                }}
                className="flex items-center justify-between rounded-xl border border-neutral-200/60 bg-white px-3 py-2 text-left text-xs font-semibold text-neutral-600 transition hover:border-gold hover:text-ink shadow-xs focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald"
              >
                <span>{chan.label}</span>
                <span className="text-[10px] text-gold bg-gold/5 px-2 py-0.5 rounded-full">{chan.display}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
