
import { create } from "zustand";

export interface Admin {
  id: number;
  name?: string;
  first_name?: string;
  last_name?: string;
  email: string;
  phone?: string;
  avatar?: string | null;
  status?: boolean;
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
  setSession: (token: string, admin: Admin) => void;
  setLoading: (loading: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  admin: null,
  token: null,
  isAuthenticated: false,
  loading: true,

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

  setSession: (token, admin) =>
    set({
      token,
      admin,
      isAuthenticated: true,
      loading: false,
    }),

  setLoading: (loading) => set({ loading }),

  logout: () =>
    set({
      admin: null,
      token: null,
      isAuthenticated: false,
      loading: false,
    }),
}));
