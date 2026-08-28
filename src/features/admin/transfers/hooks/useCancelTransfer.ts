import { useMutation, useQueryClient } from "@tanstack/react-query";
import transferService from "../api/transfer.service";

export function useCancelTransfer() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: number | string;
      payload: {
        reason: string;
        refund_wallet: boolean;
        note?: string;
      };
    }) => transferService.cancelTransfer(id, payload),

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