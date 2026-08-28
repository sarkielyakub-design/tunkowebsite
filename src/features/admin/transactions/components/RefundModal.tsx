"use client";

import { useEffect, useState } from "react";
import { X, Loader2 } from "lucide-react";

import type { Transaction } from "../types/transaction";

interface RefundModalProps {
  open: boolean;
  transaction: Transaction | null;
  loading?: boolean;
  onClose: () => void;
  onConfirm: (
    amount: number,
    reason: string
  ) => void;
}

export default function RefundModal({
  open,
  transaction,
  loading = false,
  onClose,
  onConfirm,
}: RefundModalProps) {
  const [amount, setAmount] = useState(0);

  const [reason, setReason] = useState("");

  useEffect(() => {
    if (transaction) {
      setAmount(transaction.amount);
      setReason("");
    }
  }, [transaction]);

  if (!open || !transaction) {
    return null;
  }

  const handleSubmit = () => {
    onConfirm(amount, reason);
  };

  const formatCurrency = (
    value: number,
    currency = transaction.currency
  ) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency,
    }).format(value);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl bg-background shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-4">

          <div>
            <h2 className="text-lg font-semibold">
              Refund Transaction
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              {transaction.reference}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border p-2 hover:bg-muted"
          >
            <X className="h-5 w-5" />
          </button>

        </div>

                <div className="space-y-5 p-6">

          <div>
            <label className="mb-2 block text-sm font-medium">
              Refund Amount
            </label>

            <input
              type="number"
              min={0}
              max={transaction.amount}
              value={amount}
              onChange={(e) =>
                setAmount(Number(e.target.value))
              }
              className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2"
            />

            <p className="mt-2 text-sm text-muted-foreground">
              Maximum refundable amount:{" "}
              <strong>
                {formatCurrency(transaction.amount)}
              </strong>
            </p>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Refund Reason
            </label>

            <textarea
              rows={4}
              value={reason}
              onChange={(e) =>
                setReason(e.target.value)
              }
              placeholder="Enter refund reason..."
              className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2"
            />
          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 border-t px-6 py-4">

          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="rounded-lg border px-5 py-2 transition hover:bg-muted disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={
              loading ||
              amount <= 0 ||
              amount > transaction.amount ||
              reason.trim().length === 0
            }
            className="inline-flex items-center rounded-lg bg-red-600 px-5 py-2 text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "Confirm Refund"
            )}
          </button>

        </div>

      </div>
    </>
  );
}