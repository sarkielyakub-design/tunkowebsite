import api from "@/lib/axios";

export interface LoginRequest {
  login: string;
  password: string;
  device_name?: string;
}

export interface RegisterRequest {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  phone: string;
  country: string;
  password: string;
  password_confirmation: string;
  referral_code?: string;
  device_name?: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  token: string;
  user: any;
}

export async function login(
  payload: LoginRequest
): Promise<AuthResponse> {
  const { data } = await api.post("/login", payload);

  return data;
}

export async function register(
  payload: RegisterRequest
): Promise<AuthResponse> {
  const { data } = await api.post(
    "/register",
    payload
  );

  return data;
}

export async function logout() {
  const { data } = await api.post("/logout");

  return data;
}

export async function forgotPassword(
  email: string
) {
  const { data } = await api.post(
    "/password/forgot",
    {
      email,
    }
  );

  return data;
}

export async function resetPassword(
  payload: any
) {
  const { data } = await api.post(
    "/password/reset",
    payload
  );

  return data;
}

export async function me() {
  const { data } = await api.get("/me");

  return data;
}