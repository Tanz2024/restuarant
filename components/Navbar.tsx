"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

type NavItem = { href: string; label: string };

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Hide the top "Reserve" button when already on /reservations
  const hideTopReserve = pathname === "/reservations";

  // Close on route change (prevents overlay staying open after navigation)
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  // Close on ESC
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const toggle = () => setIsOpen((v) => !v);
  const close = () => setIsOpen(false);

  const reserveButtonClasses =
    "inline-flex items-center rounded-full border border-neutral-900/25 px-5 py-2 " +
    "text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] text-neutral-900 " +
    "hover:border-neutral-900/45 hover:bg-neutral-900/5 transition";

  return (
    <nav className="bg-[#f8f6f2] border-b border-black/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="menu-toggle"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={toggle}
            >
              <span className="menu-toggle-icon" />
            </button>

            <Link
              href="/"
              className="text-2xl font-bold tracking-[0.2em] text-neutral-900"
            >
              Bella Francese
            </Link>
          </div>

          {!hideTopReserve && (
            <Link href="/reservations" className={reserveButtonClasses}>
              Reserve
            </Link>
          )}
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            className="menu-toggle menu-toggle-modern justify-self-start"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={toggle}
          >
            <span className="menu-toggle-icon" />
          </button>

          <Link
            href="/"
            className="text-lg font-bold tracking-[0.2em] text-neutral-900 whitespace-nowrap"
          >
            Bella Francese
          </Link>

          <span className="ml-auto" />
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div className="menu-overlay" onClick={close} role="dialog" aria-modal="true">
          <div className="menu-panel" onClick={(e) => e.stopPropagation()}>
            <div className="menu-overlay-inner">
              <div className="menu-overlay-header">
                <button
                  type="button"
                  className="menu-close"
                  aria-label="Close menu"
                  onClick={close}
                >
                  <span className="menu-close-icon">X</span>
                </button>

                <p className="menu-overlay-title">Bella Francese</p>
              </div>

              <div>
                <p className="menu-section-label">Main</p>
                <div className="menu-links">
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="menu-link"
                      onClick={close}
                    >
                      {item.label}
                    </Link>
                  ))}

                  {/* ✅ Prevent duplicate Reserve on desktop:
                      show Reserve inside hamburger ONLY on mobile */}
                  {!hideTopReserve && (
                    <Link
                      href="/reservations"
                      className="menu-link md:hidden"
                      onClick={close}
                    >
                      Reserve
                    </Link>
                  )}
                </div>
              </div>

              {/* Optional mobile-only CTA button at bottom (remove if you don't want) */}
              {!hideTopReserve && (
                <div className="md:hidden mt-8">
                  <Link
                    href="/reservations"
                    className="btn-primary w-full text-center"
                    onClick={close}
                  >
                    Reserve a Table
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
