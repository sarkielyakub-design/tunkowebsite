"use client";

import { useEffect, useState } from "react";

import { Kyc } from "../types/kyc.types";
import { useApproveKyc } from "../hooks/useApproveKyc";

interface Props {
  open: boolean;
  kyc: Kyc | null;

  onClose: () => void;
}

export default function ApproveKycModal({
  open,
  kyc,
  onClose,
}: Props) {
  const approveMutation = useApproveKyc();

  const [level, setLevel] = useState(1);

  const [provider, setProvider] =
    useState("manual");

  const [reference, setReference] =
    useState("");

  const [note, setNote] =
    useState("");

  const [notifyUser, setNotifyUser] =
    useState(true);

  const [updateLimits, setUpdateLimits] =
    useState(true);

  useEffect(() => {
    if (kyc) {
      setLevel(kyc.level || 1);

      setProvider(
        kyc.verification_provider ?? "manual"
      );

      setReference(
        kyc.provider_reference ?? ""
      );

      setNote(
        kyc.admin_note ?? ""
      );
    }
  }, [kyc]);

  if (!open || !kyc) return null;

  const submit = async () => {
    await approveMutation.mutateAsync({

      id: kyc.id,

      payload: {

        kyc_level: level,

        verification_provider: provider,

        provider_reference: reference,

        note,

        notify_user: notifyUser,

        update_transaction_limits:
          updateLimits,

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

      <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white shadow-xl">

        <div className="border-b px-6 py-5">

          <h2 className="text-xl font-bold">
            Approve KYC
          </h2>

        </div>

        <div className="space-y-5 p-6">

          {/* Level */}

          <div>

            <label className="mb-2 block text-sm font-medium">
              KYC Level
            </label>

            <select
              value={level}
              onChange={(e) =>
                setLevel(Number(e.target.value))
              }
              className="w-full rounded-lg border px-4 py-2"
            >
              <option value={1}>Level 1</option>
              <option value={2}>Level 2</option>
              <option value={3}>Level 3</option>
              <option value={4}>Level 4</option>
            </select>

          </div>

          {/* Provider */}

          <div>

            <label className="mb-2 block text-sm font-medium">
              Verification Provider
            </label>

            <select
              value={provider}
              onChange={(e) =>
                setProvider(e.target.value)
              }
              className="w-full rounded-lg border px-4 py-2"
            >
              <option value="manual">
                Manual
              </option>

              <option value="sumsub">
                Sumsub
              </option>

              <option value="veriff">
                Veriff
              </option>

              <option value="smile_identity">
                Smile Identity
              </option>

              <option value="onfido">
                Onfido
              </option>

            </select>

          </div>

          {/* Reference */}

          <div>

            <label className="mb-2 block text-sm font-medium">
              Provider Reference
            </label>

            <input
              value={reference}
              onChange={(e) =>
                setReference(e.target.value)
              }
              className="w-full rounded-lg border px-4 py-2"
            />

          </div>

          {/* Note */}

          <div>

            <label className="mb-2 block text-sm font-medium">
              Admin Note
            </label>

            <textarea
              rows={4}
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
                checked={updateLimits}
                onChange={(e) =>
                  setUpdateLimits(
                    e.target.checked
                  )
                }
              />

              Update transaction limits

            </label>

          </div>

        </div>

        <div className="flex justify-end gap-3 border-t p-6">

          <button
            onClick={onClose}
            className="rounded-lg border px-5 py-2"
          >
            Cancel
          </button>

          <button
            disabled={approveMutation.isPending}
            onClick={submit}
            className="rounded-lg bg-green-600 px-5 py-2 font-medium text-white hover:bg-green-700 disabled:opacity-50"
          >
            {approveMutation.isPending
              ? "Approving..."
              : "Approve"}
          </button>

        </div>

      </div>
    </>
  );
}