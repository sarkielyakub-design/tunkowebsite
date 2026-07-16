"use client";

import Link from "next/link";

import {
  UserPlus,
  Wallet,
  ArrowRightLeft,
  Smartphone,
  Wifi,
  FileBarChart,
} from "lucide-react";

const actions = [
  {
    title: "Add User",
    href: "/admin/users/create",
    icon: UserPlus,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Credit Wallet",
    href: "/admin/wallets/credit",
    icon: Wallet,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Transfers",
    href: "/admin/transfers",
    icon: ArrowRightLeft,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Airtime",
    href: "/admin/airtime",
    icon: Smartphone,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Data",
    href: "/admin/data",
    icon: Wifi,
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    title: "Reports",
    href: "/admin/reports",
    icon: FileBarChart,
    color: "bg-red-100 text-red-600",
  },
];

export default function QuickActions() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">

      <div className="mb-6">

        <h2 className="text-xl font-bold">
          Quick Actions
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Frequently used administrator shortcuts.
        </p>

      </div>

      <div className="grid grid-cols-2 gap-4">

        {actions.map((action) => {

          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="rounded-2xl border p-5 transition hover:border-blue-500 hover:shadow-md"
            >

              <div
                className={`mb-4 inline-flex rounded-2xl p-3 ${action.color}`}
              >
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="font-semibold">
                {action.title}
              </h3>

            </Link>
          );
        })}

      </div>

    </div>
  );
}