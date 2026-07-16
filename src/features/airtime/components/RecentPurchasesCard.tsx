"use client";

import {
  Smartphone,
  Clock3,
} from "lucide-react";

interface Purchase {
  reference: string;
  phone: string;
  network: string;
  amount: number;
  status: string;
  created_at: string;
}

interface Props {
  purchases?: Purchase[] | any;
}

export default function RecentPurchasesCard({
  purchases,
}: Props) {

  /**
   * Support both:
   * purchases = []
   * purchases = { data: [] }
   */

  const items: Purchase[] = Array.isArray(purchases)
    ? purchases
    : Array.isArray(purchases?.data)
    ? purchases.data
    : [];

  if (items.length === 0) {
    return (
      <div className="rounded-3xl border bg-white p-6 shadow-sm">

        <div className="mb-6">

          <h2 className="text-2xl font-bold">
            Recent Purchases
          </h2>

          <p className="mt-1 text-slate-500">
            Your latest airtime transactions.
          </p>

        </div>

        <div className="rounded-2xl border border-dashed p-10 text-center">

          <Smartphone className="mx-auto h-12 w-12 text-slate-300" />

          <p className="mt-4 text-slate-500">
            No airtime purchases yet.
          </p>

        </div>

      </div>
    );
  }

  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">

      <div className="mb-6">

        <h2 className="text-2xl font-bold">
          Recent Purchases
        </h2>

        <p className="mt-1 text-slate-500">
          Your latest airtime transactions.
        </p>

      </div>

      <div className="space-y-4">

        {items.map((purchase) => (

          <div
            key={purchase.reference}
            className="rounded-2xl border p-4 transition hover:bg-slate-50"
          >

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-4">

                <div className="rounded-full bg-green-100 p-3">

                  <Smartphone className="h-6 w-6 text-green-600" />

                </div>

                <div>

                  <h3 className="font-semibold">
                    {purchase.phone}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {purchase.network}
                  </p>

                </div>

              </div>

              <div className="text-right">

                <p className="font-bold">
                  ₦{Number(
                    purchase.amount
                  ).toLocaleString()}
                </p>

                <span
                  className={`text-xs font-medium ${
                    purchase.status === "completed"
                      ? "text-green-600"
                      : purchase.status === "pending"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {purchase.status}
                </span>

              </div>

            </div>

            <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">

              <Clock3 className="h-4 w-4" />

              {new Date(
                purchase.created_at
              ).toLocaleString()}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}