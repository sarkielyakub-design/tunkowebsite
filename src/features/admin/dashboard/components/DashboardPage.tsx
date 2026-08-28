"use client";

import Link from "next/link";
import {
  Users,
  Wallet,
  ArrowRightLeft,
  CreditCard,
  Smartphone,
  Wifi,
  ShieldCheck,
  RefreshCcw,
  CalendarDays,
} from "lucide-react";

import { useDashboard } from "@/src/features/admin/dashboard/hooks/useDashboard";
import { useI18n } from "@/src/i18n/I18nProvider";
import WeeklyTransactionsChart from "./WeeklyTransactionsChart";

export default function DashboardPage() {
  const { data, isLoading, refetch } = useDashboard();
  const { t, locale } = useI18n();

  const stats = data?.data.statistics;
  const recentTransactions = data?.data.recent_transactions ?? [];
  const recentUsers = data?.data.recent_users ?? [];

  const cards = [
    { title: "Users", value: stats?.users.total ?? 0, icon: Users, color: "bg-blue-500" },
    { title: "Wallet Balance", value: Number(stats?.wallet.total_balance ?? 0).toLocaleString(locale), icon: Wallet, color: "bg-green-500" },
    { title: "Transactions", value: stats?.transactions.total ?? 0, icon: CreditCard, color: "bg-purple-500" },
    { title: "Transfers", value: stats?.transfers.total ?? 0, icon: ArrowRightLeft, color: "bg-orange-500" },
    { title: "Airtime", value: stats?.airtime.total ?? 0, icon: Smartphone, color: "bg-pink-500" },
    { title: "Data", value: stats?.data.total ?? 0, icon: Wifi, color: "bg-cyan-500" },
    { title: "Pending KYC", value: stats?.kyc.pending ?? 0, icon: ShieldCheck, color: "bg-red-500" },
  ];

  const statusClass = (status: string) => {
    if (status === "completed") return "bg-green-100 text-green-700";
    if (status === "pending") return "bg-yellow-100 text-yellow-700";
    return "bg-red-100 text-red-700";
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">{t("Dashboard")}</h1>
          <p className="mt-2 text-slate-500">{t("Welcome back. Here's what's happening in Tunko today.")}</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => refetch()}
            disabled={isLoading}
            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm hover:bg-slate-50 disabled:opacity-60"
          >
            <RefreshCcw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
            {t("Refresh")}
          </button>
          <div className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-white">
            <CalendarDays className="h-4 w-4" />
            {t("Today")}
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <div key={card.title} className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">{t(card.title)}</p>
                <h2 className="mt-3 text-3xl font-bold">{isLoading ? "..." : card.value}</h2>
              </div>
              <div className={`${card.color} rounded-2xl p-4 text-white`}>
                <card.icon className="h-7 w-7" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-white shadow-sm">
        <div className="flex items-center justify-between border-b px-6 py-5">
          <div>
            <h2 className="text-xl font-semibold">{t("Recent Transactions")}</h2>
            <p className="text-sm text-slate-500">{t("Latest transactions across the platform.")}</p>
          </div>
          <Link href="/admin/transactions" className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-slate-50">
            {t("View All")}
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-slate-50">
              <tr>
                {["ID", "Type", "Amount", "Status", "Date"].map((heading) => (
                  <th key={heading} className="px-6 py-4 text-left text-sm font-semibold">{heading === "Status" ? t("Status") : heading === "Date" ? t("Date") : heading === "Amount" ? t("Amount") : heading === "Type" ? t("Type") : heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {recentTransactions.length === 0 ? (
                <tr><td colSpan={5} className="px-6 py-10 text-center text-slate-500">{t("No data available.")}</td></tr>
              ) : recentTransactions.map((transaction: any) => (
                <tr key={transaction.id ?? transaction.reference} className="border-t hover:bg-slate-50">
                  <td className="px-6 py-4">#{transaction.id ?? "—"}</td>
                  <td className="px-6 py-4 capitalize">{transaction.type ?? "—"}</td>
                  <td className="px-6 py-4 font-semibold">{Number(transaction.amount ?? 0).toLocaleString(locale)}</td>
                  <td className="px-6 py-4">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClass(transaction.status)}`}>
                      {t(transaction.status ? transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1) : "Pending")}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500">
                    {transaction.created_at ? new Intl.DateTimeFormat(locale, { dateStyle: "medium" }).format(new Date(transaction.created_at)) : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-2xl bg-white shadow-sm">
        <div className="flex items-center justify-between border-b px-6 py-5">
          <div>
            <h2 className="text-xl font-semibold">{t("Recent Users")}</h2>
            <p className="text-sm text-slate-500">{t("Latest registered users.")}</p>
          </div>
          <Link href="/admin/users" className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-slate-50">
            {t("View All")}
          </Link>
        </div>
        <div className="divide-y">
          {recentUsers.length === 0 ? (
            <div className="px-6 py-10 text-center text-slate-500">{t("No data available.")}</div>
          ) : recentUsers.map((user: any) => (
            <div key={user.id} className="flex items-center justify-between px-6 py-4 hover:bg-slate-50">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">
                  {(user.first_name?.charAt(0) ?? "")}{(user.last_name?.charAt(0) ?? "")}
                </div>
                <div>
                  <h3 className="font-semibold">{user.first_name} {user.last_name}</h3>
                  <p className="text-sm text-slate-500">{user.email}</p>
                </div>
              </div>
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${user.is_active ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                {user.is_active ? t("Active") : t("Inactive")}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <WeeklyTransactionsChart transactions={recentTransactions} />
        </div>

        <div className="rounded-2xl bg-white shadow-sm">
          <div className="flex items-center justify-between border-b px-6 py-5">
            <div>
              <h2 className="text-xl font-semibold">{t("Pending KYC")}</h2>
              <p className="text-sm text-slate-500">{t("Users waiting for verification")}</p>
            </div>
            <Link href="/admin/kyc" className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-slate-50">
              {t("View All")}
            </Link>
          </div>
          <div className="px-6 py-8 text-center">
            <ShieldCheck className="mx-auto h-10 w-10 text-red-500" />
            <p className="mt-3 text-3xl font-bold text-red-600">{stats?.kyc.pending ?? 0}</p>
            <p className="mt-2 text-sm text-slate-500">{t("Users waiting for verification")}</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <Link href="/admin/users" className="rounded-2xl bg-blue-600 p-6 text-left text-white transition hover:bg-blue-700">
          <h3 className="text-lg font-semibold">{t("Users")}</h3>
          <p className="mt-2 text-sm text-blue-100">{t("Manage registered users")}</p>
        </Link>
        <Link href="/admin/wallets" className="rounded-2xl bg-green-600 p-6 text-left text-white transition hover:bg-green-700">
          <h3 className="text-lg font-semibold">{t("Wallets")}</h3>
          <p className="mt-2 text-sm text-green-100">{t("View wallet balances")}</p>
        </Link>
        <Link href="/admin/transfers" className="rounded-2xl bg-orange-600 p-6 text-left text-white transition hover:bg-orange-700">
          <h3 className="text-lg font-semibold">{t("Transfers")}</h3>
          <p className="mt-2 text-sm text-orange-100">{t("Review money transfers")}</p>
        </Link>
        <Link href="/admin/reports" className="rounded-2xl bg-purple-600 p-6 text-left text-white transition hover:bg-purple-700">
          <h3 className="text-lg font-semibold">{t("Reports")}</h3>
          <p className="mt-2 text-sm text-purple-100">{t("View analytics & reports")}</p>
        </Link>
      </div>

      <div className="rounded-2xl border-l-4 border-red-500 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold">{t("Pending KYC")}</h2>
        <p className="mt-2 text-slate-500">
          {t("Users waiting for verification")}: <span className="font-bold text-red-600">{stats?.kyc.pending ?? 0}</span>
        </p>
      </div>
    </div>
  );
}
