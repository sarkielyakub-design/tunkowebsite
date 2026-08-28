"use client";

import { useQuery } from "@tanstack/react-query";

import transactionService from "@/src/services/admin/transaction.service";

import {
  TransactionFilters,
  TransactionListResponse,
} from "@/src/features/admin/transactions/types/transaction";

export function useTransactions(
  filters: TransactionFilters = {}
) {
  return useQuery<TransactionListResponse>({
    queryKey: ["admin-transactions", filters],

    queryFn: () =>
      transactionService.index(filters),

    staleTime: 1000 * 60 * 5,

    gcTime: 1000 * 60 * 30,

    retry: 1,

    refetchOnWindowFocus: false,

    placeholderData: (previousData) => previousData,
  });
}