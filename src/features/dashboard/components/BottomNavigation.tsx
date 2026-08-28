"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Home,
  Wallet,
  ArrowUpDown,
  Receipt,
  User,
} from "lucide-react";

const items = [
  {
    title: "Home",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Wallet",
    href: "/wallet",
    icon: Wallet,
  },
  {
    title: "Transfer",
    href: "/transfer",
    icon: ArrowUpDown,
  },
  {
    title: "History",
    href: "/transactions",
    icon: Receipt,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },
];

export default function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white/95 backdrop-blur lg:hidden">
      <div className="grid grid-cols-5">

        {items.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 py-3 transition ${
                active
                  ? "text-blue-600"
                  : "text-slate-500"
              }`}
            >
              <Icon
                className={`h-6 w-6 ${
                  active
                    ? "scale-110"
                    : ""
                }`}
              />

              <span className="text-xs font-medium">
                {item.title}
              </span>
            </Link>
          );
        })}

      </div>
    </nav>
  );
}