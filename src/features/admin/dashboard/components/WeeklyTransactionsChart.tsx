"use client";

import { useMemo } from "react";
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import { useI18n } from "@/src/i18n/I18nProvider";

export default function WeeklyTransactionsChart({ transactions }: { transactions: any[] }) {
  const { t, locale } = useI18n();
  const data = useMemo(() => {
    const days = Array.from({ length: 7 }, (_, index) => {
      const d = new Date();
      d.setHours(0, 0, 0, 0);
      d.setDate(d.getDate() - (6 - index));
      return d;
    });

    return days.map((day) => {
      const key = day.toISOString().slice(0, 10);
      const total = transactions.reduce((sum, tx) => {
        const txDate = tx?.created_at ? new Date(tx.created_at).toISOString().slice(0, 10) : "";
        return txDate === key ? sum + Number(tx?.amount ?? 0) : sum;
      }, 0);
      return {
        date: new Intl.DateTimeFormat(locale, { weekday: "short" }).format(day),
        total,
      };
    });
  }, [transactions, locale]);

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">{t("Weekly Transactions")}</h2>
        <p className="text-sm text-slate-500">{t("Last 7 days activity")}</p>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="total" stroke="#2563eb" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
