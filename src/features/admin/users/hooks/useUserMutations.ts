import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  freezeUser,
  unfreezeUser,
  resetPassword,
  resetPin,
  creditWallet,
  debitWallet,
} from "../api/users";

export const useFreezeUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: freezeUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin-users"],
      });
    },
  });
};

export const useUnfreezeUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: unfreezeUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin-users"],
      });
    },
  });
};

export const useResetPassword = () =>
  useMutation({
    mutationFn: resetPassword,
  });

export const useResetPin = () =>
  useMutation({
    mutationFn: resetPin,
  });

export const useCreditWallet = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: number;
      payload: any;
    }) => creditWallet(id, payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin-users"],
      });
    },
  });
};

export const useDebitWallet = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: number;
      payload: any;
    }) => debitWallet(id, payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin-users"],
      });
    },
  });
};