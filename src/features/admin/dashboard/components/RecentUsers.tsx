"use client";

import {
  UserCircle,
  BadgeCheck,
  Clock3,
} from "lucide-react";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    verified: true,
    joined: "5 mins ago",
  },
  {
    id: 2,
    name: "Aisha Bello",
    email: "aisha@example.com",
    verified: false,
    joined: "20 mins ago",
  },
  {
    id: 3,
    name: "Mohammed Ali",
    email: "mohammed@example.com",
    verified: true,
    joined: "1 hour ago",
  },
  {
    id: 4,
    name: "Sarah Ibrahim",
    email: "sarah@example.com",
    verified: true,
    joined: "3 hours ago",
  },
];

export default function RecentUsers() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-xl font-bold">
            Recent Users
          </h2>

          <p className="text-sm text-slate-500">
            Newly registered users.
          </p>

        </div>

        <button className="text-sm font-semibold text-blue-600 hover:underline">
          View All
        </button>

      </div>

      <div className="space-y-4">

        {users.map((user) => (

          <div
            key={user.id}
            className="flex items-center justify-between rounded-2xl border p-4 transition hover:bg-slate-50"
          >

            <div className="flex items-center gap-4">

              <div className="rounded-full bg-blue-100 p-3">

                <UserCircle className="h-7 w-7 text-blue-600" />

              </div>

              <div>

                <div className="flex items-center gap-2">

                  <h3 className="font-semibold">
                    {user.name}
                  </h3>

                  {user.verified && (
                    <BadgeCheck className="h-4 w-4 text-green-600" />
                  )}

                </div>

                <p className="text-sm text-slate-500">
                  {user.email}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500">

              <Clock3 className="h-4 w-4" />

              {user.joined}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}