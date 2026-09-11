"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import AdminAuthService from "@/src/services/admin/auth.service";

export default function AdminAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      // Login page does not require authentication
      if (pathname === "/admin/login") {
        setLoading(false);
        return;
      }

      // Only check whether a local admin session exists.
      // Do NOT call /admin/profile here.
      if (!AdminAuthService.isLoggedIn()) {
        router.replace("/admin/login");
        return;
      }

      setLoading(false);
    };

    checkAuth();
  }, [pathname, router]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
      </div>
    );
  }

  return <>{children}</>;
}