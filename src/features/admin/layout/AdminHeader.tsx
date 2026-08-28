"use client";

import { Menu, Moon } from "lucide-react";
import { usePathname } from "next/navigation";

import Breadcrumbs from "./Breadcrumbs";
import SearchBar from "./SearchBar";
import NotificationMenu from "./NotificationMenu";
import UserMenu from "./UserMenu";
import AdminLanguageSwitcher from "./AdminLanguageSwitcher";
import { useI18n } from "@/src/i18n/I18nProvider";

interface AdminHeaderProps {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
}

const pageTitles: Record<string, string> = {
  dashboard: "Dashboard",
  users: "Users",
  wallets: "Wallets",
  transactions: "Transactions",
  transfers: "Transfers",
  deposits: "Deposits",
  withdrawals: "Withdrawals",
  kyc: "KYC Verification",
  countries: "Countries",
  networks: "Networks",
  offices: "Offices",
  admins: "Administrators",
  settings: "Settings",
  "exchange-rates": "Exchange Rates",
};

export default function AdminHeader({
  onToggleSidebar,
}: AdminHeaderProps) {
  const pathname = usePathname();
  const { t } = useI18n();

  const segments = pathname.split("/").filter(Boolean);

  const currentPage =
    pageTitles[segments[segments.length - 1]] ?? "Dashboard";

  return (
    <header className="sticky top-0 z-30 border-b bg-white shadow-sm">
      <div className="flex h-16 items-center justify-between px-6">

        {/* Left */}
        <div className="flex items-center gap-4">

          <button
            onClick={onToggleSidebar}
            className="rounded-lg p-2 transition hover:bg-gray-100"
          >
            <Menu size={22} />
          </button>

          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {t(currentPage)}
            </h1>

            <div className="mt-1">
              <Breadcrumbs />
            </div>
          </div>

        </div>

        {/* Right */}
        <div className="flex items-center gap-3">

          <div className="hidden xl:block">
            <SearchBar />
          </div>

          <AdminLanguageSwitcher />

          <button
            className="rounded-lg p-2 transition hover:bg-gray-100"
            title="Theme"
          >
            <Moon size={20} />
          </button>

          <NotificationMenu />

          <UserMenu />

        </div>
      </div>
    </header>
  );
}