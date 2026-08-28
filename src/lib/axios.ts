import { create } from "zustand";

export interface Admin {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  avatar?: string | null;

  role?: {
    id: number;
    name: string;
  };

  permissions?: string[];
}

interface AuthStore {
  admin: Admin | null;

  token: string | null;

  isAuthenticated: boolean;

  loading: boolean;

  setAdmin: (admin: Admin) => void;

  setToken: (token: string) => void;

  login: (
    admin: Admin,
    token: string
  ) => void;

  setLoading: (loading: boolean) => void;

  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  admin: null,

  token: null,

  isAuthenticated: false,

  loading: false,

  setAdmin: (admin) =>
    set({
      admin,
      isAuthenticated: true,
    }),

  setToken: (token) =>
    set({
      token,
      isAuthenticated: true,
    }),

  login: (admin, token) =>
    set({
      admin,
      token,
      isAuthenticated: true,
    }),

  setLoading: (loading) =>
    set({
      loading,
    }),

  logout: () =>
    set({
      admin: null,
      token: null,
      isAuthenticated: false,
      loading: false,
    }),
}));