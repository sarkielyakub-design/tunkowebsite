"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Exchange", href: "/exchange" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isActive = (href: string) =>
    mounted && pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link
          href="/"
          className="text-3xl font-extrabold tracking-tight text-blue-700"
        >
          Tunko
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium transition ${
                isActive(link.href)
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Side */}

        <div className="hidden items-center gap-4 lg:flex">

          <button
            className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm transition hover:bg-gray-100"
          >
            <Globe size={18} />
            EN
          </button>

          <Link
            href="/login"
            className="rounded-xl border border-blue-600 px-5 py-2 font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700"
          >
            Get Started
          </Link>

        </div>

        {/* Mobile Menu Button */}

        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="border-t bg-white lg:hidden">
          <nav className="flex flex-col px-6 py-6">

            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-4 py-3 font-medium transition ${
                  isActive(link.href)
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="mt-6 space-y-3">

              <Link
                href="/login"
                className="block rounded-lg border border-blue-600 px-4 py-3 text-center font-semibold text-blue-600"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="block rounded-lg bg-blue-600 px-4 py-3 text-center font-semibold text-white"
              >
                Get Started
              </Link>

            </div>

          </nav>
        </div>
      )}

    </header>
  );
}