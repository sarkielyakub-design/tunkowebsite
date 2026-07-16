"use client";

import {
  Wallet,
  CheckCircle,
  Clock3,
  XCircle,
  TrendingUp,
  CalendarDays,
} from "lucide-react";

interface Props {
  summary: {
    total_transactions: number;
    successful_transactions: number;
    pending_transactions: number;
    failed_transactions: number;
    total_volume: number;
    today_transactions: number;
  };
}

const cards = [
  {
    key: "total_transactions",
    label: "Total Transactions",
    icon: Wallet,
    color: "bg-blue-50 text-blue-600",
  },
  {
    key: "successful_transactions",
    label: "Successful",
    icon: CheckCircle,
    color: "bg-green-50 text-green-600",
  },
  {
    key: "pending_transactions",
    label: "Pending",
    icon: Clock3,
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    key: "failed_transactions",
    label: "Failed",
    icon: XCircle,
    color: "bg-red-50 text-red-600",
  },
  {
    key: "total_volume",
    label: "Transaction Volume",
    icon: TrendingUp,
    color: "bg-purple-50 text-purple-600",
    money: true,
  },
  {
    key: "today_transactions",
    label: "Today",
    icon: CalendarDays,
    color: "bg-indigo-50 text-indigo-600",
  },
];

export default function TransactionStats({
  summary,
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      {cards.map((card) => {

        const Icon = card.icon;

        const value = summary[
          card.key as keyof typeof summary
        ];

        return (
          <div
            key={card.key}
            className="rounded-2xl border bg-white p-6"
          >
            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-500">
                  {card.label}
                </p>

                <h2 className="mt-3 text-3xl font-bold">

                  {card.money
                    ? Number(value).toLocaleString()
                    : Number(value).toLocaleString()}

                </h2>

              </div>

              <div
                className={`rounded-2xl p-4 ${card.color}`}
              >
                <Icon size={26} />
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
}