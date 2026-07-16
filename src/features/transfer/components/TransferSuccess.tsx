"use client";

import Link from "next/link";

import {
  CheckCircle2,
  ArrowRight,
  Download,
  Share2,
  Receipt,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Props {
  recipient: string;
  amount: number;
  fee: number;
  reference: string;
  date: string;
}

export default function TransferSuccess({
  recipient,
  amount,
  fee,
  reference,
  date,
}: Props) {
  const total = amount + fee;

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">

      <Card className="w-full max-w-xl rounded-3xl p-8 shadow-xl">

        <div className="text-center">

          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-green-100">

            <CheckCircle2 className="h-16 w-16 text-green-600" />

          </div>

          <h1 className="mt-6 text-3xl font-bold">
            Transfer Successful
          </h1>

          <p className="mt-2 text-slate-500">
            Your transfer has been completed successfully.
          </p>

        </div>

        <div className="mt-8 rounded-3xl bg-slate-50 p-6">

          <div className="space-y-5">

            <div className="flex justify-between">

              <span className="text-slate-500">
                Recipient
              </span>

              <span className="font-semibold">
                {recipient}
              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-slate-500">
                Amount
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
                Total Debited
              </span>

              <span className="font-bold">
                ₦{total.toLocaleString()}
              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-slate-500">
                Reference
              </span>

              <span className="font-semibold">
                {reference}
              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-slate-500">
                Date
              </span>

              <span className="font-semibold">
                {date}
              </span>

            </div>

          </div>

        </div>

        <div className="mt-8 grid gap-4">

          <Button className="h-12 rounded-xl">

            <Receipt className="mr-2 h-5 w-5" />

            View Receipt

          </Button>

          <Button
            variant="outline"
            className="h-12 rounded-xl"
          >

            <Download className="mr-2 h-5 w-5" />

            Download Receipt

          </Button>

          <Button
            variant="outline"
            className="h-12 rounded-xl"
          >

            <Share2 className="mr-2 h-5 w-5" />

            Share Receipt

          </Button>

          <Link href="/dashboard">

            <Button className="h-12 w-full rounded-xl">

              Back to Dashboard

              <ArrowRight className="ml-2 h-5 w-5" />

            </Button>

          </Link>

        </div>

      </Card>

    </main>
  );
}