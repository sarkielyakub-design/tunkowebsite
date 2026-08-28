import { useMutation } from "@tanstack/react-query";
import * as AuthService from "@/src/services/admin/auth";

/**
 * Admin Login
 */
export const useLogin = () =>
  useMutation({
    mutationFn: AuthService.login,
  });

/**
 * Admin Logout
 */
export const useLogout = () =>
  useMutation({
    mutationFn: AuthService.logout,
  });

/**
 * Forgot Admin Password
 */
export const useForgotPassword = () =>
  useMutation({
    mutationFn: AuthService.forgotPassword,
  });

/**
 * Reset Admin Password
 */
export const useResetPassword = () =>
  useMutation({
    mutationFn: AuthService.resetPassword,
  });