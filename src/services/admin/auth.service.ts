
import Cookies from "js-cookie";
import adminApi from "@/lib/admin-api";
import type { Admin } from "@/src/store/admin/auth-store";

export interface LoginPayload {
  email: string;
  password: string;
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

interface LoginData {
  token: string;
  token_type: string;
  admin: Admin;
}

class AdminAuthService {
  async login(payload: LoginPayload) {
    const response = await adminApi.post<ApiResponse<LoginData>>(
      "/admin/login",
      payload
    );

    const result = response.data.data;

    if (!response.data.success || !result?.token || !result?.admin) {
      throw new Error(response.data.message || "Invalid login response.");
    }

    Cookies.set("admin_token", result.token, {
      expires: 7,
      secure: window.location.protocol === "https:",
      sameSite: "strict",
      path: "/",
    });

    Cookies.set("admin_name", JSON.stringify(result.admin), {
      expires: 7,
      secure: window.location.protocol === "https:",
      sameSite: "strict",
      path: "/",
    });

    return result;
  }

  async logout() {
    try {
      await adminApi.post("/admin/logout");
    } finally {
      this.clearSession();
    }
  }

  async profile(): Promise<Admin> {
    const response = await adminApi.get<ApiResponse<Admin>>(
      "/admin/profile"
    );

    if (!response.data.success || !response.data.data) {
      throw new Error("Unable to retrieve administrator profile.");
    }

    return response.data.data;
  }

  getToken(): string | undefined {
    return Cookies.get("admin_token");
  }

  isLoggedIn(): boolean {
    return Boolean(this.getToken());
  }

  clearSession(): void {
    Cookies.remove("admin_token", { path: "/" });
    Cookies.remove("admin_name", { path: "/" });
  }
}

export default new AdminAuthService();
