"use client";

import {
  User,
  Wallet,
  Receipt,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface Recipient {
  full_name: string;
  username: string;
  wallet_number: string;
  is_verified: boolean;
}

interface Props {
  recipient: Recipient;
  amount: number;
  fee: number;
  onContinue: () => void;
}

export default function TransferSummary({
  recipient,
  amount,
  fee,
  onContinue,
}: Props) {
  const total = amount + fee;

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

      {/* Header */}

      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-6 text-white">

        <h2 className="text-2xl font-bold">
          Review Transfer
        </h2>

        <p className="mt-2 text-blue-100">
          Confirm the recipient and transfer details before proceeding.
        </p>

      </div>

      <div className="space-y-8 p-8">

        {/* Recipient */}

        <div className="rounded-3xl border bg-slate-50 p-6">

          <div className="flex items-center gap-4">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">

              <User className="h-8 w-8 text-blue-600" />

            </div>

            <div className="flex-1">

              <div className="flex items-center gap-2">

                <h3 className="text-lg font-bold">

                  {recipient.full_name}

                </h3>

                {recipient.is_verified && (

                  <ShieldCheck className="h-5 w-5 text-green-600" />

                )}

              </div>

              <p className="text-sm text-slate-500">

                @{recipient.username}

              </p>

            </div>

          </div>

          <div className="mt-6 flex items-center gap-3 rounded-2xl bg-white p-4">

            <Wallet className="h-5 w-5 text-blue-600" />

            <span className="font-medium">

              {recipient.wallet_number}

            </span>

          </div>

        </div>

        {/* Summary */}

        <div className="rounded-3xl border p-6">

          <div className="mb-6 flex items-center gap-3">

            <Receipt className="h-6 w-6 text-blue-600" />

            <h3 className="text-lg font-bold">

              Transfer Summary

            </h3>

          </div>

          <div className="space-y-5">

            <div className="flex justify-between">

              <span className="text-slate-500">

                Transfer Amount

              </span>

              <span className="font-semibold">

                ₦{amount.toLocaleString()}

              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-slate-500">

                Transfer Fee

              </span>

              <span className="font-semibold">

                ₦{fee.toLocaleString()}

              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-slate-500">

                Recipient Receives

              </span>

              <span className="font-semibold text-green-600">

                ₦{amount.toLocaleString()}

              </span>

            </div>

            <div className="border-t pt-5">

              <div className="flex items-center justify-between rounded-2xl bg-blue-50 p-4">

                <span className="text-lg font-bold">

                  Total Debit

                </span>

                <span className="text-2xl font-bold text-blue-700">

                  ₦{total.toLocaleString()}

                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Security */}

        <div className="rounded-3xl border border-green-200 bg-green-50 p-5">

          <div className="flex items-start gap-3">

            <CheckCircle2 className="mt-1 h-6 w-6 text-green-600" />

            <div>

              <h4 className="font-semibold text-green-700">

                Secure Transaction

              </h4>

              <p className="mt-2 text-sm leading-6 text-green-700">

                Your transfer is protected with end-to-end encryption and your
                transaction PIN. Funds will be delivered instantly after
                successful confirmation.

              </p>

            </div>

          </div>

        </div>

        {/* Continue */}

        <Button
          onClick={onContinue}
          className="h-14 w-full rounded-2xl text-base font-semibold"
        >

          Confirm & Continue

          <ArrowRight className="ml-2 h-5 w-5" />

        </Button>

      </div>

    </div>
  );
}