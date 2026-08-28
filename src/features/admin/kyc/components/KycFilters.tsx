"use client";

import { Search, RotateCcw } from "lucide-react";
import { KycFilters as KycFilterType } from "../types/kyc.types";

interface Props {
  filters: KycFilterType;
  onChange: (filters: KycFilterType) => void;
}

export default function KycFilters({
  filters,
  onChange,
}: Props) {
  const update = (
    key: keyof KycFilterType,
    value: string | number | undefined
  ) => {
    onChange({
      ...filters,
      [key]: value,
      page: 1,
    });
  };

  const resetFilters = () => {
    onChange({
      page: 1,
      per_page: filters.per_page ?? 20,
    });
  };

  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">

        {/* Search */}

        <div className="xl:col-span-2 relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search name, email or phone..."
            value={filters.search ?? ""}
            onChange={(e) =>
              update("search", e.target.value)
            }
            className="w-full rounded-lg border pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Status */}

        <select
          value={filters.status ?? ""}
          onChange={(e) =>
            update(
              "status",
              e.target.value || undefined
            )
          }
          className="rounded-lg border px-3 py-2"
        >
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="under_review">
            Under Review
          </option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
          <option value="expired">Expired</option>
        </select>

        {/* Level */}

        <select
          value={filters.level ?? ""}
          onChange={(e) =>
            update(
              "level",
              e.target.value
                ? Number(e.target.value)
                : undefined
            )
          }
          className="rounded-lg border px-3 py-2"
        >
          <option value="">All Levels</option>
          <option value="1">Level 1</option>
          <option value="2">Level 2</option>
          <option value="3">Level 3</option>
          <option value="4">Level 4</option>
        </select>

        {/* Document Type */}

        <select
          value={filters.document_type ?? ""}
          onChange={(e) =>
            update(
              "document_type",
              e.target.value || undefined
            )
          }
          className="rounded-lg border px-3 py-2"
        >
          <option value="">Document</option>
          <option value="passport">
            Passport
          </option>
          <option value="national_id">
            National ID
          </option>
          <option value="drivers_license">
            Driver's License
          </option>
          <option value="residence_permit">
            Residence Permit
          </option>
          <option value="voter_card">
            Voter Card
          </option>
        </select>

        {/* Country */}

        <input
          type="text"
          placeholder="Country"
          value={filters.country ?? ""}
          onChange={(e) =>
            update(
              "country",
              e.target.value || undefined
            )
          }
          className="rounded-lg border px-3 py-2"
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">

        {/* Per Page */}

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">
            Per Page
          </span>

          <select
            value={filters.per_page ?? 20}
            onChange={(e) =>
              update(
                "per_page",
                Number(e.target.value)
              )
            }
            className="rounded-lg border px-3 py-2"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>

        {/* Reset */}

        <button
          onClick={resetFilters}
          className="flex items-center gap-2 rounded-lg border px-4 py-2 hover:bg-gray-100"
        >
          <RotateCcw size={16} />
          Reset Filters
        </button>

      </div>
    </div>
  );
}