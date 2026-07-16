import { useQuery } from "@tanstack/react-query";
import DashboardService from "@/src/services/admin/dashboard.service";

export function useDashboard() {
  return useQuery({
    queryKey: ["admin-dashboard"],
    queryFn: DashboardService.getDashboard,
    staleTime: 60000,
  });
}