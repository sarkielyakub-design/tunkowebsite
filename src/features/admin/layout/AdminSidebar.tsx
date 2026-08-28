"use client";

import SidebarItem from "./SidebarItem";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useI18n } from "@/src/i18n/I18nProvider";

import {
  LayoutDashboard,
  Users,
  Wallet,
  ArrowRightLeft,
  CreditCard,
  Landmark,
  ShieldCheck,
  Building2,
  FileText,
  BarChart3,
  Package,
  LogOut,
  X,
} from "lucide-react";

interface AdminSidebarProps {
  open: boolean;
  onClose: () => void;
}

const menus = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Wallets",
    href: "/admin/wallets",
    icon: Wallet,
  },
  {
    title: "Transactions",
    href: "/admin/transactions",
    icon: CreditCard,
  },
  {
    title: "Transfers",
    href: "/admin/transfers",
    icon: ArrowRightLeft,
  },
  {
    title: "Deposits",
    href: "/admin/deposits",
    icon: Landmark,
  },
  {
    title: "Withdrawals",
    href: "/admin/withdrawals",
    icon: Landmark,
  },
  {
    title: "KYC",
    href: "/admin/kyc",
    icon: ShieldCheck,
  },
  {
    title: "Offices",
    href: "/admin/offices",
    icon: Building2,
  },
  {
    title: "Vouchers",
    href: "/admin/vouchers",
    icon: Package,
  },
  {
    title: "Admin Wallet",
    href: "/admin/admin-wallet",
    icon: Wallet,
  },
  {
    title: "Audit Logs",
    href: "/admin/audit-logs",
    icon: FileText,
  },
  {
    title: "Reports",
    href: "/admin/reports",
    icon: BarChart3,
  },
];

export default function AdminSidebar({
  open,
  onClose,
}: AdminSidebarProps) {
  const pathname = usePathname();
  const { t } = useI18n();

  return (
    <>
      {/* Mobile Overlay */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={clsx(
          "fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white border-r transition-transform duration-300 flex flex-col",
          open
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Logo */}
        <div className="h-16 border-b flex items-center justify-between px-6">
          <div>
            <h1 className="text-xl font-bold text-blue-600">
              {t("Tunko Admin")}
            </h1>

            <p className="text-xs text-gray-500">
              {t("Administration Panel")}
            </p>
          </div>

          <button
            onClick={onClose}
            className="lg:hidden"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          {menus.map((item) => {
            const active =
              pathname === item.href ||
              pathname.startsWith(item.href + "/");

            return (
              <SidebarItem
                key={item.href}
                href={item.href}
                title={t(item.title)}
                icon={item.icon}
                active={active}
              />
            );
          })}
        </nav>

        {/* Footer */}
        <div className="border-t p-4">
          <button
            className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut size={20} />
            {t("Logout")}
          </button>
        </div>
      </aside>
    </>
  );
}