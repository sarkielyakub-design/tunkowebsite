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

  if (!open) return null;

  async function submit() {
    try {
      setLoading(true);

      await creditWallet(walletId, {
        amount: Number(amount),
        narration,
      });

      setAmount("");
      setNarration("");

      onSuccess();
      onClose();
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-lg rounded-2xl bg-white">

        <div className="flex items-center justify-between border-b p-6">

          <h2 className="text-xl font-bold">
            Credit Wallet
          </h2>

          <button onClick={onClose}>
            <X />
          </button>

        </div>

        <div className="space-y-5 p-6">

          <div>

            <label className="mb-2 block text-sm font-medium">
              Amount
            </label>

            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full rounded-xl border p-3"
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
            className="rounded-xl bg-green-600 px-5 py-3 text-white"
          >
            {loading ? "Processing..." : "Credit Wallet"}
          </button>

        </div>

      </div>

    </div>
  );
}