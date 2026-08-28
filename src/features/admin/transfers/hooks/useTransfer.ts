import { useQuery } from "@tanstack/react-query";
import transferService from "../api/transfer.service";

export function useTransfer(
  id?: number | string
) {
  return useQuery({
    queryKey: ["admin", "transfer", id],

    queryFn: () =>
      transferService.getTransfer(id!),

    enabled: !!id,
  });
}