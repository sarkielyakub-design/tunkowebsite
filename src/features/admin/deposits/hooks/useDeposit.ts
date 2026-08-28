import { useQuery } from "@tanstack/react-query";
import depositService from "../api/deposit.service";

export function useDeposit(
  id?: number | string
) {
  return useQuery({
    queryKey: ["admin", "deposit", id],
    queryFn: () =>
      depositService.getDeposit(id!),
    enabled: !!id,
  });
}