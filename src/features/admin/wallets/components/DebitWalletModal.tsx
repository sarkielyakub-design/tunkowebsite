"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { debitWallet } from "../api/wallets";

interface Props {
  walletId: number | string;
  balance: number;
  currency: string;
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function DebitWalletModal({
  walletId,
  balance,
  currency,
  open,
  onClose,
  onSuccess,
}: Props) {
  const [amount, setAmount] = useState("");
  const [narration, setNarration] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!open) return null;

  async function submit() {
    setError("");

    const value = Number(amount);

    if (!value || value <= 0) {
      setError("Enter a valid amount.");
      return;
    }

    if (value > balance) {
      setError("Insufficient wallet balance.");
      return;
    }

    try {
      setLoading(true);

      await debitWallet(walletId, {
        amount: value,
        narration,
      });

      setAmount("");
      setNarration("");

      onSuccess();
      onClose();
    } catch (e: any) {
      setError(
        e?.response?.data?.message ??
          "Unable to debit wallet."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl">

        <div className="flex items-center justify-between border-b p-6">

          <div>
            <h2 className="text-xl font-bold">
              Debit Wallet
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Available Balance:
              <strong className="ml-2">
                {balance.toLocaleString()} {currency}
              </strong>
            </p>
          </div>

          <button onClick={onClose}>
            <X size={22} />
          </button>

        </div>

        <div className="space-y-5 p-6">

          {error && (
            <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <div>

            <label className="mb-2 block font-medium">
              Amount
            </label>

            <input
              type="number"
              value={amount}
              onChange={(e) =>
                setAmount(e.target.value)
              }
              className="w-full rounded-xl border p-3"
            />

          </div>

          <div>

            <label className="mb-2 block font-medium">
              Narration
            </label>

            <textarea
              rows={4}
              value={narration}
              onChange={(e) =>
                setNarration(e.target.value)
              }
              className="w-full rounded-xl border p-3"
            />

          </div>

        </div>

        <div className="flex justify-end gap-3 border-t p-6">

          <button
            onClick={onClose}
            className="rounded-xl border px-5 py-3"
          >
            Cancel
          </button>

          <button
            disabled={loading}
            onClick={submit}
            className="rounded-xl bg-red-600 px-5 py-3 text-white"
          >
            {loading
              ? "Processing..."
              : "Debit Wallet"}
          </button>

        </div>

      </div>

    </div>
  );
}