"use client";

import {
  CreditCard,
  Globe,
  CheckCircle2,
} from "lucide-react";

interface PaymentGatewayProps {
  value: string;
  onChange: (gateway: string) => void;
}

const gateways = [
  {
    id: "paystack",
    name: "Paystack",
    subtitle: "Cards, Bank Transfer, USSD (Nigeria)",
    icon: CreditCard,
    badge: "Recommended",
  },
  {
    id: "cinetpay",
    name: "CinetPay",
    subtitle:
      "Mobile Money, Cards & Bank Payments (Africa)",
    icon: Globe,
    badge: "Africa",
  },
];

export default function PaymentGateway({
  value,
  onChange,
}: PaymentGatewayProps) {
  return (
    <div className="space-y-4">

      <div>

        <h3 className="text-lg font-bold">
          Payment Gateway
        </h3>

        <p className="text-sm text-slate-500">
          Choose how you want to fund your wallet.
        </p>

      </div>

      <div className="space-y-4">

        {gateways.map((gateway) => {
          const Icon = gateway.icon;
          const active = value === gateway.id;

          return (
            <button
              key={gateway.id}
              type="button"
              onClick={() => onChange(gateway.id)}
              className={`w-full rounded-3xl border p-5 transition-all duration-200 ${
                active
                  ? "border-blue-600 bg-blue-50 shadow-md"
                  : "border-slate-200 hover:border-blue-300 hover:shadow-sm"
              }`}
            >
              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div
                    className={`rounded-2xl p-4 ${
                      active
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  <div className="text-left">

                    <div className="flex items-center gap-2">

                      <h4 className="font-bold">
                        {gateway.name}
                      </h4>

                      <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-700">
                        {gateway.badge}
                      </span>

                    </div>

                    <p className="mt-1 text-sm text-slate-500">
                      {gateway.subtitle}
                    </p>

                  </div>

                </div>

                {active && (
                  <CheckCircle2 className="h-7 w-7 text-blue-600" />
                )}

              </div>
            </button>
          );
        })}

      </div>

    </div>
  );
}