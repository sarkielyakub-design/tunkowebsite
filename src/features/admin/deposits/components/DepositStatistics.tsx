"use client";

import {
  Wallet,
  Clock,
  CheckCircle,
  XCircle,
  Ban,
  TrendingUp,
  Landmark,
  Loader2,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { DepositStatistics as DepositStatisticsType } from "../types/deposit";

interface Props {
  statistics?: DepositStatisticsType;
  loading: boolean;
  error?: boolean;
}

export default function DepositStatistics({
  statistics,
  loading,
  error,
}: Props) {
  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <Loader2 className="h-6 w-6 animate-spin" />
      </div>
    );
  }

  if (error || !statistics) {
    return (
      <Card>
        <CardContent className="py-8 text-center text-red-500">
          Unable to load deposit statistics.
        </CardContent>
      </Card>
    );
  }

  const cards = [
    {
      title: "Total Deposits",
      value: statistics.total_deposits,
      icon: Landmark,
    },
    {
      title: "Pending",
      value: statistics.pending,
      icon: Clock,
    },
    {
      title: "Completed",
      value: statistics.completed,
      icon: CheckCircle,
    },
    {
      title: "Failed",
      value: statistics.failed,
      icon: XCircle,
    },
    {
      title: "Cancelled",
      value: statistics.cancelled,
      icon: Ban,
    },
    {
      title: "Total Volume",
      value: Number(
        statistics.total_volume
      ).toLocaleString(),
      icon: Wallet,
    },
    {
      title: "Today's Volume",
      value: Number(
        statistics.today_volume
      ).toLocaleString(),
      icon: TrendingUp,
    },
  ];  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <Card key={card.title}>
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <p className="text-sm text-muted-foreground">
                  {card.title}
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  {card.value}
                </h3>
              </div>

              <Icon className="h-10 w-10 text-primary" />
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}