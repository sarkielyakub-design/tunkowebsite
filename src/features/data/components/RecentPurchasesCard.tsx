"use client";

import {
  RotateCcw,
  Phone,
  Calendar,
  Wifi,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface Purchase {
  id: number;
  phone: string;
  network: string;
  bundle: string;
  amount: number;
  purchased_at: string;
}

interface Props {
  purchases?: Purchase[];
  onRepeat: (purchase: Purchase) => void;
}

export default function RecentPurchasesCard({
  purchases = [],
  onRepeat,
}: Props) {
  if (purchases.length === 0) {
    return null;
  }

  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-xl font-bold">
            Recent Purchases
          </h2>

          <p className="text-sm text-slate-500">
            Quickly buy the same bundle again.
          </p>

        </div>

      </div>

      <div className="space-y-4">

        {purchases.map((purchase) => (

          <div
            key={purchase.id}
            className="rounded-2xl border p-5"
          >

            <div className="flex items-center justify-between">

              <div>

                <h3 className="font-bold">
                  {purchase.network}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {purchase.bundle}
                </p>

              </div>

              <span className="text-lg font-bold text-blue-700">
                ₦{purchase.amount.toLocaleString()}
              </span>

            </div>

            <div className="mt-5 space-y-2">

              <div className="flex items-center gap-2 text-sm text-slate-500">

                <Phone className="h-4 w-4" />

                {purchase.phone}

              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">

                <Wifi className="h-4 w-4" />

                {purchase.bundle}

              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">

                <Calendar className="h-4 w-4" />

                {purchase.purchased_at}

              </div>

            </div>

            <Button
              onClick={() => onRepeat(purchase)}
              className="mt-5 w-full rounded-xl"
            >
              <RotateCcw className="mr-2 h-4 w-4" />

              Buy Again

            </Button>

          </div>

        ))}

      </div>

    </div>
  );
}