"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

import {
  ChevronDown,
  User,
  Settings,
  KeyRound,
  LogOut,
} from "lucide-react";

export default function UserMenu() {
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  return (
    <div className="relative" ref={ref}>
      {/* Trigger */}

      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 rounded-xl border bg-white px-3 py-2 hover:bg-gray-50"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
          A
        </div>

        <div className="hidden text-left lg:block">
          <p className="text-sm font-semibold">
            Administrator
          </p>

          <p className="text-xs text-gray-500">
            Super Admin
          </p>
        </div>

        <ChevronDown
          size={18}
          className={`transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}

      {open && (
        <div className="absolute right-0 mt-2 w-64 rounded-xl border bg-white shadow-xl overflow-hidden z-50">

          <div className="border-b p-4">

            <p className="font-semibold">
              Administrator
            </p>

            <p className="text-sm text-gray-500">
              admin@tunko.com
            </p>

          </div>

          <Link
            href="/admin/profile"
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50"
          >
            <User size={18} />
            Profile
          </Link>

          <Link
            href="/admin/settings"
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50"
          >
            <Settings size={18} />
            Settings
          </Link>

          <Link
            href="/admin/change-password"
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50"
          >
            <KeyRound size={18} />
            Change Password
          </Link>

          <button
            className="flex w-full items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50"
          >
            <LogOut size={18} />
            Logout
          </button>

        </div>
      )}
    </div>
  );
}