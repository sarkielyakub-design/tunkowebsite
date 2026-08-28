import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import withdrawalService from "../api/withdraw.service";
import {
  WithdrawalFilters,
  ApproveWithdrawalPayload,
  RejectWithdrawalPayload,
  CancelWithdrawalPayload,
  RetryWithdrawalPayload,
} from "../api/types";

export const withdrawalKeys = {
  all: ["withdrawals"] as const,
  lists: () => [...withdrawalKeys.all, "list"] as const,
  list: (filters?: WithdrawalFilters) =>
    [...withdrawalKeys.lists(), filters] as const,
  detail: (id: number | string) =>
    [...withdrawalKeys.all, "detail", id] as const,
  statistics: () =>
    [...withdrawalKeys.all, "statistics"] as const,
};

export function useWithdrawals(filters?: WithdrawalFilters) {
  return useQuery({
    queryKey: withdrawalKeys.list(filters),
    queryFn: () => withdrawalService.getWithdrawals(filters),
  });
}

export function useWithdrawal(id?: number | string) {
  return useQuery({
    queryKey: withdrawalKeys.detail(id!),
    queryFn: () => withdrawalService.getWithdrawal(id!),
    enabled: !!id,
  });
}

export function useWithdrawalStatistics() {
  return useQuery({
    queryKey: withdrawalKeys.statistics(),
    queryFn: () => withdrawalService.getStatistics(),
  });
}

export function useApproveWithdrawal() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: number | string;
      payload: ApproveWithdrawalPayload;
    }) => withdrawalService.approveWithdrawal(id, payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: withdrawalKeys.all,
      });
    },
  });
}

export function useRejectWithdrawal() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: number | string;
      payload: RejectWithdrawalPayload;
    }) => withdrawalService.rejectWithdrawal(id, payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: withdrawalKeys.all,
      });
    },
  });
}

export function useCancelWithdrawal() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: number | string;
      payload: CancelWithdrawalPayload;
    }) => withdrawalService.cancelWithdrawal(id, payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: withdrawalKeys.all,
      });
    },
  });
}

export function useRetryWithdrawal() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: number | string;
      payload: RetryWithdrawalPayload;
    }) => withdrawalService.retryWithdrawal(id, payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: withdrawalKeys.all,
      });
    },
  });
}