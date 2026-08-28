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

  const { data, isLoading } = useKycs(filters) as {
    data?: { data: Kyc[]; pagination: { from: number; to: number; total: number; current_page: number; has_more_pages: boolean } };
    isLoading: boolean;
  };

  const kycs = data?.data ?? [];

  const pagination =
    data?.pagination;

  const openDrawer = (
    kyc: Kyc
  ) => {
    setSelectedKyc(kyc);
    setDrawerOpen(true);
  };

  const openApprove = (
    kyc: Kyc
  ) => {
    setSelectedKyc(kyc);
    setApproveOpen(true);
  };

  const openReject = (
    kyc: Kyc
  ) => {
    setSelectedKyc(kyc);
    setRejectOpen(true);
  };

  return (
    <div className="space-y-6">

      {/* Header */}

      <div>

        <h1 className="text-3xl font-bold">
          KYC Management
        </h1>

        <p className="mt-1 text-gray-500">
          Review and manage customer KYC
          verification requests.
        </p>

      </div>

      {/* Statistics */}

      <KycStatistics />

      {/* Filters */}

      <KycFilters
        filters={filters}
        onChange={setFilters}
      />

      {/* Table */}

      <KycTable
        data={kycs}
        loading={isLoading}
        onView={openDrawer}
        onApprove={openApprove}
        onReject={openReject}
      />

      {/* Pagination */}

      {pagination && (
        <div className="flex items-center justify-between rounded-xl border bg-white p-4">

          <p className="text-sm text-gray-500">
            Showing {pagination.from} - {pagination.to}
            {" "}of {pagination.total} records
          </p>

          <div className="flex gap-2">

            <button
              disabled={
                pagination.current_page === 1
              }
              onClick={() =>
                setFilters({
                  ...filters,
                  page:
                    pagination.current_page - 1,
                })
              }
              className="rounded-lg border px-4 py-2 disabled:opacity-50"
            >
              Previous
            </button>

            <button
              disabled={
                !pagination.has_more_pages
              }
              onClick={() =>
                setFilters({
                  ...filters,
                  page:
                    pagination.current_page + 1,
                })
              }
              className="rounded-lg border px-4 py-2 disabled:opacity-50"
            >
              Next
            </button>

          </div>

        </div>
      )}

      {/* Drawer */}

      <KycDetailsDrawer
        open={drawerOpen}
        kyc={selectedKyc}
        onClose={() =>
          setDrawerOpen(false)
        }
        onApprove={(kyc) => {
          setDrawerOpen(false);
          openApprove(kyc);
        }}
        onReject={(kyc) => {
          setDrawerOpen(false);
          openReject(kyc);
        }}
      />

      {/* Approve Modal */}

      <ApproveKycModal
        open={approveOpen}
        kyc={selectedKyc}
        onClose={() =>
          setApproveOpen(false)
        }
      />

      {/* Reject Modal */}

      <RejectKycModal
        open={rejectOpen}
        kyc={selectedKyc}
        onClose={() =>
          setRejectOpen(false)
        }
      />

    </div>
  );
}