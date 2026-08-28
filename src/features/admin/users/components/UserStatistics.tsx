"use client";

import {
  Users,
  UserCheck,
  UserX,
  ShieldCheck,
  UserPlus,
} from "lucide-react";

interface Props {
  statistics: {
    total: number;
    active: number;
    verified: number;
    frozen: number;
    today: number;
  };
}

export default function UserStatistics({
  statistics,
}: Props) {
  const cards = [
    {
      title: "Total Users",
      value: statistics.total,
      icon: Users,
      color: "bg-blue-600",
    },
    {
      title: "Active",
      value: statistics.active,
      icon: UserCheck,
      color: "bg-green-600",
    },
    {
      title: "Verified",
      value: statistics.verified,
      icon: ShieldCheck,
      color: "bg-purple-600",
    },
    {
      title: "Frozen",
      value: statistics.frozen,
      icon: UserX,
      color: "bg-red-600",
    },
    {
      title: "Today",
      value: statistics.today,
      icon: UserPlus,
      color: "bg-orange-600",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
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
                {card.value}
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
  );
}