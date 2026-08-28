"use client";

import { useEffect } from "react";
import { me } from "@/src/api/auth";
import { useAuthStore } from "@/src/store/customer/authStore";

export default function useAuth() {
  const { user, setUser } = useAuthStore();

  useEffect(() => {
    if (user) return;

    async function loadUser() {
      try {
        const response = await me();

        setUser(response.user);
      } catch {
        // Not authenticated
      }
    }

    loadUser();
  }, [user, setUser]);

  return user;
}