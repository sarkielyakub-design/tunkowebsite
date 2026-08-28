import { useQuery } from "@tanstack/react-query";
import kycService from "../api/kyc.service";

export const useKyc = (
  id?: number
) => {
  return useQuery({
    queryKey: ["admin", "kyc", id],
    queryFn: () => kycService.getKyc(id!),
    enabled: !!id,
  });
};