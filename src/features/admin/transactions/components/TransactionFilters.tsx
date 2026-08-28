"use client";

import { Search, RotateCcw } from "lucide-react";
import type { TransactionFilters } from "../types/transaction";

interface Props {
  filters: TransactionFilters;
  onChange: (filters: TransactionFilters) => void;
}

export default function TransactionFilters({
  filters,
  onChange,
}: Props) {
  const update = (
    key: keyof TransactionFilters,
    value: string | number | undefined
  ) => {
    onChange({
      ...filters,
      page: 1,
      [key]: value === "" ? undefined : value,
    });
  };

  const resetFilters = () => {
    onChange({
      page: 1,
      per_page: 20,
      sort: "created_at",
      direction: "desc",
    });
  };

  return (
    <div className="rounded-xl border bg-background p-4 shadow-sm space-y-4">

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">

        {/* Search */}
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-3 text-muted-foreground"
          />

          <input
            type="text"
            placeholder="Search..."
            value={filters.search ?? ""}
            onChange={(e) =>
              update("search", e.target.value)
            }
            className="w-full rounded-lg border pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Status */}
        <select
          value={filters.status ?? ""}
          onChange={(e) =>
            update("status", e.target.value)
          }
          className="rounded-lg border p-2"
        >
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="processing">Processing</option>
          <option value="success">Success</option>
          <option value="failed">Failed</option>
          <option value="refunded">Refunded</option>
          <option value="cancelled">Cancelled</option>
        </select>

        {/* Type */}
        <select
          value={filters.type ?? ""}
          onChange={(e) =>
            update("type", e.target.value)
          }
          className="rounded-lg border p-2"
        >
          <option value="">All Types</option>
          <option value="deposit">Deposit</option>
          <option value="withdrawal">Withdrawal</option>
          <option value="transfer">Transfer</option>
          <option value="airtime">Airtime</option>
          <option value="data">Data</option>
          <option value="bill">Bill Payment</option>
          <option value="refund">Refund</option>
        </select>

        {/* Gateway */}
        <input
          type="text"
          placeholder="Gateway"
          value={filters.payment_gateway ?? ""}
          onChange={(e) =>
            update("payment_gateway", e.target.value)
          }
          className="rounded-lg border p-2"
        />

        {/* Currency */}
        <input
          type="text"
          placeholder="Currency"
          value={filters.currency ?? ""}
          onChange={(e) =>
            update("currency", e.target.value)
          }
          className="rounded-lg border p-2"
        />

        {/* From */}
        <input
          type="date"
          value={filters.from_date ?? ""}
          onChange={(e) =>
            update("from_date", e.target.value)
          }
          className="rounded-lg border p-2"
        />

        {/* To */}
        <input
          type="date"
          value={filters.to_date ?? ""}
          onChange={(e) =>
            update("to_date", e.target.value)
          }
          className="rounded-lg border p-2"
        />

        {/* Sort */}
        <select
          value={filters.sort ?? "created_at"}
          onChange={(e) =>
            update("sort", e.target.value)
          }
          className="rounded-lg border p-2"
        >
          <option value="created_at">Newest</option>
          <option value="amount">Amount</option>
          <option value="status">Status</option>
          <option value="type">Type</option>
          <option value="reference">Reference</option>
        </select>

      </div>

      <div className="flex justify-end">
        <button
          onClick={resetFilters}
          className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 hover:bg-muted transition"
        >
          <RotateCcw size={16} />
          Reset Filters
        </button>
      </div>

    </div>
  );
}