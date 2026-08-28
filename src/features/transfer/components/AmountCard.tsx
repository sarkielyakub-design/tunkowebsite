"use client";

import { Wallet, AlertCircle } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
  amount: string;
  onChange: (value: string) => void;
  balance: number;
}

const quickAmounts = [
  1000,
  5000,
  10000,
  20000,
  50000,
  100000,
];

export default function AmountCard({
  amount,
  onChange,
  balance,
}: Props) {
  const value = Number(amount || 0);

  // Example fee calculation
  const fee =
    value <= 10000
      ? 10
      : value <= 50000
      ? 25
      : 50;

  const total = value + fee;

  const insufficient =
    total > balance;

  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm border">

      <h2 className="text-xl font-bold">
        Transfer Amount
      </h2>

      <p className="mt-1 text-slate-500">
        Enter how much you want to send.
      </p>

      <div className="mt-6">

        <Label>Amount</Label>

        <Input
          value={amount}
          inputMode="numeric"
          placeholder="0"
          onChange={(e) =>
            onChange(
              e.target.value.replace(
                /\D/g,
                ""
              )
            )
          }
          className="mt-2 h-16 rounded-2xl text-3xl font-bold"
        />

      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">

        {quickAmounts.map((item) => (

          <button
            key={item}
            type="button"
            onClick={() =>
              onChange(item.toString())
            }
            className="rounded-xl border p-3 font-semibold transition hover:bg-blue-50 hover:border-blue-500"
          >
            ₦{item.toLocaleString()}
          </button>

        ))}

      </div>

      <div className="mt-8 rounded-2xl bg-slate-50 p-5">

        <div className="flex items-center gap-2">

          <Wallet className="h-5 w-5 text-blue-600" />

          <span className="text-sm text-slate-500">
            Available Balance
          </span>

        </div>

        <h3 className="mt-2 text-2xl font-bold">
          ₦{balance.toLocaleString()}
        </h3>

      </div>

      <div className="mt-6 space-y-4">

        <div className="flex justify-between">

          <span>Amount</span>

          <span>
            ₦{value.toLocaleString()}
          </span>

        </div>

        <div className="flex justify-between">

          <span>Transfer Fee</span>

          <span>
            ₦{fee.toLocaleString()}
          </span>

        </div>

        <div className="border-t pt-4 flex justify-between text-lg font-bold">

          <span>Total</span>

          <span>
            ₦{total.toLocaleString()}
          </span>

        </div>

      </div>

      {insufficient && (

        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-red-200 bg-red-50 p-4">

          <AlertCircle className="h-6 w-6 text-red-600" />

          <div>

            <p className="font-semibold text-red-700">
              Insufficient Balance
            </p>

            <p className="text-sm text-red-500">
              Your wallet balance is not enough for this transfer.
            </p>

          </div>

        </div>

      )}

    </div>
  );
}