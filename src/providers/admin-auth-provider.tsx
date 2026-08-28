"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminAuthService from "@/src/services/admin/auth.service";

export default function AdminAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!AdminAuthService.isLoggedIn()) {
      router.replace("/admin/login");
      return;
    }

    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />

          <p className="text-sm font-medium text-slate-500">
            Loading admin panel...
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}