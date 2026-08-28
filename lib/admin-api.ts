import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import Cookies from "js-cookie";

const adminApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 60000,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// ============================================================
// REQUEST INTERCEPTOR
// ============================================================

adminApi.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = Cookies.get("admin_token");

    if (token) {
      config.headers.set(
        "Authorization",
        `Bearer ${token}`
      );
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// ============================================================
// RESPONSE INTERCEPTOR
// ============================================================

adminApi.interceptors.response.use(
  (response: AxiosResponse) => response,

  (error: AxiosError) => {
    const status = error.response?.status;

    if (status === 401) {
      console.error(
        "Admin API authentication failed:",
        error.config?.url
      );

      Cookies.remove("admin_token", {
        path: "/",
      });

      Cookies.remove("admin_name", {
        path: "/",
      });

      if (
        typeof window !== "undefined" &&
        window.location.pathname !== "/admin/login"
      ) {
        window.location.href = "/admin/login";
      }
    }

    if (status === 403) {
      console.error("Admin API permission denied.");
    }

    if (status === 404) {
      console.error("Admin API resource not found.");
    }

    if (status === 422) {
      console.error(
        "Admin API validation error:",
        error.response?.data
      );
    }

    if (status === 500) {
      console.error("Admin API internal server error.");
    }

    return Promise.reject(error);
  }
);

export default adminApi;