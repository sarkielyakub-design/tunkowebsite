"use client";

import { useState } from "react";
import { X, ExternalLink, ImageOff, Bug } from "lucide-react";

import { Kyc } from "../types/kyc.types";
import StatusBadge from "./StatusBadge";

interface Props {
  open: boolean;
  kyc?: Kyc | null;
  onClose: () => void;
  onApprove: (kyc: Kyc) => void;
  onReject: (kyc: Kyc) => void;
}

const KYC_STORAGE_BASE_URL = (
  process.env.NEXT_PUBLIC_STORAGE_URL ||
  "https://api.tunkomoney.com"
)
  .replace(/\/+$/, "")
  .replace(/\/api$/i, "");

const KYC_IMAGE_DEBUG = true;

export function getKycImageUrl(
  path?: string | null
): string | null {
  if (!path || typeof path !== "string") {
    return null;
  }

  const cleanPath = path.trim();

  if (!cleanPath) {
    return null;
  }

  // Keep complete URLs returned by the backend.
  if (/^https?:\/\//i.test(cleanPath)) {
    return cleanPath;
  }

  const normalizedPath = cleanPath.replace(/^\/+/, "");

  // Avoid duplicate storage prefixes.
  const storagePath = normalizedPath.startsWith("storage/")
    ? normalizedPath
    : `storage/${normalizedPath}`;

  return `${KYC_STORAGE_BASE_URL}/${storagePath}`;
}

function debugKycImage(
  title: string,
  originalPath: string | null | undefined,
  generatedUrl: string | null
) {
  if (!KYC_IMAGE_DEBUG || typeof window === "undefined") {
    return;
  }

  console.groupCollapsed(`[KYC Image Debug] ${title}`);
  console.log("Original backend path:", originalPath);
  console.log("Storage base URL:", KYC_STORAGE_BASE_URL);
  console.log("Generated image URL:", generatedUrl);

  if (generatedUrl) {
    try {
      const parsedUrl = new URL(generatedUrl);

      console.log("Image hostname:", parsedUrl.hostname);
      console.log("Image pathname:", parsedUrl.pathname);
      console.log("Uses HTTPS:", parsedUrl.protocol === "https:");
    } catch (error) {
      console.error("Invalid image URL:", error);
    }
  } else {
    console.warn("No image path was returned by the API.");
  }

  console.groupEnd();
}

