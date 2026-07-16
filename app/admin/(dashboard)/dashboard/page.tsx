"use client";

import {
  Users,
  Wallet,
  ArrowRightLeft,
  CreditCard,
  Smartphone,
  Wifi,
  ShieldCheck,
  RefreshCcw,
  CalendarDays,
} from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { useDashboard } from "@/src/features/admin/dashboard/hooks/useDashboard";

export default function DashboardPage() {
  const { data, isLoading } = useDashboard();

  const stats = data?.data.statistics;

  const cards = [
    {
      title: "Users",
      value: stats?.users.total ?? 0,
      icon: Users,
      color: "bg-blue-500",
    },
    {
      title: "Wallet Balance",
      value: `₦${Number(
        stats?.wallet.total_balance ?? 0
      ).toLocaleString()}`,
      icon: Wallet,
      color: "bg-green-500",
    },
    {
      title: "Transactions",
      value: stats?.transactions.total ?? 0,
      icon: CreditCard,
      color: "bg-purple-500",
    },
    {
      title: "Transfers",
      value: stats?.transfers.total ?? 0,
      icon: ArrowRightLeft,
      color: "bg-orange-500",
    },
    {
      title: "Airtime",
      value: stats?.airtime.total ?? 0,
      icon: Smartphone,
      color: "bg-pink-500",
    },
    {
      title: "Data",
      value: stats?.data.total ?? 0,
      icon: Wifi,
      color: "bg-cyan-500",
    },
    {
      title: "Pending KYC",
      value: stats?.kyc.pending ?? 0,
      icon: ShieldCheck,
      color: "bg-red-500",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Dashboard
          </h1>

          <p className="mt-2 text-slate-500">
            Welcome back. Here's what's happening in Tunko today.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm hover:bg-slate-50">
            <RefreshCcw className="h-4 w-4" />
            Refresh
          </button>

          <div className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-white">
            <CalendarDays className="h-4 w-4" />
            Today
          </div>
        </div>
      </div>

      {/* Statistics */}

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  {card.title}
                </p>

                <h2 className="mt-3 text-3xl font-bold">
                  {isLoading ? "..." : card.value}
                </h2>
              </div>

              <div
                className={`${card.color} rounded-2xl p-4 text-white`}
              >
                <card.icon className="h-7 w-7" />
              </div>
            </div>
          </div>
          
        ))}
      </div>
      {/* Recent Transactions */}

<div className="rounded-2xl bg-white shadow-sm">

  <div className="flex items-center justify-between border-b px-6 py-5">

    <div>

      <h2 className="text-xl font-semibold">
        Recent Transactions
      </h2>

      <p className="text-sm text-slate-500">
        Latest transactions across the platform.
      </p>

    </div>

    <button className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-slate-50">
      View All
    </button>

  </div>

  <div className="overflow-x-auto">

    <table className="min-w-full">

      <thead className="bg-slate-50">

        <tr>

          <th className="px-6 py-4 text-left text-sm font-semibold">
            ID
          </th>

          <th className="px-6 py-4 text-left text-sm font-semibold">
            Type
          </th>

          <th className="px-6 py-4 text-left text-sm font-semibold">
            Amount
          </th>

          <th className="px-6 py-4 text-left text-sm font-semibold">
            Status
          </th>

          <th className="px-6 py-4 text-left text-sm font-semibold">
            Date
          </th>

        </tr>

      </thead>

      <tbody>

        {data?.data.recent_transactions.map((transaction: any) => (

          <tr
            key={transaction.id}
            className="border-t hover:bg-slate-50"
          >

            <td className="px-6 py-4">
              #{transaction.id}
            </td>

            <td className="px-6 py-4">
              {transaction.type}
            </td>

            <td className="px-6 py-4 font-semibold">
              ₦{Number(transaction.amount).toLocaleString()}
            </td>

            <td className="px-6 py-4">

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  transaction.status === "completed"
                    ? "bg-green-100 text-green-700"
                    : transaction.status === "pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {transaction.status}
              </span>

            </td>

            <td className="px-6 py-4 text-slate-500">
              {new Date(
                transaction.created_at
              ).toLocaleDateString()}
            </td>

          </tr>

        ))}

      </tbody>

    </table>

  </div>

</div>
{/* Recent Users */}

<div className="rounded-2xl bg-white shadow-sm">

  <div className="border-b px-6 py-5">

    <h2 className="text-xl font-semibold">
      Recent Users
    </h2>

    <p className="text-sm text-slate-500">
      Latest registered users.
    </p>

  </div>

  <div className="divide-y">

    {data?.data.recent_users.map((user: any) => (

      <div
        key={user.id}
        className="flex items-center justify-between px-6 py-4 hover:bg-slate-50"
      >

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">

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

        <div>

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              user.is_active
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {user.is_active ? "Active" : "Inactive"}
          </span>

        </div>

      </div>

    ))}

  </div>

