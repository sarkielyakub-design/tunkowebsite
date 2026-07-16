"use client";

import { useEffect, useState } from "react";

import {
  ArrowUpRight,
  ArrowDownLeft,
  Receipt,
  Users,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";



export default function StatsCards() {
  const [stats, setStats] =
    useState<DashboardStats | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  async function loadStats() {
    try {
      const response =
        await getDashboardStats();

      if (response.success) {
        setStats(response.stats);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <Card key={index} className="rounded-3xl">
            <CardContent className="p-8">
              Loading...
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (!stats) {
    return null;
  }

  const cards = [
    {
      title: "Total Sent",
      value: `₦${Number(
        stats.total_sent
      ).toLocaleString()}`,
      icon: ArrowUpRight,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Total Received",
      value: `₦${Number(
        stats.total_received
      ).toLocaleString()}`,
      icon: ArrowDownLeft,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Transactions",
      value: stats.transactions.toLocaleString(),
      icon: Receipt,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Beneficiaries",
      value: stats.beneficiaries.toLocaleString(),
      icon: Users,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <section>

      <div className="mb-5 flex items-center justify-between">

        <h2 className="text-xl font-bold">
          Statistics
        </h2>

        <span className="text-sm text-slate-500">
          Live Data
        </span>

      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <Card
              key={card.title}
              className="rounded-3xl border-0 shadow-md transition hover:shadow-xl"
            >
              <CardContent className="flex items-center justify-between p-6">

                <div>

                  <p className="text-sm text-slate-500">
                    {card.title}
                  </p>

                  <h3 className="mt-2 text-3xl font-bold">
                    {card.value}
                  </h3>

                </div>

                <div
                  className={`rounded-2xl p-4 ${card.color}`}
                >
                  <Icon className="h-7 w-7" />
                </div>

              </CardContent>

            </Card>
          );
        })}

      </div>

    </section>
  );
}