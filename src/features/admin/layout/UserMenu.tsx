"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

import {
  ChevronDown,
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

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <div
      className="relative"
      ref={ref}
    >
      {/* Trigger */}

      <button
        type="button"
        onClick={() => setOpen((previous) => !previous)}
        className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 py-2 transition hover:bg-gray-50"
      >
        {/* Avatar */}

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
          A
        </div>

        {/* Admin Information */}

        <div className="hidden text-left lg:block">
          <p className="text-sm font-semibold">
            Administrator
          </p>

          <p className="text-xs text-gray-500">
            Super Admin
          </p>
        </div>

        {/* Arrow */}

        <ChevronDown
          size={18}
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-64 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">

          {/* Admin Information */}

          <div className="border-b border-gray-100 p-4">
            <p className="font-semibold text-gray-900">
              Administrator
            </p>

            <p className="text-sm text-gray-500">
              admin@tunko.com
            </p>
          </div>

          {/* Settings */}

          <Link
            href="/admin/settings"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-3 text-gray-700 transition hover:bg-gray-50"
          >
            <Settings size={18} />

            <span>
              Settings
            </span>
          </Link>

          {/* Change Password */}

          <Link
            href="/admin/change-password"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-3 text-gray-700 transition hover:bg-gray-50"
          >
            <KeyRound size={18} />

            <span>
              Change Password
            </span>
          </Link>

          {/* Logout */}

          <button
            type="button"
            onClick={() => {
              setOpen(false);

              // Logout logic will be connected here.
            }}
            className="flex w-full items-center gap-3 border-t border-gray-100 px-4 py-3 text-red-600 transition hover:bg-red-50"
          >
            <LogOut size={18} />

            <span>
              Logout
            </span>
          </button>
        </div>
      )}
    </div>
  );
}