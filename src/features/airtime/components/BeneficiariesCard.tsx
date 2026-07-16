"use client";

import {
  User,
  Phone,
  ChevronRight,
} from "lucide-react";

interface Beneficiary {
  id: number;
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

        <h2 className="text-2xl font-bold">
          Recent Beneficiaries
        </h2>

        <p className="mt-1 text-slate-500">
          Quickly purchase airtime for people you've recharged before.
        </p>

      </div>

      <div className="space-y-4">

        {beneficiaries.map((beneficiary) => (

          <button
            key={beneficiary.id}
            type="button"
            onClick={() => onSelect(beneficiary)}
            className="flex w-full items-center justify-between rounded-2xl border p-4 transition hover:border-blue-300 hover:bg-slate-50"
          >

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">

                <User className="h-6 w-6 text-blue-600" />

              </div>

              <div className="text-left">

                <h3 className="font-semibold">
                  {beneficiary.phone}
                </h3>

                <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">

                  <Phone className="h-4 w-4" />

                  {beneficiary.network}

                </div>

              </div>

            </div>

            <ChevronRight className="h-5 w-5 text-slate-400" />

          </button>

        ))}

      </div>

    </div>
  );
}