import { useMutation, useQueryClient } from "@tanstack/react-query";
import transferService from "../api/transfer.service";

export function useApproveTransfer() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: number | string;
      payload: {
        provider: string;
        provider_reference?: string;
        exchange_rate: number;
        recipient_amount: number;
        note?: string;
      };
    }) =>
      transferService.approveTransfer(id, payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin", "transfers"],
      });

      queryClient.invalidateQueries({
        queryKey: ["admin", "transfer-statistics"],
      });
    },
  });
}