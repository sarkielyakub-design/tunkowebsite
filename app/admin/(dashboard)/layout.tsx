import type { Metadata, Viewport } from "next";
import { Suspense } from "react";

import QueryProvider from "@/src/providers/query-provider";
import AdminAuthProvider from "@/src/providers/admin-auth-provider";
import AdminLayout from "@/src/features/admin/layout/AdminLayout";

export const metadata: Metadata = {
  title: {
    default: "Tunko Admin",
    template: "%s | Tunko Admin",
  },
  description: "Tunko Administration Dashboard",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563eb",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryProvider>
      <AdminAuthProvider>
        <Suspense
          fallback={
            <div className="flex h-screen items-center justify-center bg-gray-50">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
            </div>
          }
        >
          <AdminLayout>
            {children}
          </AdminLayout>
        </Suspense>
      </AdminAuthProvider>
    </QueryProvider>
  );
}