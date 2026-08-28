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
  token: string;
  admin: Admin;
}

export interface AdminProfileResponse {
  success: boolean;
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

/**
 * Login
 */
export const login = async (
  payload: AdminLoginPayload
): Promise<AdminLoginResponse> => {
  const { data } = await adminApi.post<AdminLoginResponse>(
    "/admin/login",
    payload
  );

  Cookies.set("admin_token", data.token, {
    expires: 7,
    sameSite: "strict",
  });

  return data;
};

/**
 * Logout
 */
export const logout = async (): Promise<void> => {
  try {
    await adminApi.post("/admin/logout");
  } finally {
    Cookies.remove("admin_token");
  }
};

/**
 * Current Admin Profile
 */
export const me = async (): Promise<AdminProfileResponse> => {
  const { data } = await adminApi.get<AdminProfileResponse>(
    "/admin/profile"
  );

  return data;
};

/**
 * Forgot Password
 */
export const forgotPassword = async (
  payload: ForgotPasswordPayload
) => {
  const { data } = await adminApi.post(
    "/admin/forgot-password",
    payload
  );

  return data;
};

/**
 * Reset Password
 */
export const resetPassword = async (
  payload: ResetPasswordPayload
) => {
  const { data } = await adminApi.post(
    "/admin/reset-password",
    payload
  );

  return data;
};