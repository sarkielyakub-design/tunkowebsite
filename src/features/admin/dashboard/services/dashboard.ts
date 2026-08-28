import adminApi from "@/lib/admin-api";
import { DashboardResponse } from "../types/dashboard";

export const getDashboard =
async (): Promise<DashboardResponse> => {

    const { data } =
        await adminApi.get<DashboardResponse>(
            "/admin/dashboard"
        );

    return data;

};