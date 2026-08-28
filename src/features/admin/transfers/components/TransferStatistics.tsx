"use client";

import {
  CreditCard,
  Clock,
  Loader2,
  CheckCircle,
  XCircle,
  Ban,
  Wallet,
  TrendingUp,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { useTransferStatistics } from "../hooks/useTransferStatistics";export default function TransferStatistics() {
  const {
    data,
    isLoading,
    isError,
  } = useTransferStatistics();

  const statistics = data?.data;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-6 w-6 animate-spin" />
      </div>
    );
  }

  if (isError || !statistics) {
    return (
      <Card>
        <CardContent className="py-8 text-center text-red-500">
          Unable to load transfer statistics.
        </CardContent>
      </Card>
    );
  }  const cards = [
    {
      title: "Total Transfers",
      value: statistics.total_transfers,
      icon: CreditCard,
    },
    {
      title: "Pending",
      value: statistics.pending,
      icon: Clock,
    },
    {
      title: "Processing",
      value: statistics.processing,
      icon: Loader2,
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
      value: Number(statistics.total_volume).toLocaleString(),
      icon: Wallet,
    },
    {
      title: "Today's Volume",
      value: Number(statistics.today_volume).toLocaleString(),
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