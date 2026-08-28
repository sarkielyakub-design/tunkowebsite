"use client";

import Link from "next/link";

import {
  CheckCircle2,
  Receipt,
  ArrowRight,
  Wifi,
  Phone,
  Smartphone,
  CalendarDays,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface Props {
  reference: string;
  phone: string;
  network: string;
  bundle: string;
  validity: string;
  amount: number;
  currency?: string;
}

export default function PurchaseSuccess({
  reference,
  phone,
  network,
  bundle,
  validity,
  amount,
  currency = "₦",
}: Props) {
  return (
    <div className="mx-auto max-w-2xl">

      <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

        {/* Success Header */}

        <div className="bg-gradient-to-r from-green-600 to-emerald-500 px-8 py-12 text-center text-white">

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white">

            <CheckCircle2 className="h-14 w-14 text-green-600" />

          </div>

          <h1 className="mt-6 text-3xl font-bold">

            Purchase Successful

          </h1>

          <p className="mt-3 text-green-100">

            Your data bundle has been delivered successfully.

          </p>

        </div>

        {/* Details */}

        <div className="space-y-5 p-8">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <Phone className="h-5 w-5 text-blue-600" />

              <span>Phone Number</span>

            </div>

            <span className="font-semibold">

              {phone}

            </span>

          </div>

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <Smartphone className="h-5 w-5 text-green-600" />

              <span>Network</span>

            </div>

            <span className="font-semibold">

              {network}

            </span>

          </div>

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <Wifi className="h-5 w-5 text-blue-600" />

              <span>Bundle</span>

            </div>

            <span className="font-semibold">

              {bundle}

            </span>

          </div>

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <CalendarDays className="h-5 w-5 text-orange-600" />

              <span>Validity</span>

            </div>

            <span className="font-semibold">

              {validity}

            </span>

          </div>

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <Receipt className="h-5 w-5 text-purple-600" />

              <span>Reference</span>

            </div>

            <span className="font-semibold">

              {reference}

            </span>

          </div>

          <div className="border-t pt-5">

            <div className="flex items-center justify-between text-2xl font-bold">

              <span>Total Paid</span>

              <span>

                {currency}
                {amount.toLocaleString()}

              </span>

            </div>

          </div>

        </div>

        {/* Buttons */}

        <div className="space-y-4 px-8 pb-8">

          <Link
            href={`/data/receipt/${reference}`}
            className="block"
          >
            <Button className="h-14 w-full rounded-2xl">

              View Receipt

              <Receipt className="ml-2 h-5 w-5" />

            </Button>
          </Link>

          <Link
            href="/data"
            className="block"
          >
            <Button
              variant="outline"
              className="h-14 w-full rounded-2xl"
            >
              Buy Another Bundle

              <ArrowRight className="ml-2 h-5 w-5" />

            </Button>
          </Link>

          <Link
            href="/dashboard"
            className="block"
          >
            <Button
              variant="ghost"
              className="h-14 w-full rounded-2xl"
            >
              Back to Dashboard
            </Button>
          </Link>

        </div>

      </div>

    </div>
  );
}