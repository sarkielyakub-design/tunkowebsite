"use client";

import { ArrowRightLeft, TrendingUp } from "lucide-react";

export default function ExchangeHero() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
        <ArrowRightLeft className="h-4 w-4" />
        Live Exchange Rates
      </div>

      <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
        Get the Best
        <span className="block text-blue-600">
          Exchange Rates
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
        Convert currencies with competitive exchange rates updated
        throughout the day. No hidden charges, full transparency,
        and fast international money transfers.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 shadow-sm">
          <TrendingUp className="h-5 w-5 text-green-600" />
          <div className="text-left">
            <p className="text-sm text-gray-500">
              Rates Updated
            </p>
            <p className="font-semibold text-gray-900">
              Every Minute
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 shadow-sm">
          <ArrowRightLeft className="h-5 w-5 text-blue-600" />
          <div className="text-left">
            <p className="text-sm text-gray-500">
              Supported
            </p>
            <p className="font-semibold text-gray-900">
              120+ Currencies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}