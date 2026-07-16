"use client";

import { useState } from "react";
import Link from "next/link";
import { Bell, X } from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "New KYC Submitted",
    message: "John Doe submitted KYC documents.",
    time: "2 min ago",
    href: "/admin/kyc",
  },
  {
    id: 2,
    title: "Withdrawal Pending",
    message: "A withdrawal requires approval.",
    time: "10 min ago",
    href: "/admin/withdrawals",
  },
  {
    id: 3,
    title: "Transfer Completed",
    message: "International transfer completed.",
    time: "25 min ago",
    href: "/admin/transfers",
  },
];

export default function HeaderNotification() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="relative rounded-xl p-2 transition hover:bg-slate-100"
      >
        <Bell className="h-6 w-6 text-slate-600" />

        {notifications.length > 0 && (
          <span className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
            {notifications.length}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-[380px] overflow-hidden rounded-2xl border bg-white shadow-2xl">

          {/* Header */}
          <div className="flex items-center justify-between border-b px-5 py-4">
            <h3 className="font-semibold">
              Notifications
            </h3>

            <button
              onClick={() => setOpen(false)}
              className="rounded-lg p-1 hover:bg-slate-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* List */}
          <div className="max-h-[420px] overflow-y-auto">

            {notifications.map((notification) => (
              <Link
                key={notification.id}
                href={notification.href}
                className="block border-b px-5 py-4 transition hover:bg-slate-50"
              >
                <div className="flex items-start justify-between gap-3">

                  <div>
                    <p className="font-medium text-slate-900">
                      {notification.title}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      {notification.message}
                    </p>
                  </div>

                  <span className="whitespace-nowrap text-xs text-slate-400">
                    {notification.time}
                  </span>

                </div>
              </Link>
            ))}

          </div>

          {/* Footer */}
          <div className="border-t p-3">
            <Link
              href="/admin/notifications"
              className="block rounded-xl py-2 text-center text-sm font-medium text-blue-600 transition hover:bg-blue-50"
            >
              View All Notifications
            </Link>
          </div>

        </div>
      )}
    </div>
  );
}