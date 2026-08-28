"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AmountInputProps {
  value: string;
  onChange: (value: string) => void;
}

const quickAmounts = [
  1000,
  2000,
  5000,
  10000,
  20000,
  50000,
];

export default function AmountInput({
  value,
  onChange,
}: AmountInputProps) {
  const formattedAmount =
    value === ""
      ? ""
      : Number(value).toLocaleString();

  return (
    <div className="space-y-5">

      <div className="space-y-2">

        <Label className="text-sm font-semibold">
          Amount
        </Label>

        <div className="relative">

          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold text-slate-500">
            ₦
          </span>

          <Input
            inputMode="numeric"
            placeholder="0"
            value={formattedAmount}
            onChange={(e) => {
              const raw = e.target.value.replace(
                /,/g,
                ""
              );

              if (/^\d*$/.test(raw)) {
                onChange(raw);
              }
            }}
            className="h-14 rounded-2xl pl-10 text-2xl font-bold"
          />

        </div>

      </div>

      <div>

        <p className="mb-3 text-sm font-medium text-slate-600">
          Quick Amount
        </p>

        <div className="grid grid-cols-3 gap-3">

          {quickAmounts.map((amount) => (
            <button
              key={amount}
              type="button"
              onClick={() =>
                onChange(amount.toString())
              }
              className={`rounded-xl border p-3 text-sm font-semibold transition ${
                value === amount.toString()
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-slate-200 hover:border-blue-500 hover:bg-blue-50"
              }`}
            >
              ₦{amount.toLocaleString()}
            </button>
          ))}

        </div>

      </div>

      {Number(value) > 0 && (
        <div className="rounded-xl bg-slate-50 p-4">

          <div className="flex items-center justify-between">

            <span className="text-slate-500">
              Amount
            </span>

            <span className="font-bold">
              ₦{Number(value).toLocaleString()}
            </span>

          </div>

        </div>
      )}

    </div>
  );
}