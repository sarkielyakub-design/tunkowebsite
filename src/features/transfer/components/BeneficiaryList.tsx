"use client";

import {
  User,
  ChevronRight,
  Users,
} from "lucide-react";

interface Beneficiary {
  id: number;
  name: string;
  phone: string;
  wallet_number: string;
}

interface Props {
  beneficiaries?: Beneficiary[];
  onSelect: (beneficiary: Beneficiary) => void;
}

export default function BeneficiaryList({
  beneficiaries = [],
  onSelect,
}: Props) {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center gap-3">

        <div className="rounded-2xl bg-blue-100 p-3">

          <Users className="h-6 w-6 text-blue-600" />

        </div>

        <div>

          <h2 className="text-xl font-bold">
            Recent Beneficiaries
          </h2>

          <p className="text-sm text-slate-500">
            Quickly transfer to people you've sent money to before.
          </p>

        </div>

      </div>

      {beneficiaries.length === 0 ? (

        <div className="rounded-2xl border border-dashed py-10 text-center">

          <Users className="mx-auto mb-3 h-10 w-10 text-slate-300" />

          <h3 className="font-semibold text-slate-700">
            No Beneficiaries Yet
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Your recent beneficiaries will appear here after you make your first transfer.
          </p>

        </div>

      ) : (

        <div className="space-y-4">

          {beneficiaries.map((beneficiary) => (

            <button
              key={beneficiary.id}
              type="button"
              onClick={() => onSelect(beneficiary)}
              className="flex w-full items-center justify-between rounded-2xl border p-4 transition-all hover:border-blue-300 hover:bg-blue-50"
            >

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">

                  <User className="h-6 w-6 text-blue-600" />

                </div>

                <div className="text-left">

                  <h3 className="font-semibold">

                    {beneficiary.name}

                  </h3>

                  <p className="text-sm text-slate-500">

                    {beneficiary.wallet_number}

                  </p>

                  <p className="text-xs text-slate-400">

                    {beneficiary.phone}

                  </p>

                </div>

              </div>

              <ChevronRight className="h-5 w-5 text-slate-400" />

            </button>

          ))}

        </div>

      )}

    </div>
  );
}