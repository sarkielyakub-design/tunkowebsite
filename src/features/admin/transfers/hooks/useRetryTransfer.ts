import { useMutation, useQueryClient } from "@tanstack/react-query";
import transferService from "../api/transfer.service";

export function useRetryTransfer() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: number | string;
      payload: {
        provider?: string;
        note?: string;
      };
    }) =>
      transferService.retryTransfer(id, payload),

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