"use client";

import {
  Smartphone,
  Zap,
} from "lucide-react";

export default function AirtimeHeader() {
  return (
    <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-white shadow-lg">

      <div className="flex items-center justify-between p-8">

        <div>

          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">

            <Smartphone className="h-8 w-8" />

          </div>

          <h1 className="text-3xl font-bold">
            Buy Airtime
          </h1>

          <p className="mt-2 text-blue-100">
            Recharge any mobile number instantly.
          </p>

        </div>

        <div className="hidden md:flex h-20 w-20 items-center justify-center rounded-full bg-white/10">

          <Zap className="h-10 w-10" />

        </div>

      </div>

    </div>
  );
}