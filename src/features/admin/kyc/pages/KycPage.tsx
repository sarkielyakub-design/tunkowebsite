"use client";

import { useState } from "react";

import KycStatistics from "../components/KycStatistics";
import KycFilters from "../components/KycFilters";
import KycTable from "../components/KycTable";
import KycDetailsDrawer from "../components/KycDetailsDrawer";
import ApproveKycModal from "../components/ApproveKycModal";
import RejectKycModal from "../components/RejectKycModal";

import { useKycs } from "../hooks/useKycs";

import {
  Kyc,
  KycFilters as KycFiltersType,
} from "../types/kyc.types";

/**
 * Use the Laravel API host for KYC files.
 *
 * Example:
 * kyc/documents/example.jpg
 * becomes:
 * https://api.tunkomoney.com/storage/kyc/documents/example.jpg
 */
const API_BASE_URL = (
  process.env.NEXT_PUBLIC_API_URL ||
  "https://api.tunkomoney.com"
).replace(/\/+$/, "");

export function getKycImageUrl(
  path?: string | null
): string | null {
  if (!path || typeof path !== "string") {
    return null;
  }

  const normalizedPath = path.trim();

  if (!normalizedPath) {
    return null;
  }

  // Preserve an absolute URL returned by the backend.
  if (/^https?:\/\//i.test(normalizedPath)) {
    return normalizedPath;
  }

  // Support paths that already contain the storage prefix.
  const cleanPath = normalizedPath.replace(/^\/+/, "");
  const storagePath = cleanPath.startsWith("storage/")
    ? cleanPath
    : `storage/${cleanPath}`;

  return `${API_BASE_URL}/${storagePath}`;
}

type Pagination = {
  from: number;
  to: number;
  total: number;
  current_page: number;
  has_more_pages: boolean;
};

type KycResponse = {
  data: Kyc[];
  pagination: Pagination;
};

export default function KycPage() {
  const [filters, setFilters] =
    useState<KycFiltersType>({
      page: 1,
      per_page: 20,
    });

  const [selectedKyc, setSelectedKyc] =
    useState<Kyc | null>(null);

  const [drawerOpen, setDrawerOpen] =
    useState(false);

  const [approveOpen, setApproveOpen] =
    useState(false);

  const [rejectOpen, setRejectOpen] =
    useState(false);

  const {
    data,
    isLoading,
    isError,
    error,
  } = useKycs(filters) as {
    data?: KycResponse;
    isLoading: boolean;
    isError?: boolean;
    error?: unknown;
  };

  const kycs = data?.data ?? [];
  const pagination = data?.pagination;

  const openDrawer = (kyc: Kyc) => {
    setSelectedKyc(kyc);
    setDrawerOpen(true);
  };

  const openApprove = (kyc: Kyc) => {
    setSelectedKyc(kyc);
    setApproveOpen(true);
  };

  const openReject = (kyc: Kyc) => {
    setSelectedKyc(kyc);
    setRejectOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const closeApprove = () => {
    setApproveOpen(false);
  };

  const closeReject = () => {
    setRejectOpen(false);
  };

  const goToPreviousPage = () => {
    if (!pagination || pagination.current_page <= 1) {
      return;
    }

    setFilters((current) => ({
      ...current,
      page: pagination.current_page - 1,
    }));
  };

  const goToNextPage = () => {
    if (!pagination || !pagination.has_more_pages) {
      return;
    }

    setFilters((current) => ({
      ...current,
      page: pagination.current_page + 1,
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            KYC Management
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Review and manage customer identity verification
            requests.
          </p>
        </div>

        <div className="rounded-lg border bg-white px-4 py-2 text-sm text-gray-600">
          API:{" "}
          <span className="font-medium text-gray-900">
            api.tunkomoney.com
          </span>
        </div>
      </div>

      {/* Statistics */}
      <KycStatistics />

      {/* Filters */}
      <KycFilters
        filters={filters}
        onChange={(nextFilters) => {
          setFilters({
            ...nextFilters,
            page: 1,
          });
        }}
      />

      {/* API error */}
      {isError && (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 p-4"
        >
          <h2 className="font-semibold text-red-800">
            Unable to load KYC records
          </h2>

          <p className="mt-1 text-sm text-red-700">
            Check your connection and administrator
            authentication, then try again.
          </p>

          {error instanceof Error && (
            <p className="mt-2 break-words text-xs text-red-600">
              {error.message}
            </p>
          )}
        </div>
      )}

      {/* Table */}
      <KycTable
        data={kycs}
        loading={isLoading}
        onView={openDrawer}
        onApprove={openApprove}
        onReject={openReject}
      />

      {/* Pagination */}
      {pagination && !isLoading && (
        <div className="flex flex-col gap-4 rounded-xl border bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-medium text-gray-900">
              {pagination.total === 0 ? 0 : pagination.from}
            </span>
            {" - "}
            <span className="font-medium text-gray-900">
              {pagination.to}
            </span>
            {" of "}
            <span className="font-medium text-gray-900">
              {pagination.total}
            </span>{" "}
            records
          </p>

          <div className="flex gap-2">
            <button
              type="button"
              disabled={
                pagination.current_page <= 1 || isLoading
              }
              onClick={goToPreviousPage}
              className="rounded-lg border px-4 py-2 text-sm font-medium transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Previous
            </button>

            <span className="flex items-center px-2 text-sm text-gray-500">
              Page {pagination.current_page}
            </span>

            <button
              type="button"
              disabled={
                !pagination.has_more_pages || isLoading
              }
              onClick={goToNextPage}
              className="rounded-lg border px-4 py-2 text-sm font-medium transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* KYC Details Drawer */}
      <KycDetailsDrawer
        open={drawerOpen}
        kyc={selectedKyc}
        onClose={closeDrawer}
        onApprove={(kyc) => {
          closeDrawer();
          openApprove(kyc);
        }}
        onReject={(kyc) => {
          closeDrawer();
          openReject(kyc);
        }}
      />

      {/* Approve Modal */}
      <ApproveKycModal
        open={approveOpen}
        kyc={selectedKyc}
        onClose={closeApprove}
      />

      {/* Reject Modal */}
      <RejectKycModal
        open={rejectOpen}
        kyc={selectedKyc}
        onClose={closeReject}
      />
    </div>
  );
}
