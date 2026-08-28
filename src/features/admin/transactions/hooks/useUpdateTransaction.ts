"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import transactionService from "@/src/services/admin/transaction.service";

export function useUpdateTransaction() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: number;
      payload: {
        status: string;
        provider_reference?: string;
        note?: string;
      };
    }) =>
      transactionService.updateStatus(id, payload),

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