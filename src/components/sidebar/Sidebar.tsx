"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Users,
  Wallet,
  ArrowRightLeft,
  CreditCard,
  Landmark,
  Receipt,
  ShieldCheck,
  Globe,
  Wifi,
  Building2,
  BadgeDollarSign,
  FileText,
  Settings,
  UserCog,
} from "lucide-react";

import SidebarFooter from "./SidebarFooter";

const menus = [
  {
    href: "/admin/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/admin/users",
    label: "Users",
    icon: Users,
  },
  {
    href: "/admin/wallets",
    label: "Wallets",
    icon: Wallet,
  },
  {
    href: "/admin/transactions",
    label: "Transactions",
    icon: CreditCard,
  },
  {
    href: "/admin/transfers",
    label: "Transfers",
    icon: ArrowRightLeft,
  },
  {
    href: "/admin/deposits",
    label: "Deposits",
    icon: Landmark,
  },
  {
    href: "/admin/withdrawals",
    label: "Withdrawals",
    icon: Receipt,
  },
  {
    href: "/admin/kyc",
    label: "KYC",
    icon: ShieldCheck,
  },
  {
    href: "/admin/countries",
    label: "Countries",
    icon: Globe,
  },
  {
    href: "/admin/networks",
    label: "Networks",
    icon: Wifi,
  },
  {
    href: "/admin/offices",
    label: "Offices",
    icon: Building2,
  },
  {
    href: "/admin/exchange-rates",
    label: "Exchange Rates",
    icon: BadgeDollarSign,
  },
  {
    href: "/admin/reports",
    label: "Reports",
    icon: FileText,
  },
  {
    href: "/admin/admins",
    label: "Admins",
    icon: UserCog,
  },
  {
    href: "/admin/settings",
    label: "Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex h-screen w-72 flex-col bg-slate-900">

      {/* Logo */}
      <div className="flex h-20 items-center gap-3 border-b border-slate-800 px-6">

        <Image
          src="/logo.png"
          alt="Tunko"
          width={42}
          height={42}
          priority
        />

        <div>
          <h1 className="text-lg font-bold text-white">
            Tunko Admin
          </h1>

          <p className="text-sm text-slate-400">
            Administration Panel
          </p>
        </div>

      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-4 py-6">

        <div className="space-y-2">

          {menus.map((menu) => {

            const Icon = menu.icon;

            const active =
              pathname === menu.href ||
              pathname.startsWith(menu.href + "/");

            return (
              <Link
                key={menu.href}
                href={menu.href}
                className={`flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-200 ${
                  active
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <Icon className="h-5 w-5" />

                <span className="font-medium">
                  {menu.label}
                </span>
              </Link>
            );

          })}

        </div>

      </nav>

     {/* Footer removed temporarily */}

    </aside>
  );
}