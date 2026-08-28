"use client";

import { useQuery } from "@tanstack/react-query";

import transactionService from "@/src/services/admin/transaction.service";

import { TransactionResponse } from "@/src/features/admin/transactions/types/transaction";

export function useTransaction(id?: number) {
  return useQuery<TransactionResponse>({
    queryKey: ["admin-transaction", id],

    queryFn: () => transactionService.show(id!),

    enabled: !!id,

    staleTime: 1000 * 60 * 5,

    retry: 1,

    refetchOnWindowFocus: false,
  });
}