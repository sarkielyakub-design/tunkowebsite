"use client";

import { WalletSummary } from "../types";

interface Props {
  summary: WalletSummary;
}

export default function WalletStats({
  summary,
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <div className="rounded-2xl border bg-white p-6">

        <p className="text-sm text-slate-500">
          Total Wallets
        </p>

        <h2 className="mt-3 text-3xl font-bold">
          {summary.total_wallets}
        </h2>

      </div>

      <div className="rounded-2xl border bg-white p-6">

        <p className="text-sm text-slate-500">
          Active Wallets
        </p>

        <h2 className="mt-3 text-3xl font-bold text-green-600">
          {summary.active_wallets}
        </h2>

      </div>

      <div className="rounded-2xl border bg-white p-6">

        <p className="text-sm text-slate-500">
          Frozen Wallets
        </p>

        <h2 className="mt-3 text-3xl font-bold text-red-600">
          {summary.frozen_wallets}
        </h2>

      </div>

      <div className="rounded-2xl border bg-white p-6">

        <p className="text-sm text-slate-500">
          Total Balance
        </p>

        <h2 className="mt-3 text-3xl font-bold">
          ₦{Number(summary.total_balance).toLocaleString()}
        </h2>

      </div>

    </div>
  );
}