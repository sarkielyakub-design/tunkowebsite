"use client";

import { Search, RotateCcw } from "lucide-react";
import { WithdrawalFilters } from "../api/types";

interface WithdrawFiltersProps {
  filters: WithdrawalFilters;
  onChange: (filters: WithdrawalFilters) => void;
}

export default function WithdrawFilters({
  filters,
  onChange,
}: WithdrawFiltersProps) {
  const handleChange = (
    key: string,
    value: string
  ) => {
    onChange({
      ...filters,
      [key]: value,
    });
  };

  const resetFilters = () => {
    onChange({
      search: "",
      status: "",
      provider: "",
      currency: "",
      user_id: undefined,
    });
  };

  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">

        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            value={filters.search ?? ""}
            onChange={(e) =>
              handleChange("search", e.target.value)
            }
            className="w-full rounded-lg border py-2 pl-10 pr-3"
          />
        </div>

        <select
          value={filters.status ?? ""}
          onChange={(e) =>
            handleChange("status", e.target.value)
          }
          className="rounded-lg border px-3 py-2"
        >
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="processing">Processing</option>
          <option value="completed">Completed</option>
          <option value="failed">Failed</option>
          <option value="rejected">Rejected</option>
          <option value="cancelled">Cancelled</option>
        </select>

        <input
          type="text"
          placeholder="Provider"
          value={filters.provider ?? ""}
          onChange={(e) =>
            handleChange("provider", e.target.value)
          }
          className="rounded-lg border px-3 py-2"
        />

        <input
          type="text"
          placeholder="Currency"
          value={filters.currency ?? ""}
          onChange={(e) =>
            handleChange("currency", e.target.value)
          }
          className="rounded-lg border px-3 py-2"
        />

        <input
          type="text"
          placeholder="User ID"
          value={filters.user_id ?? ""}
          onChange={(e) =>
            handleChange("user_id", e.target.value)
          }
          className="rounded-lg border px-3 py-2"
        />

        <button
          type="button"
          onClick={resetFilters}
          className="flex items-center justify-center gap-2 rounded-lg border px-4 py-2 hover:bg-gray-50"
        >
          <RotateCcw className="h-4 w-4" />
          Reset
        </button>

      </div>
    </div>
  );
}