export default function KycDetailsDrawer({
  open,
  kyc,
  onClose,
  onApprove,
  onReject,
}: Props) {
  if (!open || !kyc) return null;

  const customer = kyc.user;

  return (
    <>
      {/* Overlay */}
      <button
        type="button"
        aria-label="Close KYC details"
        className="fixed inset-0 z-40 cursor-default bg-black/40"
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="kyc-drawer-title"
        className="fixed right-0 top-0 z-50 flex h-dvh w-full max-w-3xl flex-col bg-white shadow-2xl"
      >
        {/* Header */}
        <header className="flex shrink-0 items-center justify-between border-b bg-white px-5 py-4 sm:px-6">
          <div>
            <h2
              id="kyc-drawer-title"
              className="text-xl font-bold text-gray-900"
            >
              KYC Details
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Review customer verification information and documents.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-lg border p-2 transition hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </header>

        {/* Scrollable content */}
        <div className="flex-1 space-y-8 overflow-y-auto p-5 sm:p-6">
          {/* Customer */}
          <section className="rounded-xl border p-5">
            <SectionHeading>Customer</SectionHeading>

            <div className="grid gap-4 sm:grid-cols-2">
              <Info label="Name" value={customer?.name} />
              <Info label="Email" value={customer?.email} />
              <Info label="Phone" value={customer?.phone} />
              <Info label="Country" value={customer?.country} />

              <Info
                label="Account Verification"
                value={
                  customer?.is_verified
                    ? "Verified"
                    : "Not Verified"
                }
              />
            </div>
          </section>

          {/* Personal information */}
          <section className="rounded-xl border p-5">
            <SectionHeading>Personal Information</SectionHeading>

            <div className="grid gap-4 sm:grid-cols-2">
              <Info label="First Name" value={kyc.first_name} />
              <Info label="Last Name" value={kyc.last_name} />
              <Info label="Middle Name" value={kyc.middle_name} />
              <Info label="Date of Birth" value={kyc.date_of_birth} />
              <Info label="Gender" value={kyc.gender} />
              <Info label="Marital Status" value={kyc.marital_status} />
              <Info label="Nationality" value={kyc.nationality} />
              <Info label="Occupation" value={kyc.occupation} />
              <Info label="Income Source" value={kyc.source_of_income} />
            </div>
          </section>

          {/* Verification */}
          <section className="rounded-xl border p-5">
            <SectionHeading>Verification</SectionHeading>

            <div className="grid gap-4 sm:grid-cols-2">
              <Info
                label="Verification Level"
                value={
                  kyc.level != null
                    ? `Level ${kyc.level}`
                    : null
                }
              />

              <div>
                <p className="text-sm text-gray-500">Status</p>
                <div className="mt-2">
                  <StatusBadge status={kyc.status} />
                </div>
              </div>

              <Info label="Document Type" value={kyc.document_type} />
              <Info label="ID Number" value={kyc.id_number} />
              <Info
                label="Verification Provider"
                value={kyc.verification_provider}
              />
              <Info
                label="Provider Reference"
                value={kyc.provider_reference}
              />
            </div>
          </section>

          {/* Documents */}
          <section>
            <SectionHeading>Uploaded Documents</SectionHeading>

            <p className="mb-4 text-sm text-gray-500">
              Image URL diagnostics are available in the browser console.
            </p>

            <div className="grid gap-5 sm:grid-cols-2">
              <DocumentImage
                title="Front of ID"
                path={kyc.id_front}
              />

              <DocumentImage
                title="Back of ID"
                path={kyc.id_back}
              />

              <DocumentImage
                title="Selfie"
                path={kyc.selfie}
              />
            </div>
          </section>

          {/* Review information */}
          <section className="rounded-xl border p-5">
            <SectionHeading>Review Information</SectionHeading>

            <div className="grid gap-4 sm:grid-cols-2">
              <Info
                label="Reviewed By"
                value={kyc.reviewed_by?.name}
              />
              <Info label="Admin Note" value={kyc.admin_note} />
              <Info
                label="Rejection Reason"
                value={kyc.rejection_reason}
              />
              <Info label="Reject Code" value={kyc.reject_code} />
            </div>
          </section>

          {/* Timeline */}
          <section className="rounded-xl border p-5">
            <SectionHeading>Timeline</SectionHeading>

            <div className="grid gap-4 sm:grid-cols-2">
              <Info label="Created At" value={kyc.created_at} />
              <Info label="Reviewed At" value={kyc.reviewed_at} />
              <Info label="Approved At" value={kyc.approved_at} />
              <Info label="Rejected At" value={kyc.rejected_at} />
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="flex shrink-0 flex-wrap justify-end gap-3 border-t bg-white p-4 sm:p-6">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border px-5 py-3 font-medium text-gray-700 transition hover:bg-gray-50"
          >
            Close
          </button>

          {kyc.status !== "approved" && (
            <button
              type="button"
              onClick={() => onApprove(kyc)}
              className="rounded-lg bg-green-600 px-5 py-3 font-medium text-white transition hover:bg-green-700"
            >
              Approve
            </button>
          )}

          {kyc.status !== "rejected" && (
            <button
              type="button"
              onClick={() => onReject(kyc)}
              className="rounded-lg bg-red-600 px-5 py-3 font-medium text-white transition hover:bg-red-700"
            >
              Reject
            </button>
          )}
        </footer>
      </aside>
    </>
  );
}

