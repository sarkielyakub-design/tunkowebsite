import { useMutation } from "@tanstack/react-query";
import AdminAuthService from "@/src/services/admin/auth.service";

export function useAdminLogin() {
    return useMutation({
        mutationFn: AdminAuthService.login,
    });
}