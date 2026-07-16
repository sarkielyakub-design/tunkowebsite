"use client";

import {
  Eye,
  MoreVertical,
  Lock,
  Unlock,
  Wallet,
  KeyRound,
} from "lucide-react";

interface UserTableProps {
  users: any[];
  loading?: boolean;
}

export default function UserTable({
  users,
  loading = false,
}: UserTableProps) {
  if (loading) {
    return (
      <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
        Loading users...
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm">

      <div className="border-b px-6 py-5">

        <h2 className="text-xl font-semibold">
          Users
        </h2>

        <p className="text-sm text-slate-500">
          Manage all registered Tunko customers.
        </p>

      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-slate-50">

            <tr>

              <th className="px-6 py-4 text-left">
                User
              </th>

              <th className="px-6 py-4 text-left">
                Country
              </th>

              <th className="px-6 py-4 text-left">
                Wallet
              </th>

              <th className="px-6 py-4 text-left">
                KYC
              </th>

              <th className="px-6 py-4 text-left">
                Status
              </th>

              <th className="px-6 py-4 text-left">
                Joined
              </th>

              <th className="px-6 py-4 text-right">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {users.map((user) => (

              <tr
                key={user.id}
                className="border-t hover:bg-slate-50"
              >

                <td className="px-6 py-4">

                  <div className="flex items-center gap-4">

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">

                      {user.first_name?.charAt(0)}
                      {user.last_name?.charAt(0)}

                    </div>

                    <div>

                      <h3 className="font-semibold">

                        {user.first_name} {user.last_name}

                      </h3>

                      <p className="text-sm text-slate-500">

                        {user.email}

                      </p>

                    </div>

                  </div>

                </td>

                <td className="px-6 py-4">

                  {user.country?.name ?? "-"}

                </td>

                <td className="px-6 py-4 font-semibold">

                  ₦
                  {Number(
                    user.wallet?.balance ?? 0
                  ).toLocaleString()}

                </td>

                <td className="px-6 py-4">

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      user.is_verified
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {user.is_verified
                      ? "Verified"
                      : "Pending"}

                  </span>

                </td>

                <td className="px-6 py-4">

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      user.is_active
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.is_active
                      ? "Active"
                      : "Frozen"}

                  </span>

                </td>

                <td className="px-6 py-4">

                  {new Date(
                    user.created_at
                  ).toLocaleDateString()}

                </td>

                <td className="px-6 py-4">

                  <div className="flex justify-end gap-2">

                    <button className="rounded-lg border p-2 hover:bg-slate-100">
                      <Eye className="h-4 w-4" />
                    </button>

                    <button className="rounded-lg border p-2 hover:bg-slate-100">
                      <Wallet className="h-4 w-4" />
                    </button>

                    <button className="rounded-lg border p-2 hover:bg-slate-100">
                      <KeyRound className="h-4 w-4" />
                    </button>

                    {user.is_active ? (
                      <button className="rounded-lg border p-2 text-red-600 hover:bg-red-50">
                        <Lock className="h-4 w-4" />
                      </button>
                    ) : (
                      <button className="rounded-lg border p-2 text-green-600 hover:bg-green-50">
                        <Unlock className="h-4 w-4" />
                      </button>
                    )}

                    <button className="rounded-lg border p-2 hover:bg-slate-100">
                      <MoreVertical className="h-4 w-4" />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}