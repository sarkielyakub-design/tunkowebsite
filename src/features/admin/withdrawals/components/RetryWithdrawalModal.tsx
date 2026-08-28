"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Withdrawal } from "../api/types";

interface RetryWithdrawalModalProps {
  open: boolean;
  withdrawal?: Withdrawal | null;
  loading?: boolean;
  onClose: () => void;
  onSubmit: (payload: {
    provider?: string;
    note?: string;
  }) => void;
}

export default function RetryWithdrawalModal({
  open,
  withdrawal,
  loading,
  onClose,
  onSubmit,
}: RetryWithdrawalModalProps) {
  const [provider, setProvider] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    if (open) {
      setProvider(withdrawal?.provider ?? "");
      setNote("");
    }
  }, [open, withdrawal]);

  if (!open || !withdrawal) return null;

  const handleSubmit = () => {
    onSubmit({
      provider: provider || undefined,
      note: note || undefined,
    });
  };

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/40"
        onClick={onClose}
      />

      <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white shadow-xl">

        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-lg font-semibold">
            Retry Withdrawal
          </h2>

          <button onClick={onClose}>
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4 p-6">

          <div>
            <label className="mb-1 block text-sm font-medium">
              Provider
            </label>

            <input
              type="text"
              className="w-full rounded-lg border px-3 py-2"
              placeholder="Flutterwave"
              value={provider}
              onChange={(e) => setProvider(e.target.value)}
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              Admin Note
            </label>

            <textarea
              rows={4}
              className="w-full rounded-lg border px-3 py-2"
              placeholder="Optional retry note..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>

        </div>

        <div className="flex justify-end gap-3 border-t px-6 py-4">

          <button
            onClick={onClose}
            className="rounded-lg border px-4 py-2"
          >
            Close
          </button>

          <button
            disabled={loading}
            onClick={handleSubmit}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
          >
            {loading ? "Retrying..." : "Retry Withdrawal"}
          </button>

        </div>

      </div>
    </>
  );
}