import { useQuery } from "@tanstack/react-query";
import transferService from "../api/transfer.service";
import { TransferFilters } from "../types/transfer";

export function useTransfers(
  filters: TransferFilters = {}
) {
  return useQuery({
    queryKey: ["admin", "transfers", filters],

    queryFn: () =>
      transferService.getTransfers(filters),

    placeholderData: (previousData) => previousData,
  });
}