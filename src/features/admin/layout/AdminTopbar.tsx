"use client";

import {
  Bell,
  Search,
  UserCircle,
  Menu,
  ChevronDown,
} from "lucide-react";

export default function AdminTopbar() {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-6 lg:px-8">

      {/* Left */}

      <div className="flex items-center gap-5">

        {/* Mobile Sidebar Button */}

        <button className="rounded-lg p-2 transition hover:bg-slate-100 lg:hidden">

          <Menu className="h-6 w-6" />

        </button>

        {/* Page Title */}

        <div className="hidden sm:block">

          <h1 className="text-xl font-bold text-slate-900">
            Dashboard
          </h1>

          <p className="text-sm text-slate-500">
            Welcome back to Tunko Admin
          </p>

        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        {/* Search */}

        <div className="relative hidden lg:block">

          <Search
            className="absolute left-4 top-3 text-slate-400"
            size={18}
          />

          <input
            placeholder="Search users, transfers..."
            className="h-11 w-80 rounded-xl border border-slate-300 bg-slate-50 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
          />

        </div>

        {/* Notifications */}

        <button className="relative rounded-xl border border-slate-200 p-3 transition hover:bg-slate-100">

          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>

        </button>

        {/* Profile */}

        <button className="flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-2 transition hover:bg-slate-100">

          <UserCircle
            size={42}
            className="text-slate-600"
          />

          <div className="hidden text-left md:block">

            <p className="text-sm font-semibold text-slate-900">
              Super Admin
            </p>

            <p className="text-xs text-slate-500">
              Administrator
            </p>

          </div>

          <ChevronDown
            size={18}
            className="text-slate-500"
          />

        </button>

      </div>

    </header>
  );
}