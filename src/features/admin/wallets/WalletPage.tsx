"use client";

import { useState } from "react";

import WalletStats from "./components/WalletStats";
import WalletFilters from "./components/WalletFilters";
import WalletTable from "./components/WalletTable";

import {
  useWallets,
  useWalletSummary,
} from "./hooks/useWallets";

export default function WalletPage() {
  const [search, setSearch] = useState<string | undefined>();
  const [status, setStatus] = useState<string | undefined>();
  const [currency, setCurrency] = useState<string | undefined>();
  const [country, setCountry] = useState<string | undefined>();

  const [page, setPage] = useState(1);

  const walletQuery = useWallets({
    page,
    search,
    status,
    currency,
    country,
  });

  const summaryQuery = useWalletSummary();

  function clearFilters() {
    setSearch(undefined);
    setStatus(undefined);
    setCurrency(undefined);
    setCountry(undefined);
    setPage(1);
  }

  function refresh() {
    walletQuery.refetch();
    summaryQuery.refetch();
  }

  function exportWallets() {
    window.open(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/wallets/export`,
      "_blank"
    );
  }

  if (walletQuery.error) {
    return (
      <div className="rounded-2xl border bg-red-50 p-8 text-red-700">
        Failed to load wallets.
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Wallet Management
        </h1>

        <p className="mt-2 text-slate-500">
          Manage customer wallets, balances and transactions.
        </p>
      </div>

      {/* Statistics */}
      {summaryQuery.data?.data && (
        <WalletStats summary={summaryQuery.data.data} />
      )}

      {/* Filters */}
      <WalletFilters
        search={search}
        status={status}
        currency={currency}
        country={country}
        onSearchChange={setSearch}
        onStatusChange={setStatus}
        onCurrencyChange={setCurrency}
        onCountryChange={setCountry}
        onRefresh={refresh}
        onExport={exportWallets}
        onClear={clearFilters}
      />

      {/* Wallet Table */}
      <WalletTable
        wallets={walletQuery.data?.data ?? []}
        loading={walletQuery.isLoading}
      />

      {/* Pagination */}
      {walletQuery.data?.meta && (
        <div className="flex items-center justify-between rounded-2xl border bg-white p-5">

          <p className="text-sm text-slate-500">
            Showing page{" "}
            <strong>{walletQuery.data.meta.current_page}</strong>
            {" "}of{" "}
            <strong>{walletQuery.data.meta.last_page}</strong>
          </p>

          <div className="flex gap-3">

            <button
              disabled={walletQuery.data.meta.current_page <= 1}
              onClick={() => setPage((p) => p - 1)}
              className="rounded-xl border px-5 py-2 disabled:opacity-40"
            >
              Previous
            </button>

            <button
              disabled={
                walletQuery.data.meta.current_page >=
                walletQuery.data.meta.last_page
              }
              onClick={() => setPage((p) => p + 1)}
              className="rounded-xl border px-5 py-2 disabled:opacity-40"
            >
              Next
            </button>

          </div>

        </div>
      )}

    </div>
  );
}