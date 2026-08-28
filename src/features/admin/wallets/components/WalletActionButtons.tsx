"use client";

import {
  Plus,
  Minus,
  Lock,
  Unlock,
  FileText,
} from "lucide-react";

interface Props {
  wallet: any;

  onCredit?: () => void;
  onDebit?: () => void;
  onFreeze?: () => void;
  onUnfreeze?: () => void;
  onStatement?: () => void;
}

export default function WalletActionButtons({
  wallet,
  onCredit = () => {},
  onDebit = () => {},
  onFreeze = () => {},
  onUnfreeze = () => {},
  onStatement = () => {},
}: Props) {
  const frozen =
    wallet.status === "frozen" ||
    wallet.is_active === false;

  return (
    <div className="rounded-2xl border bg-white p-6">

      <div className="mb-5">

        <h2 className="text-lg font-semibold">
          Wallet Actions
        </h2>

        <p className="text-sm text-slate-500">
          Perform administrative wallet operations.
        </p>

      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">

        <button
          onClick={onCredit}
          className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-medium text-white transition hover:bg-green-700"
        >
          <Plus size={18} />
          Credit
        </button>

        <button
          onClick={onDebit}
          className="flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-5 py-3 font-medium text-white transition hover:bg-orange-700"
        >
          <Minus size={18} />
          Debit
        </button>

        {!frozen ? (
          <button
            onClick={onFreeze}
            className="flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-medium text-white transition hover:bg-red-700"
          >
            <Lock size={18} />
            Freeze
          </button>
        ) : (
          <button
            onClick={onUnfreeze}
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            <Unlock size={18} />
            Unfreeze
          </button>
        )}

        <button
          onClick={onStatement}
          className="flex items-center justify-center gap-2 rounded-xl border px-5 py-3 font-medium transition hover:bg-slate-100"
        >
          <FileText size={18} />
          Statement
        </button>

        <div className="flex items-center justify-center rounded-xl border bg-slate-50 px-5 py-3">
          <span className="text-sm text-slate-500">
            Currency:
          </span>

          <span className="ml-2 font-semibold">
            {wallet.currency}
          </span>
        </div>

      </div>

    </div>
  );
}