import Cookies from "js-cookie";
import adminApi from "@/lib/admin-api";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AdminLoginResponse {
  success: boolean;
  token: string;
  admin: {
    id: number;
    name: string;
    email: string;
    phone?: string;
    avatar?: string | null;
    status?: boolean;
  };
}

class AdminAuthService {
  // ============================================================
  // LOGIN
  // ============================================================

  async login(data: LoginPayload): Promise<AdminLoginResponse> {
    const response = await adminApi.post<AdminLoginResponse>(
      "/admin/login",
      data
    );

    const { token, admin } = response.data;

    if (!token) {
      throw new Error("Login succeeded but no authentication token was returned.");
    }

    Cookies.set("admin_token", token, {
      expires: 7,
      secure: window.location.protocol === "https:",
      sameSite: "strict",
      path: "/",
    });

    if (admin?.name) {
      Cookies.set("admin_name", admin.name, {
        expires: 7,
        secure: window.location.protocol === "https:",
        sameSite: "strict",
        path: "/",
      });
    }

    return response.data;
  }

  // ============================================================
  // LOGOUT
  // ============================================================

  async logout() {
    try {
      await adminApi.post("/admin/logout");
    } finally {
      Cookies.remove("admin_token", {
        path: "/",
      });

      Cookies.remove("admin_name", {
        path: "/",
      });
    }
  }

  // ============================================================
  // CURRENT ADMIN PROFILE
  // ============================================================

  async profile() {
    const response = await adminApi.get("/admin/profile");

    return response.data.data;
  }

  // ============================================================
  // LOCAL AUTH CHECK
  // ============================================================

  isLoggedIn() {
    return Boolean(Cookies.get("admin_token"));
  }

  // ============================================================
  // CLEAR SESSION
  // ============================================================

  clearSession() {
    Cookies.remove("admin_token", {
      path: "/",
    });

    Cookies.remove("admin_name", {
      path: "/",
    });
  }
}

export default new AdminAuthService();