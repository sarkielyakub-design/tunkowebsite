"use client";

import StatsGrid from "./components/StatsGrid";
import QuickActions from "./components/QuickActions";
import RevenueChart from "./components/RevenueChart";
import RecentTransactions from "./components/RecentTransactions";
import RecentUsers from "./components/RecentUsers";
import SystemStatus from "./components/SystemStatus";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-500">
          Welcome back, Super Admin.
        </p>

      </div>

      <StatsGrid />

      <div className="grid gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <RevenueChart />
        </div>

        <QuickActions />

      </div>

      <div className="grid gap-6 xl:grid-cols-2">

        <RecentTransactions />

        <RecentUsers />

      </div>

      <SystemStatus />

    </div>
  );
}