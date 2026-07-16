"use client";

import { useState } from "react";
import { ChevronDown, LogOut, Settings, UserCircle } from "lucide-react";

export default function UserMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 rounded-xl p-2 hover:bg-slate-100"
      >
        <UserCircle className="h-10 w-10 text-blue-600" />

        <div className="text-left">
          <p className="font-semibold">Super Admin</p>
          <p className="text-sm text-slate-500">Administrator</p>
        </div>

        <ChevronDown className="h-5 w-5" />
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-56 rounded-xl border bg-white shadow-lg">
          <button className="flex w-full items-center gap-3 px-5 py-4 hover:bg-slate-50">
            <UserCircle className="h-5 w-5" />
            Profile
          </button>

          <button className="flex w-full items-center gap-3 px-5 py-4 hover:bg-slate-50">
            <Settings className="h-5 w-5" />
            Settings
          </button>

          <hr />

          <button className="flex w-full items-center gap-3 px-5 py-4 text-red-600 hover:bg-red-50">
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}