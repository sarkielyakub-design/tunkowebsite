"use client";

import { useState } from "react";

import TransactionFilters from "../components/TransactionFilters";
import TransactionStatistics from "../components/TransactionStatistics";
import TransactionTable from "../components/TransactionTable";
import TransactionDetailsDrawer from "../components/TransactionDetailsDrawer";
import RefundModal from "../components/RefundModal";
import UpdateStatusModal from "../components/UpdateStatusModal";

import {
  useTransactions,
  useTransactionStatistics,
  useRefundTransaction,
  useUpdateTransaction,
} from "../hooks";

import type {
  Transaction,
  TransactionFilters as TransactionFilterType,
} from "../types/transaction";

export default function TransactionsPage() {
  const [filters, setFilters] =
    useState<TransactionFilterType>({
      page: 1,
      per_page: 20,
    });

  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);

  const [detailsOpen, setDetailsOpen] =
    useState(false);

  const [refundOpen, setRefundOpen] =
    useState(false);

  const [statusOpen, setStatusOpen] =
    useState(false);

  const transactionsQuery =
    useTransactions(filters);

  const statisticsQuery =
    useTransactionStatistics();

  const refundMutation =
    useRefundTransaction();

  const statusMutation =
    useUpdateTransaction();  const openDetails = (
    transaction: Transaction
  ) => {
    setSelectedTransaction(transaction);
    setDetailsOpen(true);
  };

  const openRefund = (
    transaction: Transaction
  ) => {
    setSelectedTransaction(transaction);
    setRefundOpen(true);
  };

  const openStatus = (
    transaction: Transaction
  ) => {
    setSelectedTransaction(transaction);
    setStatusOpen(true);
  };

  const closeModals = () => {
    setDetailsOpen(false);
    setRefundOpen(false);
    setStatusOpen(false);
    setSelectedTransaction(null);
  };  const handleRefund = (
    amount: number,
    reason: string
  ) => {
    if (!selectedTransaction) return;

    refundMutation.mutate({
      id: selectedTransaction.id,
      payload: {
        amount,
        reason,
      },
    });

    setRefundOpen(false);
  };

  const handleStatusUpdate = (
    status: string,
    note: string
  ) => {
    if (!selectedTransaction) return;

    statusMutation.mutate({
      id: selectedTransaction.id,
      payload: {
        status,
        note,
      },
    });

    setStatusOpen(false);
  };  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

        <div>
          <h1 className="text-3xl font-bold">
            Transactions
          </h1>

          <p className="mt-1 text-muted-foreground">
            Manage and monitor all platform transactions.
          </p>
        </div>

      </div>

      {/* Statistics */}
      {statisticsQuery.data && (
        <TransactionStatistics
          summary={statisticsQuery.data}
        />
      )}

      {/* Filters */}
      <TransactionFilters
        filters={filters}
        onChange={setFilters}
      />

      {/* Table */}
      <TransactionTable
        transactions={
          transactionsQuery.data?.data ?? []
        }
        loading={transactionsQuery.isLoading}
        error={transactionsQuery.error}
        pagination={
          transactionsQuery.data?.pagination
        }
        filters={filters}
        onFiltersChange={setFilters}
        onView={openDetails}
        onRefund={openRefund}
        onStatus={openStatus}
      />

      {/* Details Drawer */}
      <TransactionDetailsDrawer
        open={detailsOpen}
        transaction={selectedTransaction}
        onClose={closeModals}
      />

      {/* Refund Modal */}
      <RefundModal
        open={refundOpen}
        transaction={selectedTransaction}
        loading={refundMutation.isPending}
        onClose={closeModals}
        onConfirm={handleRefund}
      />

      {/* Update Status Modal */}
      <UpdateStatusModal
        open={statusOpen}
        transaction={selectedTransaction}
        loading={statusMutation.isPending}
        onClose={closeModals}
        onConfirm={handleStatusUpdate}
      />

    </div>
  );
}