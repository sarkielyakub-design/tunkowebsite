import adminApi from "@/lib/admin-api";

class DashboardService {
  async getDashboard() {
    const response = await adminApi.get("/dashboard");
    return response.data;
  }
}

export default new DashboardService();