function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h3 className="mb-4 text-lg font-semibold text-gray-900">
      {children}
    </h3>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value?: string | number | boolean | null;
}) {
  const displayValue =
    value === null || value === undefined || value === ""
      ? "-"
      : typeof value === "boolean"
        ? value
          ? "Yes"
          : "No"
        : String(value);

  return (
    <div className="min-w-0">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="mt-1 break-words font-medium text-gray-900">
        {displayValue}
      </p>
    </div>
  );
}

function DocumentImage({
  title,
  path,
}: {
  title: string;
  path?: string | null;
}) {
  const imageUrl = getKycImageUrl(path);
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);

  debugKycImage(title, path, imageUrl);

  const retryImage = () => {
    console.info(`[KYC Image Debug] Retrying ${title}`, {
      originalPath: path,
      imageUrl,
      nextAttempt: attempt + 1,
    });

    setFailed(false);
    setAttempt((current) => current + 1);
  };

  if (!imageUrl) {
    return (
      <div className="overflow-hidden rounded-xl border bg-gray-50">
        <div className="border-b bg-white px-4 py-3">
          <h4 className="font-medium text-gray-900">{title}</h4>
        </div>

        <div className="flex min-h-48 flex-col items-center justify-center gap-2 p-6 text-center text-gray-400">
          <ImageOff size={30} />
          <p className="text-sm">No document path returned by the API.</p>

          {KYC_IMAGE_DEBUG && (
            <pre className="max-w-full whitespace-pre-wrap break-all text-xs">
              {JSON.stringify({ title, path }, null, 2)}
            </pre>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border bg-gray-50">
      <div className="flex items-center justify-between gap-3 border-b bg-white px-4 py-3">
        <h4 className="font-medium text-gray-900">{title}</h4>

        <a
          href={imageUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${title} in a new tab`}
          className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          Open <ExternalLink size={14} />
        </a>
      </div>

      {failed ? (
        <div className="flex min-h-48 flex-col items-center justify-center gap-3 p-6 text-center text-red-500">
          <ImageOff size={30} />

          <p className="text-sm font-medium">Unable to load image</p>

          <p className="text-xs text-gray-600">
            Inspect the browser console and Network tab for the URL and HTTP status.
          </p>

          <button
            type="button"
            onClick={retryImage}
            className="rounded-lg border bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Retry
          </button>

          {KYC_IMAGE_DEBUG && (
            <div className="w-full rounded-lg border bg-white p-3 text-left">
              <p className="mb-1 text-xs font-semibold text-gray-700">
                Debug information
              </p>

              <p className="break-all text-xs text-gray-600">
                Original path: {path}
              </p>

              <p className="mt-1 break-all text-xs text-gray-600">
                Image URL: {imageUrl}
              </p>

              <p className="mt-1 text-xs text-gray-600">
                Retry count: {attempt}
              </p>

              <button
                type="button"
                onClick={() => {
                  console.log(`[KYC Image Debug] ${title}`, {
                    originalPath: path,
                    generatedUrl: imageUrl,
                    storageBaseUrl: KYC_STORAGE_BASE_URL,
                    retryCount: attempt,
                  });
                }}
                className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:underline"
              >
                <Bug size={13} />
                Log details
              </button>
            </div>
          )}
        </div>
      ) : (
        <img
          key={`${imageUrl}-${attempt}`}
          src={imageUrl}
          alt={title}
          loading="lazy"
          onLoad={(event) => {
            console.info(`[KYC Image Debug] ${title} loaded`, {
              url: imageUrl,
              naturalWidth: event.currentTarget.naturalWidth,
              naturalHeight: event.currentTarget.naturalHeight,
            });
          }}
          onError={(event) => {
            console.error(`[KYC Image Debug] ${title} failed`, {
              originalPath: path,
              generatedUrl: imageUrl,
              storageBaseUrl: KYC_STORAGE_BASE_URL,
              currentSrc: event.currentTarget.currentSrc,
              attempt,
            });

            setFailed(true);
          }}
          className="max-h-[420px] min-h-48 w-full object-contain p-3"
        />
      )}
    </div>
  );
}
