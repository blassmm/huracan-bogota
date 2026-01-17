"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navigation } from "@/data/navigation";
import { clubInfo } from "@/data/club";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-huracan-black/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          {/* <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-huracan-red rounded-full flex items-center justify-center font-bold text-xl transition-transform group-hover:scale-110">
              H
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg">{clubInfo.name}</span>
            </div>
          </Link> */}

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contacto" className="btn-primary text-sm">
              Inscribite
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Menú"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-huracan-black/98 backdrop-blur-md border-t border-white/10">
            <div className="container-custom py-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-white/80 hover:text-white hover:pl-4 transition-all border-b border-white/5"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contacto"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary w-full mt-4"
              >
                Inscribite
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

