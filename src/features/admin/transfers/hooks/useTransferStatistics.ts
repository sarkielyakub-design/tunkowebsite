import { useQuery } from "@tanstack/react-query";
import transferService from "../api/transfer.service";

export function useTransferStatistics() {
  return useQuery({
    queryKey: ["admin", "transfer-statistics"],

    queryFn: () =>
      transferService.getStatistics(),
  });
}