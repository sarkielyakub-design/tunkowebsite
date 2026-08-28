import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import depositService from "../api/deposit.service";
import { DepositFilters } from "../types/deposit";

export function useDeposits(filters: DepositFilters) {
  return useQuery({
    queryKey: ["admin", "deposits", filters],
    queryFn: () => depositService.getDeposits(filters),
    placeholderData: (previousData) => previousData,
  });
}

export function useDepositStatistics() {
  return useQuery({
    queryKey: ["admin", "deposit-statistics"],
    queryFn: () => depositService.getStatistics(),
  });
}

export function useApproveDeposit() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: number | string;
      payload: {
        gateway_reference: string;
        provider_status: string;
        provider_response?: string;
        note?: string;
      };
    }) => depositService.approveDeposit(id, payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin", "deposits"],
      });

      queryClient.invalidateQueries({
        queryKey: ["admin", "deposit-statistics"],
      });
    },
  });
}
export function useRejectDeposit() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: number | string;
      payload: {
        reason: string;
        reject_code: string;
        provider_response?: string;
        note?: string;
      };
    }) => depositService.rejectDeposit(id, payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin", "deposits"],
      });

      queryClient.invalidateQueries({
        queryKey: ["admin", "deposit-statistics"],
      });
    },
  });
}
export function useCancelDeposit() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: number | string;
      payload: {
        reason: string;
        cancel_code: string;
        note?: string;
      };
    }) => depositService.cancelDeposit(id, payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin", "deposits"],
      });

      queryClient.invalidateQueries({
        queryKey: ["admin", "deposit-statistics"],
      });
    },
  });
}