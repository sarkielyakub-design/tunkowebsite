"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const menus = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Countries",
    href: "/countries",
  },
  {
    title: "Exchange Rates",
    href: "/exchange-rates",
  },
  {
    title: "Download",
    href: "/download",
  },
  {
    title: "FAQ",
    href: "/faq",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger */}
      <button
        onClick={() => setOpen(true)}
        className="rounded-xl p-2 lg:hidden"
      >
        <Menu className="h-7 w-7 text-slate-800" />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-80 bg-white shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b p-5">
          <Logo />

          <button
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex flex-col p-6">

          {menus.map((menu) => (
            <Link
              key={menu.href}
              href={menu.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-4 text-base font-semibold text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-600"
            >
              {menu.title}
            </Link>
          ))}

          <div className="my-6 border-t" />

          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="mb-3 rounded-xl border border-slate-300 py-3 text-center font-semibold"
          >
            Login
          </Link>

          <Link
            href="/register"
            onClick={() => setOpen(false)}
            className="mb-3 rounded-xl bg-emerald-600 py-3 text-center font-semibold text-white hover:bg-emerald-700"
          >
            Create Account
          </Link>

          <Link
            href="/download"
            onClick={() => setOpen(false)}
            className="rounded-xl border border-emerald-600 py-3 text-center font-semibold text-emerald-600 hover:bg-emerald-600 hover:text-white"
          >
            Download App
          </Link>
        </div>
      </aside>
    </>
  );
}