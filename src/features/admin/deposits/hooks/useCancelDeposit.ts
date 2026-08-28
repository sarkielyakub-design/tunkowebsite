import { useMutation, useQueryClient } from "@tanstack/react-query";
import depositService from "../api/deposit.service";

export function useCancelDeposit() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: number | string;
      payload: {
        reason: string;
        cancel_code: string;
        note?: string;
      };
    }) =>
      depositService.cancelDeposit(id, payload),

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