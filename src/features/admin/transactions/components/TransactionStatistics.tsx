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

const cards: Array<{
  key: keyof Props["summary"];
  label: string;
  icon: typeof Wallet;
  color: string;
  description: string;
  money?: boolean;
}> = [
  {
    key: "total_transactions",
    label: "Total Transactions",
    icon: Wallet,
    color: "bg-blue-50 text-blue-600",
    description: "All recorded transactions",
  },
  {
    key: "successful_transactions",
    label: "Successful",
    icon: CheckCircle,
    color: "bg-green-50 text-green-600",
    description: "Successfully completed",
  },
  {
    key: "pending_transactions",
    label: "Pending",
    icon: Clock3,
    color: "bg-yellow-50 text-yellow-600",
    description: "Awaiting completion",
  },
  {
    key: "failed_transactions",
    label: "Failed",
    icon: XCircle,
    color: "bg-red-50 text-red-600",
    description: "Unsuccessful transactions",
  },
  {
    key: "total_volume",
    label: "Transaction Volume",
    icon: TrendingUp,
    color: "bg-purple-50 text-purple-600",
    description: "Total reported transaction value",
    money: true,
  },
  {
    key: "today_transactions",
    label: "Today",
    icon: CalendarDays,
    color: "bg-indigo-50 text-indigo-600",
    description: "Transactions recorded today",
  },
];

function safeNumber(value: unknown): number {
  if (value === null || value === undefined || value === "") {
    return 0;
  }

  const parsed = Number(value);

  return Number.isFinite(parsed) ? parsed : 0;
}

function formatCount(value: unknown): string {
  return new Intl.NumberFormat("en-NG", {
    maximumFractionDigits: 0,
  }).format(safeNumber(value));
}

function formatVolume(value: unknown): string {
  const amount = safeNumber(value);

  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 2,
  }).format(amount);
}

export default function TransactionStats({
  summary,
}: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {cards.map((card) => {
        const Icon = card.icon;

        const value =
          summary?.[
            card.key as keyof typeof summary
          ];

        const formattedValue = card.money
          ? formatVolume(value)
          : formatCount(value);

        return (
          <div
            key={card.key}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md sm:p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="text-sm font-medium text-slate-500">
                  {card.label}
                </p>

                <h2
                  className={`mt-3 break-words font-bold tracking-tight text-slate-900 ${
                    card.money
                      ? "text-2xl sm:text-3xl"
                      : "text-3xl"
                  }`}
                >
                  {formattedValue}
                </h2>

                <p className="mt-2 text-xs text-slate-400">
                  {card.description}
                </p>
              </div>

              <div
                className={`shrink-0 rounded-2xl p-3 ${card.color}`}
              >
                <Icon size={24} strokeWidth={2} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
