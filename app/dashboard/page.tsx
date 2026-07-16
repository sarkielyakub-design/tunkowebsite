"use client";

import { useDashboard } from "@/src/hooks/useDashboard";

export default function DashboardPage() {
  const { data, isLoading } = useDashboard();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {/* Wallet Card */}
      {/* Quick Actions */}
      {/* Exchange Rates */}
      {/* Recent Transactions */}
      {/* Recent Transfers */}
    </>
  );
}