"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

interface Props {
  children: React.ReactNode;
}

export default function ProtectedRoute({
  children,
}: Props) {
  const router = useRouter();

  const [ready, setReady] = useState(false);

  useEffect(() => {
    const token = Cookies.get("admin_token");

    if (!token) {
      router.replace("/admin/login");
      return;
    }

    setReady(true);
  }, [router]);

  if (!ready) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  return children;
}