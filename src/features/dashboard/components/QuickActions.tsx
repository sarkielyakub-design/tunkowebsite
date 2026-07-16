"use client";

import Link from "next/link";

import {
  ArrowUpRight,
  ArrowDownLeft,
  Wallet,
  CreditCard,
  Smartphone,
  Wifi,
  RefreshCcw,
  History,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const actions = [
  {
    title: "Send Money",
    icon: ArrowUpRight,
    href: "/transfer",
    color: "text-blue-600",
  },
  {
    title: "Receive",
    icon: ArrowDownLeft,
    href: "/receive",
    color: "text-green-600",
  },
  {
    title: "Fund Wallet",
    icon: Wallet,
    href: "/wallet/fund",
    color: "text-purple-600",
  },
  {
    title: "Cards",
    icon: CreditCard,
    href: "/cards",
    color: "text-orange-600",
  },
  {
    title: "Airtime",
    icon: Smartphone,
    href: "/airtime",
    color: "text-red-600",
  },
  {
    title: "Data",
    icon: Wifi,
    href: "/data",
    color: "text-cyan-600",
  },
  {
    title: "Exchange",
    icon: RefreshCcw,
    href: "/exchange-rates",
    color: "text-emerald-600",
  },
  {
    title: "History",
    icon: History,
    href: "/transactions",
    color: "text-slate-600",
  },
];

export default function QuickActions() {
  return (
    <section>
      <h2 className="mb-5 text-xl font-bold">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
            >
              <Card className="rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <CardContent className="flex flex-col items-center justify-center gap-4 p-6">

                  <div className="rounded-2xl bg-slate-100 p-4">
                    <Icon
                      className={`h-7 w-7 ${action.color}`}
                    />
                  </div>

                  <p className="text-center text-sm font-semibold">
                    {action.title}
                  </p>

                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}