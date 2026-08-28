import { useMutation, useQueryClient } from "@tanstack/react-query";
import depositService from "../api/deposit.service";

export function useApproveDeposit() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: number | string;
      payload: {
        gateway_reference: string;
        provider_status: string;
        provider_response?: string;
        note?: string;
      };
    }) =>
      depositService.approveDeposit(id, payload),

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