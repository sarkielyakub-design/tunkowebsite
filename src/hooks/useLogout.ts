import { useMutation } from "@tanstack/react-query";
import AuthService from "@/src/services/auth.service";

export function useLogout() {
  return useMutation({
    mutationFn: AuthService.logout,
  });
}