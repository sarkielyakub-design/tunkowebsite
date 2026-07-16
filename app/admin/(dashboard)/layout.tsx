import type { Metadata } from "next";

import QueryProvider from "@/src/providers/query-provider";
import AdminAuthProvider from "@/src/providers/admin-auth-provider";
import AdminLayout from "@/src/features/admin/layout/AdminLayout";

export const metadata: Metadata = {
  title: "Tunko Admin",
  description: "Tunko Admin Dashboard",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryProvider>
      <AdminAuthProvider>
        <AdminLayout>
          {children}
        </AdminLayout>
      </AdminAuthProvider>
    </QueryProvider>
  );
}