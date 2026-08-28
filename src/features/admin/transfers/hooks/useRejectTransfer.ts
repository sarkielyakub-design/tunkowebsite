import { useMutation, useQueryClient } from "@tanstack/react-query";
import transferService from "../api/transfer.service";

export function useRejectTransfer() {
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
        refund_wallet: boolean;
        note?: string;
      };
    }) =>
      transferService.rejectTransfer(id, payload),

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