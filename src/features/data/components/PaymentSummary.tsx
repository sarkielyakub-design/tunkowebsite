"use client";

import {
  Globe2,
  Smartphone,
  Wifi,
  Phone,
  Wallet,
  Receipt,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface Country {
  name: string;
  flag: string;
}

interface Network {
  name: string;
}

interface Bundle {
  name: string;
  volume: string;
  validity: string;
  amount: number;
  currency: string;
}

interface Props {
  country: Country;
  network: Network;
  bundle: Bundle;
  phone: string;
  fee: number;
  walletBalance: number;
  onContinue: () => void;
}

export default function PaymentSummary({
  country,
  network,
  bundle,
  phone,
  fee,
  walletBalance,
  onContinue,
}: Props) {
  const total = bundle.amount + fee;

  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">

      <div className="mb-6">

        <h2 className="text-2xl font-bold">
          Review Purchase
        </h2>

        <p className="mt-1 text-slate-500">
          Please verify the details before purchasing.
        </p>

      </div>

      <div className="space-y-5">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <Globe2 className="h-5 w-5 text-blue-600" />

            <span>Country</span>

          </div>

          <span className="font-semibold">
            {country.flag} {country.name}
          </span>

        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <Smartphone className="h-5 w-5 text-green-600" />

            <span>Network</span>

          </div>

          <span className="font-semibold">
            {network.name}
          </span>

        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <Wifi className="h-5 w-5 text-blue-600" />

            <span>Bundle</span>

          </div>

          <span className="font-semibold">
            {bundle.volume}
          </span>

        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <Receipt className="h-5 w-5 text-purple-600" />

            <span>Validity</span>

          </div>

          <span className="font-semibold">
            {bundle.validity}
          </span>

        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <Phone className="h-5 w-5 text-orange-600" />

            <span>Recipient</span>

          </div>

          <span className="font-semibold">
            {phone}
          </span>

        </div>

      </div>

      <div className="my-8 border-t" />

      <div className="space-y-4">

        <div className="flex justify-between">

          <span className="text-slate-500">
            Bundle Price
          </span>

          <span className="font-semibold">
            {bundle.currency}
            {bundle.amount.toLocaleString()}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-slate-500">
            Service Fee
          </span>

          <span className="font-semibold">
            {bundle.currency}
            {fee.toLocaleString()}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-slate-500">
            Wallet Balance
          </span>

          <span className="font-semibold text-green-600">
            {bundle.currency}
            {walletBalance.toLocaleString()}
          </span>

        </div>

        <div className="border-t pt-4 flex justify-between text-xl font-bold">

          <span>Total</span>

          <span>
            {bundle.currency}
            {total.toLocaleString()}
          </span>

        </div>

      </div>

      <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">

        <div className="flex items-start gap-3">

          <Wallet className="mt-1 h-6 w-6 text-blue-600" />

          <div>

            <h3 className="font-semibold text-blue-700">
              Instant Delivery
            </h3>

            <p className="mt-1 text-sm text-blue-600">
              Your data bundle will be delivered immediately after payment
              is confirmed.
            </p>

          </div>

        </div>

      </div>

      <Button
        onClick={onContinue}
        className="mt-8 h-14 w-full rounded-2xl text-base font-semibold"
      >
        Continue

        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>

    </div>
  );
}