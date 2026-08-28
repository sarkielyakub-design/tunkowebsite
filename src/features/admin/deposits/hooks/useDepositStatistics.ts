import { useQuery } from "@tanstack/react-query";
import depositService from "../api/deposit.service";

export function useDepositStatistics() {
  return useQuery({
    queryKey: ["admin", "deposit-statistics"],
    queryFn: () =>
      depositService.getStatistics(),
  });
}