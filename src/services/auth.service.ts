import Cookies from "js-cookie";
import api from "@/src/lib/api";

class AuthService {

  async register(data: any) {
    const res = await api.post("/register", data);
    return res.data;
  }

  async login(data: any) {
    const res = await api.post("/login", data);

    Cookies.set("token", res.data.token, {
      expires: 7,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    return res.data;
  }

  async logout() {
    await api.post("/logout");
    Cookies.remove("token");
  }

  async me() {
    const res = await api.get("/me");
    return res.data;
  }

  async forgotPassword(email: string) {
    return api.post("/password/forgot", { email });
  }

  async resetPassword(data: any) {
    return api.post("/password/reset", data);
  }

  async sendOtp(phone: string) {
    return api.post("/otp/send", { phone });
  }

  async verifyOtp(data: any) {
    return api.post("/otp/verify", data);
  }
}

export default new AuthService();