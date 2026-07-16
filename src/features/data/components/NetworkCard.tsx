"use client";

import {
  Smartphone,
  CheckCircle2,
} from "lucide-react";

interface Network {
  id: number;
  name: string;
  code: string;
  logo: string;
  color?: string;
}

interface Props {
  networks: Network[];
  value?: number;
  loading?: boolean;
  onChange: (network: Network) => void;
}

export default function NetworkCard({
  networks,
  value,
  loading = false,
  onChange,
}: Props) {
  if (!loading && networks.length === 0) {
    return null;
  }

  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center gap-3">

        <div className="rounded-2xl bg-green-100 p-3">

          <Smartphone className="h-6 w-6 text-green-600" />

        </div>

        <div>

          <h2 className="text-xl font-bold">
            Select Network
          </h2>

          <p className="text-sm text-slate-500">
            Choose your mobile network provider.
          </p>

        </div>

      </div>

      {loading ? (

        <div className="grid gap-4 sm:grid-cols-2">

          {[1, 2, 3, 4].map((item) => (

            <div
              key={item}
              className="h-28 animate-pulse rounded-2xl bg-slate-100"
            />

          ))}

        </div>

      ) : (

        <div className="grid gap-4 sm:grid-cols-2">

          {networks.map((network) => {

            const active = value === network.id;

            return (

              <button
                key={network.id}
                type="button"
                onClick={() => onChange(network)}
                className={`relative rounded-3xl border p-5 text-left transition-all duration-200

                ${
                  active
                    ? "border-blue-600 bg-blue-50 shadow-md"
                    : "border-slate-200 hover:border-blue-300 hover:bg-slate-50"
                }`}
              >

                {active && (
                  <CheckCircle2 className="absolute right-4 top-4 h-6 w-6 text-blue-600" />
                )}

                <div className="flex items-center gap-4">

                  {network.logo ? (
                    <img
                      src={network.logo}
                      alt={network.name}
                      className="h-14 w-14 rounded-xl object-contain"
                    />
                  ) : (
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100">

                      <Smartphone className="h-7 w-7 text-slate-500" />

                    </div>
                  )}

                  <div>

                    <h3 className="text-lg font-bold">
                      {network.name}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {network.code}
                    </p>

                  </div>

                </div>

              </button>

            );
          })}

        </div>

      )}

    </div>
  );
}