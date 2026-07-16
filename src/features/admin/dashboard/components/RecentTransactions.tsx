"use client";

import {
  ArrowDownLeft,
  ArrowUpRight,
  Smartphone,
  Wifi,
} from "lucide-react";

const transactions = [
  {
    id: 1,
    title: "Wallet Transfer",
    amount: "₦25,000",
    status: "Completed",
    type: "transfer",
    time: "2 mins ago",
  },
  {
    id: 2,
    title: "Airtime Purchase",
    amount: "₦2,000",
    status: "Completed",
    type: "airtime",
    time: "10 mins ago",
  },
  {
    id: 3,
    title: "Data Bundle",
    amount: "₦5,000",
    status: "Pending",
    type: "data",
    time: "30 mins ago",
  },
  {
    id: 4,
    title: "Wallet Funding",
    amount: "₦50,000",
    status: "Completed",
    type: "deposit",
    time: "1 hour ago",
  },
];

function getIcon(type: string) {
  switch (type) {
    case "transfer":
      return (
        <ArrowUpRight className="h-5 w-5 text-blue-600" />
      );

    case "deposit":
      return (
        <ArrowDownLeft className="h-5 w-5 text-green-600" />
      );

    case "airtime":
      return (
        <Smartphone className="h-5 w-5 text-orange-600" />
      );

    case "data":
      return (
        <Wifi className="h-5 w-5 text-purple-600" />
      );

    default:
      return (
        <ArrowUpRight className="h-5 w-5 text-slate-600" />
      );
  }
}

function getStatusColor(status: string) {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-700";

    case "Pending":
      return "bg-yellow-100 text-yellow-700";

    case "Failed":
      return "bg-red-100 text-red-700";

    default:
      return "bg-slate-100 text-slate-700";
  }
}

export default function RecentTransactions() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-xl font-bold">
            Recent Transactions
          </h2>

          <p className="text-sm text-slate-500">
            Latest activities across the platform.
          </p>

        </div>

        <button className="text-sm font-semibold text-blue-600">
          View All
        </button>

      </div>

      <div className="space-y-4">

        {transactions.map((transaction) => (

          <div
            key={transaction.id}
            className="flex items-center justify-between rounded-2xl border p-4 transition hover:bg-slate-50"
          >

            <div className="flex items-center gap-4">

              <div className="rounded-full bg-slate-100 p-3">

                {getIcon(transaction.type)}

              </div>

              <div>

                <h3 className="font-semibold">
                  {transaction.title}
                </h3>

                <p className="text-sm text-slate-500">
                  {transaction.time}
                </p>

              </div>

            </div>

            <div className="text-right">

              <p className="font-bold">
                {transaction.amount}
              </p>

              <span
                className={`mt-1 inline-block rounded-full px-3 py-1 text-xs font-medium ${getStatusColor(
                  transaction.status
                )}`}
              >
                {transaction.status}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}