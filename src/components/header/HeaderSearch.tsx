"use client";

import { Search } from "lucide-react";

export default function HeaderSearch() {
  return (
    <div className="relative hidden w-full max-w-md lg:block">
      <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

      <input
        type="text"
        placeholder="Search users, transfers, wallets..."
        className="
          h-11
          w-full
          rounded-xl
          border
          border-slate-200
          bg-slate-50
          pl-11
          pr-4
          text-sm
          outline-none
          transition-all
          duration-200
          placeholder:text-slate-400
          focus:border-blue-500
          focus:bg-white
          focus:ring-4
          focus:ring-blue-100
        "
      />
    </div>
  );
}