
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import AdminAuthService from "@/src/services/admin/auth.service";
import { useAuthStore } from "@/src/store/admin/auth-store";

export default function AdminAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [checking, setChecking] = useState(true);

  const setSession = useAuthStore((state) => state.setSession);
  const logout = useAuthStore((state) => state.logout);

  useEffect(() => {
    let active = true;

    const verifyAdmin = async () => {
      const token = AdminAuthService.getToken();

      if (!token) {
        if (active) {
          logout();
          router.replace("/admin/login");
        }
        return;
      }

      try {
        const admin = await AdminAuthService.profile();

        if (!active) return;

        if (admin.status === false) {
          AdminAuthService.clearSession();
          logout();
          router.replace("/admin/login");
          return;
        }

        setSession(token, admin);
        setChecking(false);
      } catch (error) {
        if (!active) return;

        if (
          axios.isAxiosError(error) &&
          [401, 403].includes(error.response?.status ?? 0)
        ) {
          AdminAuthService.clearSession();
          logout();
          router.replace("/admin/login");
          return;
        }

        // Do not destroy a valid-looking session because of
        // a temporary network error or backend server failure.
        setChecking(false);
      }
    };

    verifyAdmin();

    return () => {
      active = false;
    };
  }, [router, setSession, logout]);

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
          <p className="mt-4 text-sm text-gray-500">
            Verifying administrator session...
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
