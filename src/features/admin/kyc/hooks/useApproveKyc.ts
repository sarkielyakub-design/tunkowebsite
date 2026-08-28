import { useMutation, useQueryClient } from "@tanstack/react-query";
import kycService from "../api/kyc.service";
import { ApproveKycPayload } from "../types/kyc.types";

export const useApproveKyc = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: number;
      payload: ApproveKycPayload;
    }) => kycService.approveKyc(id, payload),

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