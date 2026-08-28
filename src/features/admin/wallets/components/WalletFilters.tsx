"use client";

import { Search, RefreshCw, Download, X } from "lucide-react";

interface Props {
  search?: string;
  status?: string;
  currency?: string;
  country?: string;

  onSearchChange: (value?: string) => void;
  onStatusChange: (value?: string) => void;
  onCurrencyChange: (value?: string) => void;
  onCountryChange: (value?: string) => void;

  onRefresh: () => void;
  onExport: () => void;
  onClear: () => void;
}

export default function WalletFilters({
  search,
  status,
  currency,
  country,
  onSearchChange,
  onStatusChange,
  onCurrencyChange,
  onCountryChange,
  onRefresh,
  onExport,
  onClear,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6">

      <div className="grid gap-4 lg:grid-cols-12">

        {/* Search */}
        <div className="relative lg:col-span-4">

          <Search
            size={18}
            className="absolute left-4 top-4 text-slate-400"
          />

          <input
            value={search ?? ""}
            onChange={(e) =>
              onSearchChange(
                e.target.value || undefined
              )
            }
            placeholder="Wallet, customer or email..."
            className="w-full rounded-xl border py-3 pl-11 pr-4 outline-none focus:border-blue-500"
          />

        </div>

        {/* Status */}

        <select
          value={status ?? ""}
          onChange={(e) =>
            onStatusChange(
              e.target.value || undefined
            )
          }
          className="rounded-xl border px-4 py-3 lg:col-span-2"
        >
          <option value="">All Status</option>

          <option value="active">
            Active
          </option>

          <option value="inactive">
            Inactive
          </option>

          <option value="frozen">
            Frozen
          </option>

        </select>

        {/* Currency */}

        <select
          value={currency ?? ""}
          onChange={(e) =>
            onCurrencyChange(
              e.target.value || undefined
            )
          }
          className="rounded-xl border px-4 py-3 lg:col-span-2"
        >
          <option value="">All Currency</option>

          <option value="NGN">NGN</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="XOF">XOF</option>

        </select>

        {/* Country */}

        <select
          value={country ?? ""}
          onChange={(e) =>
            onCountryChange(
              e.target.value || undefined
            )
          }
          className="rounded-xl border px-4 py-3 lg:col-span-2"
        >
          <option value="">All Countries</option>

          <option value="Nigeria">Nigeria</option>
          <option value="Niger">Niger</option>
          <option value="Ghana">Ghana</option>

        </select>

        {/* Clear */}

        <button
          onClick={onClear}
          className="flex items-center justify-center gap-2 rounded-xl border px-4 py-3 hover:bg-slate-100"
        >
          <X size={18} />
          Clear
        </button>

      </div>

      <div className="mt-5 flex flex-wrap justify-end gap-3">

        <button
          onClick={onRefresh}
          className="flex items-center gap-2 rounded-xl border px-5 py-3 hover:bg-slate-100"
        >
          <RefreshCw size={18} />
          Refresh
        </button>

        <button
          onClick={onExport}
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
        >
          <Download size={18} />
          Export
        </button>

      </div>

    </div>
  );
}