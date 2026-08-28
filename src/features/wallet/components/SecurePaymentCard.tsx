"use client";

import {
  ShieldCheck,
  Lock,
} from "lucide-react";

export default function SecurePaymentCard() {
  return (
    <div className="rounded-3xl border border-green-200 bg-green-50 p-5">

      <div className="flex gap-4">

        <div className="rounded-full bg-green-100 p-3">

          <ShieldCheck className="h-7 w-7 text-green-600" />

        </div>

        <div>

          <h3 className="font-bold text-green-700">
            Secure Payment
          </h3>

          <p className="mt-1 text-sm text-green-600">
            All payments are protected using SSL encryption.
          </p>

          <div className="mt-3 flex items-center gap-2 text-sm text-green-700">

            <Lock className="h-4 w-4" />

            PCI DSS Compliant

          </div>

        </div>

      </div>

    </div>
  );
}