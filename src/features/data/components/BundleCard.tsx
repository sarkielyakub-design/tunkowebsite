"use client";

import {
  Wifi,
  CheckCircle2,
  Clock3,
} from "lucide-react";

interface Bundle {
  id: number;
  name: string;
  volume: string;
  validity: string;
  amount: number;
  currency: string;
}

interface Props {
  bundles: Bundle[];
  value?: number;
  loading?: boolean;
  onChange: (bundle: Bundle) => void;
}

export default function BundleCard({
  bundles,
  value,
  loading = false,
  onChange,
}: Props) {
  if (!loading && bundles.length === 0) {
    return null;
  }

  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center gap-3">

        <div className="rounded-2xl bg-blue-100 p-3">

          <Wifi className="h-6 w-6 text-blue-600" />

        </div>

        <div>

          <h2 className="text-xl font-bold">
            Select Data Plan
          </h2>

          <p className="text-sm text-slate-500">
            Choose the bundle you want to purchase.
          </p>

        </div>

      </div>

      {loading ? (

        <div className="grid gap-4 md:grid-cols-2">

          {[1, 2, 3, 4].map((item) => (

            <div
              key={item}
              className="h-36 animate-pulse rounded-3xl bg-slate-100"
            />

          ))}

        </div>

      ) : (

        <div className="grid gap-4 md:grid-cols-2">

          {bundles.map((bundle) => {

            const active = value === bundle.id;

            return (

              <button
                key={bundle.id}
                type="button"
                onClick={() => onChange(bundle)}
                className={`relative rounded-3xl border p-6 text-left transition-all duration-200

                ${
                  active
                    ? "border-blue-600 bg-blue-50 shadow-lg"
                    : "border-slate-200 hover:border-blue-300 hover:bg-slate-50"
                }`}
              >

                {active && (
                  <CheckCircle2 className="absolute right-5 top-5 h-7 w-7 text-blue-600" />
                )}

                <h3 className="text-2xl font-bold">

                  {bundle.volume}

                </h3>

                <p className="mt-1 text-slate-500">

                  {bundle.name}

                </p>

                <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">

                  <Clock3 className="h-4 w-4" />

                  {bundle.validity}

                </div>

                <div className="mt-6 text-3xl font-bold text-blue-700">

                  {bundle.currency}
                  {bundle.amount.toLocaleString()}

                </div>

              </button>

            );

          })}

        </div>

      )}

    </div>
  );
}