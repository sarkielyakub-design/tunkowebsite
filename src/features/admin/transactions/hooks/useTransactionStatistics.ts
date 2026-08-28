"use client";

import { useQuery } from "@tanstack/react-query";

import transactionService from "@/src/services/admin/transaction.service";

import { TransactionStatistics } from "@/src/features/admin/transactions/types/transaction";

export function useTransactionStatistics() {
  return useQuery<TransactionStatistics>({
    queryKey: ["admin-transaction-statistics"],

    queryFn: () =>
      transactionService.statistics(),

    staleTime: 1000 * 60,

    retry: 1,

    refetchOnWindowFocus: false,
  });
}