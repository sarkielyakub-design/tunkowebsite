"use client";

import DashboardHeader from "./DashboardHeader";
import WalletCard from "./WalletCard";
import QuickActions from "./QuickActions";
import StatsCards from "./StatsCards";
import RecentTransactions from "./RecentTransactions";
import ExchangeRateCard from "./ExchangeRateCard";
import BottomNavigation from "./BottomNavigation";

import { useDashboard } from "../hooks/useDashboard";

export default function DashboardPage() {
  const { dashboard, loading } = useDashboard();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>

          <p className="mt-4 text-lg font-medium text-slate-600">
            Loading Dashboard...
          </p>
        </div>
      </div>
    );
  }

  if (!dashboard) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100">
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <h2 className="text-xl font-bold text-red-600">
            Unable to load dashboard
          </h2>

          <p className="mt-2 text-slate-500">
            Please refresh the page or try again later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <main className="min-h-screen bg-slate-100 pb-24">

        <DashboardHeader
          user={dashboard.user}
        />

        <div className="mx-auto max-w-7xl space-y-8 p-6">

          <WalletCard
            wallet={dashboard.wallet}
          />

          <QuickActions />

          <StatsCards
            stats={dashboard.stats}
          />

          <div className="grid gap-6 xl:grid-cols-2">

            <RecentTransactions
              transactions={
                dashboard.recent_transactions ?? []
              }
            />

           <ExchangeRateCard
  rates={dashboard.exchange_rates}
/>

          </div>

        </div>

      </main>

      <BottomNavigation />
    </>
  );
}