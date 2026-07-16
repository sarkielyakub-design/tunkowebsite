"use client";

import { useState } from "react";
import { AlertTriangle, X } from "lucide-react";
import { freezeWallet } from "../api/wallets";

interface Props {
  walletId: number | string;
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function FreezeWalletModal({
  walletId,
  open,
  onClose,
  onSuccess,
}: Props) {
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  async function submit() {
    try {
      setLoading(true);

      await freezeWallet(walletId, {
        reason,
      });

      onSuccess();
      onClose();
      setReason("");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-lg rounded-2xl bg-white">

        <div className="flex items-center justify-between border-b p-6">

          <div className="flex items-center gap-3">

            <AlertTriangle className="text-red-600" />

            <h2 className="text-xl font-bold">
              Freeze Wallet
            </h2>

          </div>

          <button onClick={onClose}>
            <X />
          </button>

        </div>

        <div className="space-y-5 p-6">

          <div className="rounded-xl bg-yellow-50 p-4 text-sm">

            This customer will not be able to:

            <ul className="mt-3 list-disc pl-5">
              <li>Transfer money</li>
              <li>Withdraw funds</li>
              <li>Purchase airtime</li>
              <li>Purchase data</li>
              <li>Pay bills</li>
              <li>Use the wallet</li>
            </ul>

          </div>

          <div>

            <label className="mb-2 block font-medium">
              Freeze Reason
            </label>

            <textarea
              rows={4}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
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
              ? "Freezing..."
              : "Freeze Wallet"}
          </button>

        </div>

      </div>

    </div>
  );
}