"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { creditWallet } from "../api/wallets";

interface Props {
  walletId: number | string;
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function CreditWalletModal({
  walletId,
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

    if (!narration.trim()) {
      setError("Please enter a narration.");
      return;
    }

    try {
      setLoading(true);

      await creditWallet(walletId, {
        amount: value,
        reason: narration.trim(),
      });

      setAmount("");
      setNarration("");

      onSuccess();
      onClose();
    } catch (e: any) {
      setError(
        e?.response?.data?.message ??
          "Unable to credit wallet."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b p-6">
          <h2 className="text-xl font-bold">
            Credit Wallet
          </h2>

          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="rounded-lg p-1 hover:bg-slate-100 disabled:opacity-50"
          >
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
            <label className="mb-2 block text-sm font-medium">
              Amount
            </label>

            <input
              type="number"
              min="0"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full rounded-xl border p-3 outline-none focus:border-blue-500"
              placeholder="Enter amount"
              disabled={loading}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Narration
            </label>

            <textarea
              rows={4}
              value={narration}
              onChange={(e) => setNarration(e.target.value)}
              className="w-full rounded-xl border p-3 outline-none focus:border-blue-500"
              placeholder="Enter credit narration"
              disabled={loading}
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 border-t p-6">
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="rounded-xl border px-5 py-3 disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            type="button"
            disabled={loading}
            onClick={submit}
            className="rounded-xl bg-green-600 px-5 py-3 text-white disabled:opacity-50"
          >
            {loading ? "Processing..." : "Credit Wallet"}
          </button>
        </div>
      </div>
    </div>
  );
}