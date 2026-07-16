import api from "@/src/lib/api";

class DashboardService {
  async getDashboard() {
    const response = await api.get("/dashboard");
    return response.data;
  }
}

export default new DashboardService();