"use client";

import { useAuthStore } from "@/src/store/admin-auth-store";

interface Props {
  permission: string;
  children: React.ReactNode;
}

export default function Can({
  permission,
  children,
}: Props) {
  const admin = useAuthStore(
    (state) => state.admin
  );

  if (!admin) return null;

  if (
    admin.permissions?.includes(
      permission
    )
  ) {
    return <>{children}</>;
  }

  return null;
}