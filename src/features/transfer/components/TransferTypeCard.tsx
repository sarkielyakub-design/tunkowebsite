"use client";

import {
  Wallet,
  Landmark,
  Smartphone,
  Globe2,
  CheckCircle2,
} from "lucide-react";

interface Props {
  value: string;
  onChange?: (type: string) => void;
}

const transferTypes = [
  {
    id: "wallet",
    title: "Tunko Wallet",
    subtitle: "Instant transfer to another Tunko user",
    icon: Wallet,
    badge: "Instant",
  },
  {
    id: "bank",
    title: "Bank Transfer",
    subtitle: "Transfer to any bank account",
    icon: Landmark,
    badge: "Popular",
  },
  {
    id: "mobile_money",
    title: "Mobile Money",
    subtitle: "MTN, Airtel, Orange, Moov & Wave",
    icon: Smartphone,
    badge: "Africa",
  },
  {
    id: "international",
    title: "International",
    subtitle: "Send money worldwide",
    icon: Globe2,
    badge: "Global",
  },
];

export default function TransferTypeCard({
  value = "wallet",
  onChange = () => {},
}: Props) {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-lg border">

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-slate-900">
          Transfer Type
        </h2>

        <p className="mt-2 text-slate-500">
          Select how you want to transfer your money.
        </p>

      </div>

      <div className="grid gap-5">

        {transferTypes.map((item) => {

          const Icon = item.icon;

          const active = value === item.id;

          return (

            <button
              key={item.id}
              type="button"
              onClick={() => onChange(item.id)}
              className={`group w-full rounded-3xl border p-5 transition-all duration-300 text-left

              ${
                active
                  ? "border-blue-600 bg-blue-50 shadow-lg"
                  : "border-slate-200 hover:border-blue-300 hover:shadow-md"
              }`}
            >

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-5">

                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl transition

                    ${
                      active
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-600"
                    }`}
                  >

                    <Icon className="h-8 w-8" />

                  </div>

                  <div>

                    <div className="flex items-center gap-3">

                      <h3 className="text-lg font-bold">

                        {item.title}

                      </h3>

                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">

                        {item.badge}

                      </span>

                    </div>

                    <p className="mt-2 text-sm text-slate-500">

                      {item.subtitle}

                    </p>

                  </div>

                </div>

                {active && (

                  <CheckCircle2 className="h-8 w-8 text-blue-600" />

                )}

              </div>

            </button>

          );

        })}

      </div>

    </section>
  );
}