"use client";

import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Users,
  Wallet,
  ArrowRightLeft,
  Smartphone,
  Wifi,
  Receipt,
  ShieldCheck,
  Globe,
  Radio,
  BarChart3,
  Settings,
  LogOut,
  ArrowDownCircle,
  ArrowUpCircle,
  BadgeDollarSign,
  Building2,
  ClipboardList,
  Shield,
} from "lucide-react";

import SidebarItem from "./SidebarItem";

const menus = [
  {
    label: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    label: "Wallets",
    href: "/admin/wallets",
    icon: Wallet,
  },
  {
    label: "Transactions",
    href: "/admin/transactions",
    icon: Receipt,
  },
  {
    label: "Transfers",
    href: "/admin/transfers",
    icon: ArrowRightLeft,
  },
  {
    label: "Deposits",
    href: "/admin/deposits",
    icon: ArrowDownCircle,
  },
  {
    label: "Withdrawals",
    href: "/admin/withdrawals",
    icon: ArrowUpCircle,
  },
  {
    label: "Airtime",
    href: "/admin/airtime",
    icon: Smartphone,
  },
  {
    label: "Data Bundles",
    href: "/admin/data-bundles",
    icon: Wifi,
  },
  {
    label: "KYC",
    href: "/admin/kyc",
    icon: ShieldCheck,
  },
  {
    label: "Exchange Rates",
    href: "/admin/exchange-rates",
    icon: BadgeDollarSign,
  },
  {
    label: "Countries",
    href: "/admin/countries",
    icon: Globe,
  },
  {
    label: "Offices",
    href: "/admin/offices",
    icon: Building2,
  },
  {
    label: "Networks",
    href: "/admin/networks",
    icon: Radio,
  },
  {
    label: "Audit Logs",
    href: "/admin/audit-logs",
    icon: ClipboardList,
  },
  {
    label: "Roles & Permissions",
    href: "/admin/roles",
    icon: Shield,
  },
  {
    label: "Reports",
    href: "/admin/reports",
    icon: BarChart3,
  },
  {
    label: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-800 bg-slate-900 text-white">

      {/* Logo */}
      <div className="border-b border-slate-800 px-8 py-7">
        <h1 className="text-3xl font-extrabold tracking-tight text-white">
          Tunko
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Admin Dashboard
        </p>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-5 py-6">
        <nav className="space-y-2">
          {menus.map((menu) => (
            <SidebarItem
              key={menu.href}
              href={menu.href}
              label={menu.label}
              icon={menu.icon}
              active={
                pathname === menu.href ||
                pathname.startsWith(`${menu.href}/`)
              }
            />
          ))}
        </nav>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 p-5">

        <div className="mb-4 rounded-xl bg-slate-800 p-4">
          <p className="text-sm font-semibold text-white">
            Administrator
          </p>

          <p className="truncate text-xs text-slate-400">
            admin@tunko.com
          </p>
        </div>

        <button className="flex w-full items-center gap-4 rounded-xl px-4 py-3 text-slate-300 transition-all duration-200 hover:bg-red-600 hover:text-white">

          <LogOut className="h-5 w-5" />

          <span className="font-medium">
            Logout
          </span>

        </button>

      </div>

    </aside>
  );
}