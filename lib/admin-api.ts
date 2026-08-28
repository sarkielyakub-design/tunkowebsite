import axios from "axios";

const adminApi = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_ADMIN_API_URL ||
    "https://api.tunkomoney.com/api",

  timeout: 60000,

  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

adminApi.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("admin_token");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

adminApi.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error.response?.status === 401) {
      if (typeof window !== "undefined") {
        localStorage.removeItem("admin_token");
      }
    }

    return Promise.reject(error);
  }
);

export default adminApi;