"use client";

import {
  User,
  Phone,
  ChevronRight,
} from "lucide-react";

interface Beneficiary {
  id: number;
  name: string;
  phone: string;
  network: string;
}

interface Props {
  beneficiaries?: Beneficiary[];
  onSelect: (beneficiary: Beneficiary) => void;
}

export default function BeneficiariesCard({
  beneficiaries = [],
  onSelect,
}: Props) {
  if (beneficiaries.length === 0) {
    return null;
  }

  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">

      <div className="mb-6">

        <h2 className="text-xl font-bold">
          Recent Beneficiaries
        </h2>

        <p className="text-sm text-slate-500">
          Tap a saved recipient to purchase data instantly.
        </p>

      </div>

      <div className="space-y-4">

        {beneficiaries.map((beneficiary) => (

          <button
            key={beneficiary.id}
            type="button"
            onClick={() => onSelect(beneficiary)}
            className="flex w-full items-center justify-between rounded-2xl border p-4 transition-all hover:border-blue-300 hover:bg-slate-50"
          >

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">

                <User className="h-7 w-7 text-blue-600" />

              </div>

              <div className="text-left">

                <h3 className="font-semibold">

                  {beneficiary.name}

                </h3>

                <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">

                  <Phone className="h-4 w-4" />

                  {beneficiary.phone}

                </div>

                <span className="mt-2 inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">

                  {beneficiary.network}

                </span>

              </div>

            </div>

            <ChevronRight className="h-5 w-5 text-slate-400" />

          </button>

        ))}

      </div>

    </div>
  );
}