import Cookies from "js-cookie";
import adminApi from "@/lib/admin-api";

export interface LoginPayload {
  email: string;
  password: string;
}

class AdminAuthService {
  /**
   * Admin Login
   */
  async login(data: LoginPayload) {
    const response = await adminApi.post("/admin/login", data);

    const { token, admin } = response.data;

    if (!token) {
      throw new Error("Admin login succeeded but no token was returned.");
    }

    Cookies.set("admin_token", token, {
      expires: 7,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    if (admin?.name) {
      Cookies.set("admin_name", admin.name, {
        expires: 7,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });
    }

    return response.data;
  }

  /**
   * Admin Logout
   */
  async logout() {
    try {
      await adminApi.post("/admin/logout");
    } finally {
      Cookies.remove("admin_token");
      Cookies.remove("admin_name");
    }
  }

  /**
   * Check whether an admin token exists
   */
  isLoggedIn() {
    return Boolean(Cookies.get("admin_token"));
  }

  /**
   * Get saved admin token
   */
  getToken() {
    return Cookies.get("admin_token") ?? null;
  }

  /**
   * Get saved admin name
   */
  getAdminName() {
    return Cookies.get("admin_name") ?? null;
  }
}

export default new AdminAuthService();