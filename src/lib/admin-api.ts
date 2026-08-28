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

/**
 * Request Interceptor
 */
adminApi.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {

    const token = Cookies.get("admin_token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * Response Interceptor
 */
adminApi.interceptors.response.use(
  (response: AxiosResponse) => response,

  (error: AxiosError<any>) => {

    switch (error.response?.status) {

      case 401:

        Cookies.remove("admin_token");

        if (typeof window !== "undefined") {
          window.location.href = "/admin/login";
        }

        break;

      case 403:

        console.error("Permission denied.");

        break;

      case 404:

        console.error("Resource not found.");

        break;

      case 422:

        console.error(error.response?.data);

        break;

      case 500:

        console.error("Internal server error.");

        break;
    }

    return Promise.reject(error);
  }
);

export default adminApi;