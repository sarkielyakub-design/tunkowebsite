"use client";

import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";

import { me } from "@/src/api/auth";
import { useAuthStore } from "@/src/store/customer/authStore";

export default function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();

  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    const publicRoutes = [
      "/",
      "/login",
      "/register",
      "/forgot-password",
    ];

    if (publicRoutes.includes(pathname)) return;

    const token = Cookies.get("token");

    if (!token) return;

    if (user) return;

    const loadUser = async () => {
      try {
        const response = await me();

        if (response.success) {
          setUser(response.user);
        }
      } catch {
        Cookies.remove("token");
      }
    };

    loadUser();
  }, [pathname, user, setUser]);

  return <>{children}</>;
}