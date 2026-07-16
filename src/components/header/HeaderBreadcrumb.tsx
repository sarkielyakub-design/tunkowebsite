"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

const TITLES: Record<string, string> = {
  admin: "Admin",
  dashboard: "Dashboard",
  users: "Users",
  wallets: "Wallets",
  transactions: "Transactions",
  transfers: "Transfers",
  deposits: "Deposits",
  withdrawals: "Withdrawals",
  kyc: "KYC",
  "exchange-rates": "Exchange Rates",
  countries: "Countries",
  offices: "Offices",
  networks: "Networks",
  "data-bundles": "Data Bundles",
  "audit-logs": "Audit Logs",
  roles: "Roles & Permissions",
  reports: "Reports",
  settings: "Settings",
  profile: "Profile",
};

export default function HeaderBreadcrumb() {
  const pathname = usePathname();

  const segments = pathname
    .split("/")
    .filter(Boolean);

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-2"
    >
      <Link
        href="/admin/dashboard"
        className="rounded-lg p-2 transition hover:bg-slate-100"
      >
        <Home className="h-5 w-5 text-slate-600" />
      </Link>

      {segments.map((segment, index) => {
        const href =
          "/" + segments.slice(0, index + 1).join("/");

        return (
          <div
            key={href}
            className="flex items-center gap-2"
          >
            <ChevronRight className="h-4 w-4 text-slate-400" />

            <Link
              href={href}
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              {TITLES[segment] ??
                segment
                  .replace(/-/g, " ")
                  .replace(/\b\w/g, (c) =>
                    c.toUpperCase()
                  )}
            </Link>
          </div>
        );
      })}
    </nav>
  );
}