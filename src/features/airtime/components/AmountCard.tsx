"use client";

import { Wallet } from "lucide-react";
import { Input } from "@/components/ui/input";

interface Props {
  amount: string;
  onChange: (value: string) => void;
}

export default function AmountCard({
  amount,
  onChange,
}: Props) {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">

      <h2 className="mb-5 text-xl font-bold">
        Airtime Amount
      </h2>

      <div className="relative">

        <Wallet className="absolute left-4 top-4 h-5 w-5 text-slate-400" />

        <Input
          type="number"
          min="50"
          value={amount}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter amount"
          className="h-14 rounded-2xl pl-12"
        />

      </div>

      <p className="mt-3 text-sm text-slate-500">
        Enter the airtime amount you want to purchase.
      </p>

    </div>
  );
}