"use client";

import {
  Smartphone,
  Phone,
  Globe2,
  CreditCard,
  ArrowRight,
  Receipt,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface Country {
  name: string;
}

interface Network {
  name: string;
}

interface Quote {
  amount: number;
  fee: number;
  total: number;
  currency: string;
}

interface Props {
  country: Country | null;
  network: Network | null;
  phone: string;
  quote: Quote | null;
  onContinue: () => void;
}

export default function PaymentSummary({
  country,
  network,
  phone,
  quote,
  onContinue,
}: Props) {
  if (
    !country ||
    !network ||
    !phone ||
    !quote
  ) {
    return null;
  }

  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">

      <h2 className="text-2xl font-bold">
        Purchase Summary
      </h2>

      <p className="mt-2 text-slate-500">
        Review your airtime purchase before continuing.
      </p>

      {/* Purchase Details */}

      <div className="mt-8 space-y-4">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <Globe2 className="h-5 w-5 text-blue-600" />

            <span>Country</span>

          </div>

          <span className="font-semibold">
            {country.name}
          </span>

        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <Smartphone className="h-5 w-5 text-blue-600" />

            <span>Network</span>

          </div>

          <span className="font-semibold">
            {network.name}
          </span>

        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <Phone className="h-5 w-5 text-blue-600" />

            <span>Phone Number</span>

          </div>

          <span className="font-semibold">
            {phone}
          </span>

        </div>

      </div>

      {/* Payment */}

      <div className="mt-8 rounded-2xl bg-slate-50 p-5 space-y-4">

        <div className="flex justify-between">

          <span>Airtime Amount</span>

          <span className="font-semibold">
            ₦{quote.amount.toLocaleString()}
          </span>

        </div>

        <div className="flex justify-between">

          <span>Service Fee</span>

          <span className="font-semibold">
            ₦{quote.fee.toLocaleString()}
          </span>

        </div>

        <div className="border-t pt-4 flex justify-between text-lg font-bold">

          <span>Total</span>

          <span>
            ₦{quote.total.toLocaleString()}
          </span>

        </div>

      </div>

      {/* Information */}

      <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">

        <div className="flex gap-3">

          <Receipt className="mt-1 h-6 w-6 text-blue-600" />

          <div>

            <h4 className="font-semibold text-blue-700">
              Instant Delivery
            </h4>

            <p className="mt-1 text-sm text-blue-600">
              Airtime will be delivered immediately after payment is confirmed.
            </p>

          </div>

        </div>

      </div>

      <Button
        onClick={onContinue}
        className="mt-8 h-14 w-full rounded-2xl"
      >
        Continue

        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>

    </div>
  );
}