"use client";

import Link from "next/link";

import {
  CheckCircle2,
  Receipt,
  Home,
  RotateCcw,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface Props {
  reference: string;
  phone: string;
  network: string;
  amount: number;
}

export default function PurchaseSuccess({
  reference,
  phone,
  network,
  amount,
}: Props) {
  return (
    <div className="mx-auto max-w-lg rounded-3xl bg-white p-8 shadow-lg">

      <div className="text-center">

        <CheckCircle2 className="mx-auto h-24 w-24 text-green-500" />

        <h1 className="mt-6 text-3xl font-bold">
          Purchase Successful
        </h1>

        <p className="mt-3 text-slate-500">
          Your airtime has been delivered successfully.
        </p>

      </div>

      <div className="mt-10 space-y-5 rounded-2xl bg-slate-50 p-6">

        <div className="flex justify-between">

          <span className="text-slate-500">
            Phone
          </span>

          <span className="font-semibold">
            {phone}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-slate-500">
            Network
          </span>

          <span className="font-semibold">
            {network}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-slate-500">
            Amount
          </span>

          <span className="font-bold text-green-600">
            ₦{amount.toLocaleString()}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-slate-500">
            Reference
          </span>

          <span className="font-mono text-sm">
            {reference}
          </span>

        </div>

      </div>

      <div className="mt-8 space-y-4">

        <Link
          href={`/airtime/receipt/${reference}`}
        >
          <Button className="h-14 w-full rounded-2xl">

            <Receipt className="mr-2 h-5 w-5" />

            View Receipt

          </Button>
        </Link>

        <Link href="/airtime">

          <Button
            variant="outline"
            className="h-14 w-full rounded-2xl"
          >

            <RotateCcw className="mr-2 h-5 w-5" />

            Buy Airtime Again

          </Button>

        </Link>

        <Link href="/dashboard">

          <Button
            variant="ghost"
            className="h-14 w-full rounded-2xl"
          >

            <Home className="mr-2 h-5 w-5" />

            Back to Dashboard

          </Button>

        </Link>

      </div>

    </div>
  );
}