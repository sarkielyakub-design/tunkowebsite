"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Countries",
    href: "/countries",
  },
  {
    label: "Exchange Rates",
    href: "/exchange-rates",
  },
  {
    label: "Download",
    href: "/download",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function DesktopMenu() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-8">
      {menus.map((menu) => {
        const active =
          pathname === menu.href ||
          pathname.startsWith(menu.href + "/");

        return (
          <Link
            key={menu.href}
            href={menu.href}
            className={`relative text-sm font-semibold transition-all duration-300 ${
              active
                ? "text-emerald-600"
                : "text-slate-700 hover:text-emerald-600"
            }`}
          >
            {menu.label}

            {active && (
              <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-emerald-600" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}