"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Withdrawal } from "../api/types";

interface ApproveWithdrawalModalProps {
  open: boolean;
  withdrawal?: Withdrawal | null;
  loading?: boolean;
  onClose: () => void;
  onSubmit: (payload: {
    provider: string;
    provider_reference?: string;
    provider_status: string;
    provider_response?: string;
    debit_wallet: boolean;
    note?: string;
  }) => void;
}

export default function ApproveWithdrawalModal({
  open,
  withdrawal,
  loading,
  onClose,
  onSubmit,
}: ApproveWithdrawalModalProps) {
  const [provider, setProvider] = useState("");
  const [providerReference, setProviderReference] = useState("");
  const [providerStatus, setProviderStatus] = useState("processing");
  const [providerResponse, setProviderResponse] = useState("");
  const [debitWallet, setDebitWallet] = useState(true);
  const [note, setNote] = useState("");

  useEffect(() => {
    if (open) {
      setProvider("");
      setProviderReference("");
      setProviderStatus("processing");
      setProviderResponse("");
      setDebitWallet(true);
      setNote("");
    }
  }, [open]);

  if (!open || !withdrawal) return null;

  const handleSubmit = () => {
    onSubmit({
      provider,
      provider_reference: providerReference || undefined,
      provider_status: providerStatus,
      provider_response: providerResponse || undefined,
      debit_wallet: debitWallet,
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
            Approve Withdrawal
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
              className="w-full rounded-lg border px-3 py-2"
              value={provider}
              onChange={(e) => setProvider(e.target.value)}
              placeholder="Flutterwave"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              Provider Reference
            </label>

            <input
              className="w-full rounded-lg border px-3 py-2"
              value={providerReference}
              onChange={(e) =>
                setProviderReference(e.target.value)
              }
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              Provider Status
            </label>

            <select
              className="w-full rounded-lg border px-3 py-2"
              value={providerStatus}
              onChange={(e) =>
                setProviderStatus(e.target.value)
              }
            >
              <option value="processing">
                Processing
              </option>
              <option value="success">
                Success
              </option>
              <option value="pending">
                Pending
              </option>
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              Provider Response
            </label>

            <textarea
              rows={3}
              className="w-full rounded-lg border px-3 py-2"
              value={providerResponse}
              onChange={(e) =>
                setProviderResponse(e.target.value)
              }
            />
          </div>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={debitWallet}
              onChange={(e) =>
                setDebitWallet(e.target.checked)
              }
            />
            Debit Wallet
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
            Cancel
          </button>

          <button
            disabled={loading}
            onClick={handleSubmit}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
          >
            {loading ? "Approving..." : "Approve Withdrawal"}
          </button>

        </div>
      </div>
    </>
  );
}