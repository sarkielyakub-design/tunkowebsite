"use client";

import { useEffect, useState } from "react";
import { Loader2, X } from "lucide-react";

import type { Transaction } from "../types/transaction";

interface UpdateStatusModalProps {
  open: boolean;
  transaction: Transaction | null;
  loading?: boolean;
  onClose: () => void;
  onConfirm: (
    status: string,
    note: string
  ) => void;
}

const STATUS_OPTIONS = [
  "pending",
  "processing",
  "success",
  "failed",
  "cancelled",
  "refunded",
];

export default function UpdateStatusModal({
  open,
  transaction,
  loading = false,
  onClose,
  onConfirm,
}: UpdateStatusModalProps) {
  const [status, setStatus] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    if (transaction) {
      setStatus(transaction.status);
      setNote("");
    }
  }, [transaction]);

  if (!open || !transaction) {
    return null;
  }

  const handleSubmit = () => {
    onConfirm(status, note.trim());
  };  return (
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
              Update Transaction Status
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
              Status
            </label>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2"
            >
              {STATUS_OPTIONS.map((item) => (
                <option key={item} value={item}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </option>
              ))}
            </select>

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              Admin Note
            </label>

            <textarea
              rows={5}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Enter an optional note..."
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
            className="rounded-lg border px-5 py-2 transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={
              loading ||
              status.trim() === "" ||
              status === transaction.status
            }
            className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Updating...
              </>
            ) : (
              "Update Status"
            )}
          </button>

        </div>

      </div>
    </>
  );
}