"use client";

import {
  Smartphone,
  CheckCircle2,
} from "lucide-react";

interface Network {
  id: number;
  name: string;
  logo?: string;
}

interface Props {
  networks: Network[];
  value: Network | null;
  onChange: (network: Network) => void;
}

export default function NetworkCard({
  networks,
  value,
  onChange,
}: Props) {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">

      <h2 className="mb-5 text-xl font-bold">
        Select Network
      </h2>

      <div className="space-y-3">

        {networks.map((network) => {

          const active =
            value?.id === network.id;

          return (

            <button
              key={network.id}
              onClick={() => onChange(network)}
              className={`flex w-full items-center justify-between rounded-2xl border p-4 transition ${
                active
                  ? "border-blue-600 bg-blue-50"
                  : "hover:bg-slate-50"
              }`}
            >

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">

                  {network.logo ? (

                    <img
                      src={network.logo}
                      alt={network.name}
                      className="h-8 w-8 object-contain"
                    />

                  ) : (

                    <Smartphone className="h-6 w-6 text-blue-600" />

                  )}

                </div>

                <div className="text-left">

                  <h3 className="font-semibold">
                    {network.name}
                  </h3>

                </div>

              </div>

              {active && (
                <CheckCircle2 className="h-6 w-6 text-blue-600" />
              )}

            </button>

          );

        })}

      </div>

    </div>
  );
}