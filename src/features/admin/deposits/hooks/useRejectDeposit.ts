import { useMutation, useQueryClient } from "@tanstack/react-query";
import depositService from "../api/deposit.service";

export function useRejectDeposit() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: number | string;
      payload: {
        reason: string;
        reject_code: string;
        provider_response?: string;
        note?: string;
      };
    }) =>
      depositService.rejectDeposit(id, payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin", "deposits"],
      });

      queryClient.invalidateQueries({
        queryKey: ["admin", "deposit-statistics"],
      });
    },
  });
}