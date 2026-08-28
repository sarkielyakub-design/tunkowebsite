import { useQuery } from "@tanstack/react-query";
import AuthService from "@/src/services/auth.service";

export function useMe() {
  return useQuery({
    queryKey: ["me"],
    queryFn: AuthService.me,
    retry: false,
  });
}