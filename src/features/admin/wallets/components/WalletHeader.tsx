"use client";

import {
  Wallet,
  BadgeDollarSign,
  Calendar,
  ShieldCheck,
} from "lucide-react";

interface Props {
  wallet: any;
}

export default function WalletHeader({
  wallet,
}: Props) {
  const balance = Number(wallet.balance ?? 0);

  const active =
    wallet.is_active ||
    wallet.status === "active";

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div className="space-y-3">

          <div className="flex items-center gap-3">

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">

              <Wallet
                size={28}
                className="text-blue-600"
              />

            </div>

            <div>

              <h1 className="text-2xl font-bold">

                {wallet.wallet_number}

              </h1>

              <p className="text-sm text-slate-500">

                Wallet ID #{wallet.id}

              </p>

            </div>

          </div>

          <div className="flex flex-wrap gap-3">

            <span
              className={`rounded-full px-4 py-1 text-sm font-medium ${
                active
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {active ? "Active" : "Frozen"}
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-1 text-sm">

              {wallet.currency}

            </span>

          </div>

        </div>

        <div className="grid gap-4 sm:grid-cols-3">

          <div className="rounded-xl border bg-slate-50 p-4">

            <div className="flex items-center gap-2 text-slate-500">

              <BadgeDollarSign size={18} />

              Balance

            </div>

            <h2 className="mt-2 text-2xl font-bold">

              {wallet.currency}{" "}
              {balance.toLocaleString()}

            </h2>

          </div>

          <div className="rounded-xl border bg-slate-50 p-4">

            <div className="flex items-center gap-2 text-slate-500">

              <ShieldCheck size={18} />

              Status

            </div>

            <h2 className="mt-2 text-lg font-semibold">

              {active ? "Operational" : "Frozen"}

            </h2>

          </div>

          <div className="rounded-xl border bg-slate-50 p-4">

            <div className="flex items-center gap-2 text-slate-500">

              <Calendar size={18} />

              Created

            </div>

            <h2 className="mt-2 text-sm font-medium">

              {wallet.created_at
                ? new Date(
                    wallet.created_at
                  ).toLocaleDateString()
                : "-"}

            </h2>

          </div>

        </div>

      </div>

    </div>
  );
}