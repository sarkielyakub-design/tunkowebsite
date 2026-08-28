"use client";

import {
  Shield,
  Clock3,
  CheckCircle2,
  XCircle,
  SearchCheck,
} from "lucide-react";

import { useKycStatistics } from "../hooks/useKycStatistics";

export default function KycStatistics() {
  const { data, isLoading } = useKycStatistics();

  const stats = data?.data;

  const cards = [
    {
      title: "Total KYC",
      value: stats?.total ?? 0,
      icon: Shield,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Pending",
      value: stats?.pending ?? 0,
      icon: Clock3,
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
    {
      title: "Under Review",
      value: stats?.under_review ?? 0,
      icon: SearchCheck,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      title: "Approved",
      value: stats?.approved ?? 0,
      icon: CheckCircle2,
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      title: "Rejected",
      value: stats?.rejected ?? 0,
      icon: XCircle,
      color: "text-red-600",
      bg: "bg-red-50",
    },
  ];

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="h-28 rounded-xl border bg-white animate-pulse"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  {card.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  {card.value}
                </h2>
              </div>

              <div
                className={`rounded-full p-3 ${card.bg}`}
              >
                <Icon
                  className={`h-6 w-6 ${card.color}`}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}