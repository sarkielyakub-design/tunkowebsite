"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import transactionService from "@/src/services/admin/transaction.service";

export function useRefundTransaction() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: number;
      payload: {
        amount: number;
        reason: string;
        note?: string;
      };
    }) =>
      transactionService.refund(id, payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin-transactions"],
      });

      queryClient.invalidateQueries({
        queryKey: ["admin-transaction-statistics"],
      });
    },
  });
}