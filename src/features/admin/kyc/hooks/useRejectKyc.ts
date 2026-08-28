import { useMutation, useQueryClient } from "@tanstack/react-query";
import kycService from "../api/kyc.service";
import { RejectKycPayload } from "../types/kyc.types";

export const useRejectKyc = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: number;
      payload: RejectKycPayload;
    }) => kycService.rejectKyc(id, payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin", "kycs"],
      });

      queryClient.invalidateQueries({
        queryKey: ["admin", "kyc-statistics"],
      });
    },
  });
};