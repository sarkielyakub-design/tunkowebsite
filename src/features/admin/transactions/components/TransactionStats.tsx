
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
  currency?: string;
  loading?: boolean;
}

type SummaryKey = keyof Props["summary"];

const cards: Array<{
  key: SummaryKey;
  label: string;
  description: string;
  icon: typeof Wallet;
  color: string;
  money?: boolean;
}> = [
  {
    key: "total_transactions",
    label: "Total Transactions",
    description: "All recorded transactions",
    icon: Wallet,
    color: "bg-blue-50 text-blue-600",
  },
  {
    key: "successful_transactions",
    label: "Successful",
    description: "Successfully completed",
    icon: CheckCircle,
    color: "bg-green-50 text-green-600",
  },
  {
    key: "pending_transactions",
    label: "Pending",
    description: "Awaiting completion",
    icon: Clock3,
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    key: "failed_transactions",
    label: "Failed",
    description: "Unsuccessful transactions",
    icon: XCircle,
    color: "bg-red-50 text-red-600",
  },
  {
    key: "total_volume",
    label: "Transaction Volume",
    description: "Total reported transaction value",
    icon: TrendingUp,
    color: "bg-purple-50 text-purple-600",
    money: true,
  },
  {
    key: "today_transactions",
    label: "Today",
    description: "Transactions recorded today",
    icon: CalendarDays,
    color: "bg-indigo-50 text-indigo-600",
  },
];

function safeNumber(value: unknown): number {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === "string" && value.trim() !== "") {
    const parsed = Number(value);

    if (Number.isFinite(parsed)) {
      return parsed;
    }
  }

  return 0;
}

function formatCount(value: unknown): string {
  return new Intl.NumberFormat("en-NG", {
    maximumFractionDigits: 0,
  }).format(safeNumber(value));
}

function formatMoney(
  value: unknown,
  currency: string,
): string {
  const amount = safeNumber(value);

  try {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  } catch {
    return `${currency} ${amount.toLocaleString("en-NG", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  }
}

export default function TransactionStats({
  summary,
  currency = "NGN",
  loading = false,
}: Props) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {cards.map((card) => {
        const Icon = card.icon;
        const value = summary?.[card.key as SummaryKey];

        return (
          <div
            key={card.key}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="text-sm font-medium text-slate-600">
                  {card.label}
                </p>

                <h2
                  className="mt-3 break-words text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
                  aria-live="polite"
                >
                  {loading
                    ? "Loading..."
                    : card.money
                      ? formatMoney(value, currency)
                      : formatCount(value)}
                </h2>

                <p className="mt-3 text-sm text-slate-500">
                  {card.description}
                </p>
              </div>

              <div
                className={`shrink-0 rounded-2xl p-4 ${card.color}`}
                aria-hidden="true"
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