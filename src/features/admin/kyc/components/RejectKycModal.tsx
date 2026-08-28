"use client";

import { useEffect, useState } from "react";

import { Kyc } from "../types/kyc.types";
import { useRejectKyc } from "../hooks/useRejectKyc";

interface Props {
  open: boolean;
  kyc: Kyc | null;

  onClose: () => void;
}

const REJECT_CODES = [
  {
    value: "document_blurry",
    label: "Document Blurry",
  },
  {
    value: "document_expired",
    label: "Document Expired",
  },
  {
    value: "document_invalid",
    label: "Invalid Document",
  },
  {
    value: "selfie_mismatch",
    label: "Selfie Mismatch",
  },
  {
    value: "duplicate_account",
    label: "Duplicate Account",
  },
  {
    value: "address_invalid",
    label: "Invalid Address",
  },
  {
    value: "information_mismatch",
    label: "Information Mismatch",
  },
  {
    value: "fraud_suspected",
    label: "Fraud Suspected",
  },
  {
    value: "other",
    label: "Other",
  },
];

export default function RejectKycModal({
  open,
  kyc,
  onClose,
}: Props) {
  const rejectMutation = useRejectKyc();

  const [reason, setReason] = useState("");

  const [rejectCode, setRejectCode] =
    useState("document_invalid");

  const [note, setNote] = useState("");

  const [notifyUser, setNotifyUser] =
    useState(true);

  const [allowResubmission, setAllowResubmission] =
    useState(true);

  useEffect(() => {
    if (kyc) {
      setReason(kyc.rejection_reason ?? "");

      setRejectCode(
        kyc.reject_code ?? "document_invalid"
      );

      setNote(
        kyc.admin_note ?? ""
      );
    }
  }, [kyc]);

  if (!open || !kyc) return null;

  const submit = async () => {
    await rejectMutation.mutateAsync({

      id: kyc.id,

      payload: {

        reason,

        reject_code: rejectCode,

        note,

        notify_user: notifyUser,

        allow_resubmission:
          allowResubmission,

      },

    });

    onClose();
  };

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/40"
        onClick={onClose}
      />

      <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white shadow-xl">

        {/* Header */}

        <div className="border-b px-6 py-5">

          <h2 className="text-xl font-bold">
            Reject KYC
          </h2>

        </div>

        {/* Body */}

        <div className="space-y-5 p-6">

          {/* Reject Code */}

          <div>

            <label className="mb-2 block text-sm font-medium">
              Reject Code
            </label>

            <select
              value={rejectCode}
              onChange={(e) =>
                setRejectCode(e.target.value)
              }
              className="w-full rounded-lg border px-4 py-2"
            >
              {REJECT_CODES.map((code) => (
                <option
                  key={code.value}
                  value={code.value}
                >
                  {code.label}
                </option>
              ))}
            </select>

          </div>

          {/* Reason */}

          <div>

            <label className="mb-2 block text-sm font-medium">
              Rejection Reason
            </label>

            <textarea
              rows={5}
              value={reason}
              onChange={(e) =>
                setReason(e.target.value)
              }
              placeholder="Explain why this KYC was rejected..."
              className="w-full rounded-lg border px-4 py-2"
            />

          </div>

          {/* Admin Note */}

          <div>

            <label className="mb-2 block text-sm font-medium">
              Internal Admin Note
            </label>

            <textarea
              rows={3}
              value={note}
              onChange={(e) =>
                setNote(e.target.value)
              }
              className="w-full rounded-lg border px-4 py-2"
            />

          </div>

          {/* Options */}

          <div className="space-y-3">

            <label className="flex items-center gap-3">

              <input
                type="checkbox"
                checked={notifyUser}
                onChange={(e) =>
                  setNotifyUser(
                    e.target.checked
                  )
                }
              />

              Notify customer

            </label>

            <label className="flex items-center gap-3">

              <input
                type="checkbox"
                checked={allowResubmission}
                onChange={(e) =>
                  setAllowResubmission(
                    e.target.checked
                  )
                }
              />

              Allow resubmission

            </label>

          </div>

        </div>

        {/* Footer */}

        <div className="flex justify-end gap-3 border-t p-6">

          <button
            onClick={onClose}
            className="rounded-lg border px-5 py-2"
          >
            Cancel
          </button>

          <button
            onClick={submit}
            disabled={
              rejectMutation.isPending ||
              reason.trim().length < 10
            }
            className="rounded-lg bg-red-600 px-5 py-2 font-medium text-white hover:bg-red-700 disabled:opacity-50"
          >
            {rejectMutation.isPending
              ? "Rejecting..."
              : "Reject KYC"}
          </button>

        </div>

      </div>
    </>
  );
}