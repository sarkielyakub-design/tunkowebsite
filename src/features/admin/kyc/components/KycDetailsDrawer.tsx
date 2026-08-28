"use client";

import { X } from "lucide-react";

import { Kyc } from "../types/kyc.types";
import StatusBadge from "./StatusBadge";
import DocumentPreview from "./DocumentPreview";

interface Props {
  open: boolean;
  kyc?: Kyc | null;

  onClose: () => void;

  onApprove: (kyc: Kyc) => void;

  onReject: (kyc: Kyc) => void;
}

export default function KycDetailsDrawer({
  open,
  kyc,
  onClose,
  onApprove,
  onReject,
}: Props) {
  if (!open || !kyc) return null;

  return (
    <>
      {/* Overlay */}

      <div
        className="fixed inset-0 z-40 bg-black/40"
        onClick={onClose}
      />

      {/* Drawer */}

      <div className="fixed right-0 top-0 z-50 h-screen w-full max-w-3xl overflow-y-auto bg-white shadow-2xl">

        {/* Header */}

        <div className="sticky top-0 flex items-center justify-between border-b bg-white px-6 py-5">

          <div>
            <h2 className="text-xl font-bold">
              KYC Details
            </h2>

            <p className="text-sm text-gray-500">
              Review customer verification
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg border p-2 hover:bg-gray-100"
          >
            <X size={20} />
          </button>

        </div>

        <div className="space-y-8 p-6">

          {/* User */}

          <section className="rounded-xl border p-5">

            <h3 className="mb-4 text-lg font-semibold">
              Customer
            </h3>

            <div className="grid gap-4 md:grid-cols-2">

              <Info
                label="Name"
                value={kyc.user.name}
              />

              <Info
                label="Email"
                value={kyc.user.email}
              />

              <Info
                label="Phone"
                value={kyc.user.phone}
              />

              <Info
                label="Country"
                value={kyc.user.country}
              />

              <Info
                label="Verification"
                value={
                  kyc.user.is_verified
                    ? "Verified"
                    : "Not Verified"
                }
              />

            </div>

          </section>

          {/* Personal */}

          <section className="rounded-xl border p-5">

            <h3 className="mb-4 text-lg font-semibold">
              Personal Information
            </h3>

            <div className="grid gap-4 md:grid-cols-2">

              <Info
                label="First Name"
                value={kyc.first_name}
              />

              <Info
                label="Last Name"
                value={kyc.last_name}
              />

              <Info
                label="Middle Name"
                value={kyc.middle_name}
              />

              <Info
                label="Date of Birth"
                value={kyc.date_of_birth}
              />

              <Info
                label="Gender"
                value={kyc.gender}
              />

              <Info
                label="Marital Status"
                value={kyc.marital_status}
              />

              <Info
                label="Nationality"
                value={kyc.nationality}
              />

              <Info
                label="Occupation"
                value={kyc.occupation}
              />

              <Info
                label="Income Source"
                value={kyc.source_of_income}
              />

            </div>

          </section>

          {/* Verification */}

          <section className="rounded-xl border p-5">

            <h3 className="mb-4 text-lg font-semibold">
              Verification
            </h3>

            <div className="grid gap-4 md:grid-cols-2">

              <Info
                label="Level"
                value={`Level ${kyc.level}`}
              />

              <div>
                <span className="text-sm text-gray-500">
                  Status
                </span>

                <div className="mt-2">
                  <StatusBadge
                    status={kyc.status}
                  />
                </div>
              </div>

              <Info
                label="Document Type"
                value={kyc.document_type}
              />

              <Info
                label="ID Number"
                value={kyc.id_number}
              />

              <Info
                label="Provider"
                value={kyc.verification_provider}
              />

              <Info
                label="Reference"
                value={kyc.provider_reference}
              />

            </div>

          </section>

          {/* Documents */}

          <section>

            <h3 className="mb-4 text-lg font-semibold">
              Uploaded Documents
            </h3>

            <div className="grid gap-6 md:grid-cols-2">

              <DocumentPreview
                title="Front ID"
                image={kyc.id_front}
              />

              <DocumentPreview
                title="Back ID"
                image={kyc.id_back}
              />

              <DocumentPreview
                title="Selfie"
                image={kyc.selfie}
              />

            </div>

          </section>

          {/* Review */}

          <section className="rounded-xl border p-5">

            <h3 className="mb-4 text-lg font-semibold">
              Review Information
            </h3>

            <div className="grid gap-4 md:grid-cols-2">

              <Info
                label="Reviewed By"
                value={kyc.reviewed_by?.name}
              />

              <Info
                label="Admin Note"
                value={kyc.admin_note}
              />

              <Info
                label="Rejection Reason"
                value={kyc.rejection_reason}
              />

              <Info
                label="Reject Code"
                value={kyc.reject_code}
              />

            </div>

          </section>

          {/* Timeline */}

          <section className="rounded-xl border p-5">

            <h3 className="mb-4 text-lg font-semibold">
              Timeline
            </h3>

            <div className="grid gap-4 md:grid-cols-2">

              <Info
                label="Created"
                value={kyc.created_at}
              />

              <Info
                label="Reviewed"
                value={kyc.reviewed_at}
              />

              <Info
                label="Approved"
                value={kyc.approved_at}
              />

              <Info
                label="Rejected"
                value={kyc.rejected_at}
              />

            </div>

          </section>

        </div>

        {/* Footer */}

        <div className="sticky bottom-0 flex justify-end gap-3 border-t bg-white p-6">

          {kyc.status !== "approved" && (
            <button
              onClick={() => onApprove(kyc)}
              className="rounded-lg bg-green-600 px-5 py-3 font-medium text-white hover:bg-green-700"
            >
              Approve
            </button>
          )}

          {kyc.status !== "rejected" && (
            <button
              onClick={() => onReject(kyc)}
              className="rounded-lg bg-red-600 px-5 py-3 font-medium text-white hover:bg-red-700"
            >
              Reject
            </button>
          )}

        </div>

      </div>
    </>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value?: string | number | boolean | null;
}) {
  return (
    <div>
      <p className="text-sm text-gray-500">
        {label}
      </p>

      <p className="mt-1 font-medium">
        {value || "-"}
      </p>
    </div>
  );
}