import Cookies from "js-cookie";
import adminApi from "@/src/lib/admin-api";

export interface LoginPayload {
  email: string;
  password: string;
}

class AdminAuthService {
  async login(data: LoginPayload) {
    const response = await adminApi.post("/login", data);

    const { token, admin } = response.data;

    Cookies.set("admin_token", token, {
      expires: 7,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    Cookies.set("admin_name", admin.name);

    return response.data;
  }

  async logout() {
    await adminApi.post("/logout");

    Cookies.remove("admin_token");
    Cookies.remove("admin_name");
  }

  async profile() {
    const response = await adminApi.get("/profile");

    return response.data.data;
  }

  isLoggedIn() {
    return !!Cookies.get("admin_token");
  }
}

export default new AdminAuthService();