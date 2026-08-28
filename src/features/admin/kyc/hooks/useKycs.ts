import { useQuery } from "@tanstack/react-query";
import kycService from "../api/kyc.service";
import { KycFilters } from "../types/kyc.types";

export const useKycs = (
  filters: KycFilters
) => {
  return useQuery({
    queryKey: ["admin", "kycs", filters],
    queryFn: () => kycService.getKycs(filters),
    placeholderData: (previousData) => previousData,
  });
};