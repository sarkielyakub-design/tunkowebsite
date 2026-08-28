"use client";

import {
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Rate {
  from: string;
  to: string;
  rate: number | string;
  change?: string;
}

interface Props {
  rates?: Rate[];
}

export default function ExchangeRateCard({
  rates = [],
}: Props) {
  return (
    <Card className="rounded-3xl border-0 shadow-lg">

      <CardHeader className="flex flex-row items-center justify-between">

        <CardTitle className="text-xl">
          Exchange Rates
        </CardTitle>

        <TrendingUp className="h-6 w-6 text-green-600" />

      </CardHeader>

      <CardContent className="space-y-4">

        {rates.length === 0 && (
          <p className="py-8 text-center text-slate-500">
            No exchange rates available.
          </p>
        )}

        {rates.map((item, index) => {

          const change =
            typeof item.change === "string"
              ? item.change
              : "0.0%";

          const positive =
            change.startsWith("+") ||
            !change.startsWith("-");

          return (
            <div
              key={`${item.from}-${item.to}-${index}`}
              className="flex items-center justify-between rounded-2xl border p-4 transition hover:bg-slate-50"
            >

              <div>

                <h3 className="font-semibold">
                  {item.from} → {item.to}
                </h3>

                <p className="text-sm text-slate-500">
                  1 {item.from} = {item.rate} {item.to}
                </p>

              </div>

              <div
                className={`flex items-center gap-2 font-semibold ${
                  positive
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {positive ? (
                  <ArrowUpRight className="h-4 w-4" />
                ) : (
                  <ArrowDownRight className="h-4 w-4" />
                )}

                {change}
              </div>

            </div>
          );
        })}

      </CardContent>

    </Card>
  );
}