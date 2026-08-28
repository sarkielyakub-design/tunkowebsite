"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Withdrawal } from "../api/types";

interface CancelWithdrawalModalProps {
  open: boolean;
  withdrawal?: Withdrawal | null;
  loading?: boolean;
  onClose: () => void;
  onSubmit: (payload: {
    reason: string;
    cancel_code: string;
    refund_wallet: boolean;
    note?: string;
  }) => void;
}

export default function CancelWithdrawalModal({
  open,
  withdrawal,
  loading,
  onClose,
  onSubmit,
}: CancelWithdrawalModalProps) {
  const [reason, setReason] = useState("");
  const [cancelCode, setCancelCode] = useState("");
  const [refundWallet, setRefundWallet] = useState(true);
  const [note, setNote] = useState("");

  useEffect(() => {
    if (open) {
      setReason("");
      setCancelCode("");
      setRefundWallet(true);
      setNote("");
    }
  }, [open]);

  if (!open || !withdrawal) return null;

  const handleSubmit = () => {
    onSubmit({
      reason,
      cancel_code: cancelCode,
      refund_wallet: refundWallet,
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
            Cancel Withdrawal
          </h2>

          <button onClick={onClose}>
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4 p-6">

          <div>
            <label className="mb-1 block text-sm font-medium">
              Cancellation Reason
            </label>

            <textarea
              rows={3}
              className="w-full rounded-lg border px-3 py-2"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              Cancel Code
            </label>

            <input
              className="w-full rounded-lg border px-3 py-2"
              value={cancelCode}
              onChange={(e) => setCancelCode(e.target.value)}
              placeholder="CUSTOMER_REQUEST"
            />
          </div>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={refundWallet}
              onChange={(e) =>
                setRefundWallet(e.target.checked)
              }
            />
            Refund Wallet
          </label>

          <div>
            <label className="mb-1 block text-sm font-medium">
              Admin Note
            </label>

            <textarea
              rows={3}
              className="w-full rounded-lg border px-3 py-2"
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
            className="rounded-lg bg-yellow-600 px-4 py-2 text-white disabled:opacity-50"
          >
            {loading ? "Cancelling..." : "Cancel Withdrawal"}
          </button>

        </div>

      </div>
    </>
  );
}