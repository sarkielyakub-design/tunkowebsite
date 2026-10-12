"use client";

import { useEffect, useState } from "react";
import { X, ShieldCheck, AlertCircle } from "lucide-react";

import { Kyc } from "../types/kyc.types";
import { useApproveKyc } from "../hooks/useApproveKyc";

interface Props {
  open: boolean;
  kyc: Kyc | null;
  onClose: () => void;
}

const PROVIDERS = [
  { value: "manual", label: "Manual" },
  { value: "sumsub", label: "Sumsub" },
  { value: "veriff", label: "Veriff" },
  { value: "smile_identity", label: "Smile Identity" },
  { value: "onfido", label: "Onfido" },
];

export default function ApproveKycModal({
  open,
  kyc,
  onClose,
}: Props) {
  const approveMutation = useApproveKyc();

  const [level, setLevel] = useState(1);
  const [provider, setProvider] = useState("manual");
  const [reference, setReference] = useState("");
  const [note, setNote] = useState("");
  const [notifyUser, setNotifyUser] = useState(true);
  const [updateLimits, setUpdateLimits] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const isPending = approveMutation.isPending;

  useEffect(() => {
    if (!kyc) return;

    setLevel(kyc.level || 1);
    setProvider(kyc.verification_provider || "manual");
    setReference(kyc.provider_reference || "");
    setNote(kyc.admin_note || "");
    setNotifyUser(true);
    setUpdateLimits(true);
    setErrorMessage("");
  }, [kyc]);

  const handleClose = () => {
    if (isPending) return;

    setErrorMessage("");
    onClose();
  };

  const submit = async () => {
    if (!kyc || isPending) return;

    setErrorMessage("");

    if (![1, 2, 3, 4].includes(level)) {
      setErrorMessage("Please select a valid KYC level.");
      return;
    }

    if (!PROVIDERS.some((item) => item.value === provider)) {
      setErrorMessage("Please select a valid verification provider.");
      return;
    }

    try {
      await approveMutation.mutateAsync({
        id: kyc.id,
        payload: {
          kyc_level: level,
          verification_provider: provider,
          provider_reference: reference.trim(),
          note: note.trim(),
          notify_user: notifyUser,
          update_transaction_limits: updateLimits,
        },
      });

      onClose();
    } catch (error: unknown) {
      console.error("[KYC Approval] Failed:", error);

      const message =
        error instanceof Error
          ? error.message
          : "The KYC approval failed. Please try again.";

      setErrorMessage(message);
    }
  };

  if (!open || !kyc) return null;

  return (
    <>
      {/* Overlay */}
      <button
        type="button"
        aria-label="Close approval dialog"
        onClick={handleClose}
        disabled={isPending}
        className="fixed inset-0 z-[60] bg-black/40 disabled:cursor-not-allowed"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="approve-kyc-title"
        className="fixed left-1/2 top-1/2 z-[70] max-h-[90dvh] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-xl bg-white shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-green-100 p-2 text-green-700">
              <ShieldCheck size={23} />
            </div>

            <div>
              <h2
                id="approve-kyc-title"
                className="text-xl font-bold text-gray-900"
              >
                Approve KYC
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Confirm the customer's verification details.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleClose}
            disabled={isPending}
            aria-label="Close"
            className="rounded-lg border p-2 hover:bg-gray-100 disabled:opacity-50"
          >
            <X size={19} />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={(event) => {
            event.preventDefault();
            void submit();
          }}
        >
          <div className="space-y-5 p-6">
            {/* Customer summary */}
            <div className="rounded-lg border bg-gray-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Customer
              </p>

              <p className="mt-1 font-semibold text-gray-900">
                {kyc.user?.name || "Customer"}
              </p>

              <p className="mt-1 break-all text-sm text-gray-600">
                {kyc.user?.email || "No email available"}
              </p>

              <p className="mt-2 text-sm text-gray-600">
                Current status:{" "}
                <span className="font-medium capitalize">
                  {kyc.status}
                </span>
              </p>
            </div>

            {/* KYC level */}
            <div>
              <label
                htmlFor="approve-kyc-level"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                KYC Level
              </label>

              <select
                id="approve-kyc-level"
                value={level}
                onChange={(event) => setLevel(Number(event.target.value))}
                disabled={isPending}
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 disabled:bg-gray-100"
              >
                <option value={1}>Level 1</option>
                <option value={2}>Level 2</option>
                <option value={3}>Level 3</option>
                <option value={4}>Level 4</option>
              </select>
            </div>

            {/* Provider */}
            <div>
              <label
                htmlFor="approve-kyc-provider"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Verification Provider
              </label>

              <select
                id="approve-kyc-provider"
                value={provider}
                onChange={(event) => setProvider(event.target.value)}
                disabled={isPending}
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 disabled:bg-gray-100"
              >
                {PROVIDERS.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Provider reference */}
            <div>
              <label
                htmlFor="approve-kyc-reference"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Provider Reference
              </label>

              <input
                id="approve-kyc-reference"
                type="text"
                value={reference}
                onChange={(event) => setReference(event.target.value)}
                disabled={isPending}
                placeholder="Enter provider reference, if applicable"
                maxLength={255}
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 disabled:bg-gray-100"
              />
            </div>

            {/* Admin note */}
            <div>
              <label
                htmlFor="approve-kyc-note"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Admin Note
              </label>

              <textarea
                id="approve-kyc-note"
                rows={4}
                value={note}
                onChange={(event) => setNote(event.target.value)}
                disabled={isPending}
                maxLength={2000}
                placeholder="Add an internal review note..."
                className="w-full resize-y rounded-lg border px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 disabled:bg-gray-100"
              />

              <p className="mt-1 text-right text-xs text-gray-400">
                {note.length}/2000
              </p>
            </div>

            {/* Options */}
            <div className="space-y-4 rounded-lg border p-4">
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={notifyUser}
                  onChange={(event) =>
                    setNotifyUser(event.target.checked)
                  }
                  disabled={isPending}
                  className="mt-1 h-4 w-4 accent-green-600"
                />

                <span>
                  <span className="block text-sm font-medium text-gray-800">
                    Notify customer
                  </span>

                  <span className="mt-1 block text-xs text-gray-500">
                    Request customer notification as supported by the backend.
                  </span>
                </span>
              </label>

              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={updateLimits}
                  onChange={(event) =>
                    setUpdateLimits(event.target.checked)
                  }
                  disabled={isPending}
                  className="mt-1 h-4 w-4 accent-green-600"
                />

                <span>
                  <span className="block text-sm font-medium text-gray-800">
                    Update transaction limits
                  </span>

                  <span className="mt-1 block text-xs text-gray-500">
                    Request transaction-limit updates as supported by the backend.
                  </span>
                </span>
              </label>
            </div>

            {/* Error message */}
            {errorMessage && (
              <div
                role="alert"
                className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700"
              >
                <AlertCircle size={19} className="mt-0.5 shrink-0" />

                <div className="min-w-0">
                  <p className="font-semibold">
                    Approval unsuccessful
                  </p>

                  <p className="mt-1 break-words">
                    {errorMessage}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 border-t bg-white p-6">
            <button
              type="button"
              onClick={handleClose}
              disabled={isPending}
              className="rounded-lg border px-5 py-3 font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isPending}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-3 font-medium text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isPending && (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              )}

              {isPending ? "Approving..." : "Confirm Approval"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
