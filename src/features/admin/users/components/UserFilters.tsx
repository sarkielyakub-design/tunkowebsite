"use client";

import {
  Search,
  Filter,
} from "lucide-react";

interface Props {
  search: string;
  onSearch: (value: string) => void;
}

export default function UserFilters({
  search,
  onSearch,
}: Props) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">

      <div className="grid gap-4 lg:grid-cols-4">

        <div className="relative lg:col-span-2">

          <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />

          <input
            value={search}
            onChange={(e) =>
              onSearch(e.target.value)
            }
            placeholder="Search by name, email or phone..."
            className="w-full rounded-xl border py-3 pl-12 pr-4 outline-none focus:border-blue-500"
          />

        </div>

        <select className="rounded-xl border px-4">

          <option>
            All Status
          </option>

          <option>
            Active
          </option>

          <option>
            Frozen
          </option>

        </select>

        <button className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white">

          <Filter className="h-5 w-5" />

          Filters

        </button>

      </div>

    </div>
  );
}