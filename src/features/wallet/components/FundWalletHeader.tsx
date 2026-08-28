"use client";

import { Wallet } from "lucide-react";

export default function FundWalletHeader() {
  return (
    <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-8 text-white">

      <div className="flex items-center gap-4">

        <div className="rounded-2xl bg-white/20 p-4">

          <Wallet className="h-8 w-8" />

        </div>

        <div>

          <h2 className="text-2xl font-bold">
            Fund Wallet
          </h2>

          <p className="mt-1 text-blue-100">
            Add money securely using one of our trusted payment partners.
          </p>

        </div>

      </div>

    </div>
  );
}