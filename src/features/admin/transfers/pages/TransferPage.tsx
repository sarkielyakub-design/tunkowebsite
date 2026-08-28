"use client";

import { useState } from "react";

import {
  Transfer,
  TransferFilters as TransferFiltersType,
} from "../types/transfer";

import { useTransfers } from "../hooks/useTransfers";

import TransferStatistics from "../components/TransferStatistics";
import TransferFilters from "../components/TransferFilters";
import TransferTable from "../components/TransferTable";
import TransferDetailsDrawer from "../components/TransferDetailsDrawer";
import ApproveTransferModal from "../components/ApproveTransferModal";
import RejectTransferModal from "../components/RejectTransferModal";
import CancelTransferModal from "../components/CancelTransferModal";
import RetryTransferModal from "../components/RetryTransferModal";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";export default function TransferPage() {
  const [filters, setFilters] =
    useState<TransferFiltersType>({
      page: 1,
      per_page: 20,
    });

  const {
    data,
    isLoading,
  } = useTransfers(filters);

  const transfers = data?.data ?? [];

  const pagination = data?.pagination;

  const [selectedTransfer, setSelectedTransfer] =
    useState<Transfer | null>(null);

  const [detailsOpen, setDetailsOpen] =
    useState(false);

  const [approveOpen, setApproveOpen] =
    useState(false);

  const [rejectOpen, setRejectOpen] =
    useState(false);

  const [cancelOpen, setCancelOpen] =
    useState(false);

  const [retryOpen, setRetryOpen] =
    useState(false);  function openDetails(
    transfer: Transfer
  ) {
    setSelectedTransfer(transfer);
    setDetailsOpen(true);
  }

  function openApprove(
    transfer: Transfer
  ) {
    setSelectedTransfer(transfer);
    setApproveOpen(true);
  }

  function openReject(
    transfer: Transfer
  ) {
    setSelectedTransfer(transfer);
    setRejectOpen(true);
  }

  function openCancel(
    transfer: Transfer
  ) {
    setSelectedTransfer(transfer);
    setCancelOpen(true);
  }

  function openRetry(
    transfer: Transfer
  ) {
    setSelectedTransfer(transfer);
    setRetryOpen(true);
  }  return (
    <div className="space-y-6">

      <TransferStatistics />

      <Card>

        <CardHeader>

          <CardTitle>
            Transfer Management
          </CardTitle>

        </CardHeader>

        <CardContent className="space-y-6">

          <TransferFilters
            filters={filters}
            onChange={setFilters}
          />          <TransferTable
            transfers={transfers}
            loading={isLoading}
            onView={openDetails}
            onApprove={openApprove}
            onReject={openReject}
            onCancel={openCancel}
            onRetry={openRetry}
          />          {pagination && (

            <div className="flex items-center justify-between">

              <p className="text-sm text-muted-foreground">

                Showing {pagination.from} - {pagination.to}
                {" "}of {pagination.total}

              </p>

              <div className="flex gap-2">

                <Button
                  variant="outline"
                  disabled={pagination.current_page <= 1}
                  onClick={() =>
                    setFilters({
                      ...filters,
                      page:
                        pagination.current_page - 1,
                    })
                  }
                >
                  Previous
                </Button>

                <Button
                  variant="outline"
                  disabled={
                    pagination.current_page >=
                    pagination.last_page
                  }
                  onClick={() =>
                    setFilters({
                      ...filters,
                      page:
                        pagination.current_page + 1,
                    })
                  }
                >
                  Next
                </Button>

              </div>

            </div>

          )}

        </CardContent>

      </Card>      <TransferDetailsDrawer
        open={detailsOpen}
        onOpenChange={setDetailsOpen}
        transfer={selectedTransfer}
      />

      <ApproveTransferModal
        open={approveOpen}
        onOpenChange={setApproveOpen}
        transfer={selectedTransfer}
      />

      <RejectTransferModal
        open={rejectOpen}
        onOpenChange={setRejectOpen}
        transfer={selectedTransfer}
      />

      <CancelTransferModal
        open={cancelOpen}
        onOpenChange={setCancelOpen}
        transfer={selectedTransfer}
      />

      <RetryTransferModal
        open={retryOpen}
        onOpenChange={setRetryOpen}
        transfer={selectedTransfer}
      />

    </div>
  );
}