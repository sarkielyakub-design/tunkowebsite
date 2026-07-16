"use client";

import {
  CreditCard,
  Landmark,
  Smartphone,
  CheckCircle2,
} from "lucide-react";

interface PaymentMethodsProps {
  value: string;
  onChange: (method: string) => void;
}

const methods = [
  {
    id: "card",
    title: "Debit / Credit Card",
    subtitle: "Visa • Mastercard • Verve",
    icon: CreditCard,
  },
  {
    id: "bank_transfer",
    title: "Bank Transfer",
    subtitle: "Instant bank payment",
    icon: Landmark,
  },
  {
    id: "mobile_money",
    title: "Mobile Money",
    subtitle: "Available in supported countries",
    icon: Smartphone,
  },
];

export default function PaymentMethods({
  value,
  onChange,
}: PaymentMethodsProps) {
  return (
    <div className="space-y-4">

      <h3 className="text-sm font-semibold text-slate-700">
        Payment Method
      </h3>

      <div className="space-y-3">

        {methods.map((method) => {
          const Icon = method.icon;

          const active = value === method.id;

          return (
            <button
              key={method.id}
              type="button"
              onClick={() => onChange(method.id)}
              className={`w-full rounded-2xl border p-4 transition-all ${
                active
                  ? "border-blue-600 bg-blue-50"
                  : "border-slate-200 hover:border-blue-300 hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div
                    className={`rounded-xl p-3 ${
                      active
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="text-left">

                    <h4 className="font-semibold">
                      {method.title}
                    </h4>

                    <p className="text-sm text-slate-500">
                      {method.subtitle}
                    </p>

                  </div>

                </div>

                {active && (
                  <CheckCircle2 className="h-6 w-6 text-blue-600" />
                )}

              </div>
            </button>
          );
        })}

      </div>

    </div>
  );
}