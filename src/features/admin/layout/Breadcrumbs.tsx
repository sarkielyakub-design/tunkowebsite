"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

const labels: Record<string, string> = {
  admin: "Dashboard",
  dashboard: "Dashboard",
  users: "Users",
  wallets: "Wallets",
  transactions: "Transactions",
  transfers: "Transfers",
  deposits: "Deposits",
  withdrawals: "Withdrawals",
  kyc: "KYC",
  countries: "Countries",
  networks: "Networks",
  offices: "Offices",
  "exchange-rates": "Exchange Rates",
  settings: "Settings",
  admins: "Administrators",
};

export default function Breadcrumbs() {
  const pathname = usePathname();

  const segments = pathname
    .split("/")
    .filter(Boolean);

  let href = "";

  return (
    <nav className="flex items-center text-sm text-gray-500">
      {segments.map((segment, index) => {
        href += `/${segment}`;

        const label =
          labels[segment] ??
          segment.replace(/-/g, " ");

        const isLast =
          index === segments.length - 1;

        return (
          <div
            key={href}
            className="flex items-center"
          >
            {index > 0 && (
              <ChevronRight
                size={16}
                className="mx-2"
              />
            )}

            {isLast ? (
              <span className="font-medium text-gray-900 capitalize">
                {label}
              </span>
            ) : (
              <Link
                href={href}
                className="hover:text-blue-600 capitalize"
              >
                {label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}