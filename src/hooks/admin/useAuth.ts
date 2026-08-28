import { useMutation, useQuery } from "@tanstack/react-query";
import * as AuthService from "@/src/services/admin/auth";

export const useLogin = () =>
  useMutation({
    mutationFn: AuthService.login,
  });

export const useLogout = () =>
  useMutation({
    mutationFn: AuthService.logout,
  });

export const useProfile = () =>
  useQuery({
    queryKey: ["admin-profile"],
    queryFn: AuthService.me,
    retry: false,
  });