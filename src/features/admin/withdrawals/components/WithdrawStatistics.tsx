"use client";

import {
  Wallet,
  Clock3,
  Loader2,
  CheckCircle2,
  XCircle,
  Ban,
  DollarSign,
  Calendar,
} from "lucide-react";
import { useWithdrawalStatistics } from "../hooks/useWithdrawals";

export default function WithdrawStatistics() {
  const { data, isLoading } = useWithdrawalStatistics();

  const stats = data?.data;

  const cards = [
    {
      title: "Total Withdrawals",
      value: stats?.total_withdrawals ?? 0,
      icon: Wallet,
    },
    {
      title: "Pending",
      value: stats?.pending ?? 0,
      icon: Clock3,
    },
    {
      title: "Processing",
      value: stats?.processing ?? 0,
      icon: Loader2,
    },
    {
      title: "Completed",
      value: stats?.completed ?? 0,
      icon: CheckCircle2,
    },
    {
      title: "Failed",
      value: stats?.failed ?? 0,
      icon: XCircle,
    },
    {
      title: "Cancelled",
      value: stats?.cancelled ?? 0,
      icon: Ban,
    },
    {
      title: "Total Volume",
      value: stats?.total_volume ?? 0,
      icon: DollarSign,
      currency: true,
    },
    {
      title: "Today's Volume",
      value: stats?.today_volume ?? 0,
      icon: Calendar,
      currency: true,
    },
  ];

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="h-28 animate-pulse rounded-xl bg-gray-100"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-xl border bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">
                {card.title}
              </span>

              <Icon className="h-5 w-5 text-blue-600" />
            </div>

            <div className="mt-4 text-2xl font-bold">
              {card.currency
                ? Number(card.value).toLocaleString()
                : card.value}
            </div>
          </div>
        );
      })}
    </div>
  );
}