"use client";

interface Props {
  amount: string;
  gateway: string;
}

export default function PaymentSummary({
  amount,
  gateway,
}: Props) {
  const total = Number(amount || 0);

  return (
    <div className="rounded-3xl border bg-slate-50 p-6">

      <h3 className="mb-5 text-lg font-bold">
        Payment Summary
      </h3>

      <div className="space-y-4">

        <div className="flex justify-between">

          <span className="text-slate-500">
            Amount
          </span>

          <span className="font-semibold">
            ₦{total.toLocaleString()}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-slate-500">
            Gateway
          </span>

          <span className="font-semibold capitalize">
            {gateway}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-slate-500">
            Processing Fee
          </span>

          <span>₦0</span>

        </div>

        <hr />

        <div className="flex justify-between text-lg font-bold">

          <span>Total</span>

          <span className="text-blue-700">
            ₦{total.toLocaleString()}
          </span>

        </div>

      </div>

    </div>
  );
}