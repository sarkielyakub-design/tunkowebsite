"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Bell, CheckCheck } from "lucide-react";

export default function NotificationMenu() {
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  // Temporary data (replace with API later)
  const notifications = [
    {
      id: 1,
      title: "New KYC Submitted",
      message: "John Doe submitted KYC verification.",
      time: "2 mins ago",
      unread: true,
    },
    {
      id: 2,
      title: "Withdrawal Request",
      message: "A withdrawal requires approval.",
      time: "10 mins ago",
      unread: true,
    },
    {
      id: 3,
      title: "Exchange Rate Updated",
      message: "USD to XOF rate has changed.",
      time: "1 hour ago",
      unread: false,
    },
  ];

  const unreadCount = notifications.filter(
    (n) => n.unread
  ).length;

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (
        ref.current &&
        !ref.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handler);

    return () =>
      document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="relative rounded-lg p-2 hover:bg-gray-100"
      >
        <Bell size={22} />

        {unreadCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white">
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-96 rounded-xl border bg-white shadow-xl">

          {/* Header */}

          <div className="flex items-center justify-between border-b p-4">

            <h3 className="font-semibold">
              Notifications
            </h3>

            <button className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700">
              <CheckCheck size={16} />
              Mark all read
            </button>

          </div>

          {/* List */}

          <div className="max-h-96 overflow-y-auto">

            {notifications.map((item) => (
              <div
                key={item.id}
                className={`border-b p-4 hover:bg-gray-50 ${
                  item.unread ? "bg-blue-50" : ""
                }`}
              >
                <h4 className="font-medium">
                  {item.title}
                </h4>

                <p className="mt-1 text-sm text-gray-600">
                  {item.message}
                </p>

                <span className="mt-2 block text-xs text-gray-400">
                  {item.time}
                </span>
              </div>
            ))}

          </div>

          {/* Footer */}

          <div className="border-t p-3 text-center">

            <Link
              href="/admin/notifications"
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              View All Notifications
            </Link>

          </div>

        </div>
      )}
    </div>
  );
}