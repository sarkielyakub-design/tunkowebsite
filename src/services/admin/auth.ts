
import Cookies from "js-cookie";
import adminApi from "@/lib/admin-api";
import { Admin } from "@/src/store/admin/auth-store";

export interface AdminLoginPayload {
  email: string;
  password: string;
}

export interface AdminLoginResponse {
  success: boolean;
  message: string;
  data: {
    token: string;
    token_type: string;
    admin: Admin;
  };
}

export interface AdminProfileResponse {
  success: boolean;
  message: string;
  data: Admin;
}

export interface ForgotPasswordPayload {
  email: string;
}

export interface ResetPasswordPayload {
  token: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export const login = async (payload: AdminLoginPayload) => {
  const { data } = await adminApi.post<AdminLoginResponse>(
    "/admin/login",
    payload
  );

  if (!data.success || !data.data?.token || !data.data?.admin) {
    throw new Error(data.message || "Invalid login response.");
  }

  const { token, admin } = data.data;

  Cookies.set("admin_token", token, {
    expires: 7,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
  });

  Cookies.set("admin_name", JSON.stringify(admin), {
    expires: 7,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
  });

  return {
    success: data.success,
    message: data.message,
    token,
    admin,
  };
};

export const logout = async (): Promise<void> => {
  try {
    await adminApi.post("/admin/logout");
  } finally {
    Cookies.remove("admin_token", { path: "/" });
    Cookies.remove("admin_name", { path: "/" });
  }
};

export const profile = async (): Promise<Admin> => {
  const { data } = await adminApi.get<AdminProfileResponse>(
    "/admin/profile"
  );

  return data.data;
};

export const isLoggedIn = (): boolean => {
  return Boolean(Cookies.get("admin_token"));
};

export const forgotPassword = async (payload: ForgotPasswordPayload) => {
  const { data } = await adminApi.post("/admin/forgot-password", payload);
  return data;
};

export const resetPassword = async (payload: ResetPasswordPayload) => {
  const { data } = await adminApi.post("/admin/reset-password", payload);
  return data;
};
