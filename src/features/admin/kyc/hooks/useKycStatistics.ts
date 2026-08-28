import { useQuery } from "@tanstack/react-query";
import kycService from "../api/kyc.service";

export const useKycStatistics = () => {
  return useQuery({
    queryKey: ["admin", "kyc-statistics"],
    queryFn: () => kycService.getStatistics(),
  });
};