</div>
{/* Analytics */}

<div className="grid gap-6 lg:grid-cols-3">

  {/* Chart */}

  <div className="lg:col-span-2 rounded-2xl bg-white p-6 shadow-sm">

    <div className="mb-6">

      <h2 className="text-xl font-semibold">
        Weekly Transactions
      </h2>

      <p className="text-sm text-slate-500">
        Last 7 days activity
      </p>

    </div>

    <div className="h-80">

      <ResponsiveContainer width="100%" height="100%">

        <LineChart
          data={data?.data?.charts?.transactions ?? []}
        >

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="date" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="total"
            stroke="#2563eb"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  </div>
{/* Pending KYC */}

<div className="rounded-2xl bg-white shadow-sm">

  <div className="flex items-center justify-between border-b px-6 py-5">

    <div>

      <h2 className="text-xl font-semibold">
        Pending KYC
      </h2>

      <p className="text-sm text-slate-500">
        Users waiting for verification
      </p>

    </div>

    <button className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-slate-50">
      View All
    </button>

  </div>

  <div className="overflow-x-auto">

    <table className="min-w-full">

      <thead className="bg-slate-50">

        <tr>

          <th className="px-6 py-4 text-left">
            User
          </th>

          <th className="px-6 py-4 text-left">
            Status
          </th>

          <th className="px-6 py-4 text-left">
            Submitted
          </th>

          <th className="px-6 py-4 text-right">
            Action
          </th>

        </tr>

      </thead>

      <tbody>

        {data?.data.pending_kyc?.map((kyc: any) => (

          <tr
            key={kyc.id}
            className="border-t hover:bg-slate-50"
          >

            <td className="px-6 py-4">

              User #{kyc.user_id}

            </td>

            <td className="px-6 py-4">

              <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">

                Pending

              </span>

            </td>

            <td className="px-6 py-4">

              {new Date(
                kyc.created_at
              ).toLocaleDateString()}

            </td>

            <td className="px-6 py-4 text-right">

              <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700">

                Review

              </button>

            </td>

          </tr>

        ))}

      </tbody>

    </table>

  </div>

</div>
  {/* System Health */}

  <div className="rounded-2xl bg-white p-6 shadow-sm">

    <h2 className="mb-6 text-xl font-semibold">
      System Health
    </h2>

    {Object.entries(
      data?.data.system_health ?? {}
    ).map(([name, status]) => (

      <div
        key={name}
        className="mb-4 flex items-center justify-between"
      >

        <span className="capitalize">

          {name}

        </span>

        <span
          className={`rounded-full px-3 py-1 text-sm font-medium ${
            status
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status ? "Online" : "Offline"}
        </span>

      </div>

    ))}

  </div>

</div>
{/* Quick Actions */}

<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

  <button className="rounded-2xl bg-blue-600 p-6 text-left text-white transition hover:bg-blue-700">

    <h3 className="text-lg font-semibold">
      Users
    </h3>

    <p className="mt-2 text-sm text-blue-100">
      Manage registered users
    </p>

  </button>

  <button className="rounded-2xl bg-green-600 p-6 text-left text-white transition hover:bg-green-700">

    <h3 className="text-lg font-semibold">
      Wallets
    </h3>

    <p className="mt-2 text-sm text-green-100">
      View wallet balances
    </p>

  </button>

  <button className="rounded-2xl bg-orange-600 p-6 text-left text-white transition hover:bg-orange-700">

    <h3 className="text-lg font-semibold">
      Transfers
    </h3>

    <p className="mt-2 text-sm text-orange-100">
      Review money transfers
    </p>

  </button>

  <button className="rounded-2xl bg-purple-600 p-6 text-left text-white transition hover:bg-purple-700">

    <h3 className="text-lg font-semibold">
      Reports
    </h3>

    <p className="mt-2 text-sm text-purple-100">
      View analytics & reports
    </p>

  </button>

</div><div className="rounded-2xl border-l-4 border-red-500 bg-white p-6 shadow-sm">

    <h2 className="text-xl font-bold">
        Pending KYC
    </h2>

    <p className="mt-2 text-slate-500">
        There are
        <span className="mx-2 font-bold text-red-600">
            {stats?.kyc.pending}
        </span>
        KYC requests waiting for approval.
    </p>

</div>
    </div>
    
  );
  
}