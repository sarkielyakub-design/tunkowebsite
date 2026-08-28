import type { Metadata, Viewport } from "next";

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

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryProvider>
      <AdminAuthProvider>
        <AdminLayout>{children}</AdminLayout>
      </AdminAuthProvider>
    </QueryProvider>
  );
}