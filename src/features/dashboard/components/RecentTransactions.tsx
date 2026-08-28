"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowDownLeft,
  ArrowUpRight,
  Smartphone,
  Wifi,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import {
  getTransactions,
  Transaction,
} from "@/src/api/transaction";

export default function RecentTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTransactions();
  }, []);

  async function loadTransactions() {
    try {
      const response = await getTransactions();

      if (response.success) {
        setTransactions(response.transactions);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  function getIcon(type: string) {
    switch (type) {
      case "credit":
        return ArrowDownLeft;

      case "transfer":
      case "debit":
        return ArrowUpRight;

      case "airtime":
        return Smartphone;

      case "data":
        return Wifi;

      default:
        return ArrowUpRight;
    }
  }

  function getColor(type: string) {
    switch (type) {
      case "credit":
        return "bg-green-100 text-green-600";

      case "transfer":
      case "debit":
        return "bg-red-100 text-red-600";

      case "airtime":
        return "bg-blue-100 text-blue-600";

      case "data":
        return "bg-purple-100 text-purple-600";

      default:
        return "bg-slate-100 text-slate-600";
    }
  }

  if (loading) {
    return (
      <Card className="rounded-3xl">
        <CardContent className="p-10">
          Loading transactions...
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="rounded-3xl border-0 shadow-lg">

      <CardHeader className="flex flex-row items-center justify-between">

        <CardTitle>
          Recent Transactions
        </CardTitle>

        <Link
          href="/transactions"
          className="text-blue-600 font-semibold"
        >
          View All
        </Link>

      </CardHeader>

      <CardContent className="space-y-4">

        {transactions.length === 0 && (
          <div className="py-8 text-center text-slate-500">
            No transactions found.
          </div>
        )}

        {transactions.map((transaction) => {
          const Icon = getIcon(transaction.type);

          const colors = getColor(transaction.type);

          return (
            <div
              key={transaction.id}
              className="flex items-center justify-between rounded-2xl border p-4 hover:bg-slate-50"
            >
              <div className="flex items-center gap-4">

                <div
                  className={`rounded-2xl p-3 ${colors.split(" ")[0]}`}
                >
                  <Icon
                    className={`h-6 w-6 ${colors.split(" ")[1]}`}
                  />
                </div>

                <div>

                  <h3 className="font-semibold capitalize">
                    {transaction.type}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {transaction.description}
                  </p>

                </div>

              </div>

              <div className="text-right">

                <h3 className="font-bold">
                  {transaction.type === "credit"
                    ? "+"
                    : "-"}
                  ₦
                  {Number(transaction.amount).toLocaleString()}
                </h3>

                <Badge
                  variant={
                    transaction.status === "success"
                      ? "default"
                      : "secondary"
                  }
                  className="mt-2 capitalize"
                >
                  {transaction.status}
                </Badge>

              </div>

            </div>
          );
        })}

      </CardContent>

    </Card>
  );
}