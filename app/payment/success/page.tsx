"use client";

import Link from "next/link";
import {
  CheckCircle2,
  Wallet,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function PaymentSuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">

      <Card className="w-full max-w-lg rounded-3xl p-10 text-center shadow-xl">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100">

          <CheckCircle2 className="h-14 w-14 text-green-600" />

        </div>

        <h1 className="mt-6 text-3xl font-bold">
          Payment Successful
        </h1>

        <p className="mt-3 text-slate-500">
          Your wallet has been funded successfully.
        </p>

        <div className="mt-8 rounded-2xl bg-slate-50 p-6">

          <div className="flex justify-between">

            <span>Payment Status</span>

            <span className="font-semibold text-green-600">
              Successful
            </span>

          </div>

          <div className="mt-4 flex justify-between">

            <span>Wallet Updated</span>

            <span className="font-semibold">
              Yes
            </span>

          </div>

          <div className="mt-4 flex justify-between">

            <span>Reference</span>

            <span className="font-semibold">
              TXN123456789
            </span>

          </div>

        </div>

        <Link
          href="/dashboard"
          className="block mt-8"
        >

          <Button className="h-12 w-full rounded-xl">

            <Wallet className="mr-2 h-5 w-5" />

            Back to Dashboard

            <ArrowRight className="ml-2 h-5 w-5" />

          </Button>

        </Link>

      </Card>

    </main>
  );
}