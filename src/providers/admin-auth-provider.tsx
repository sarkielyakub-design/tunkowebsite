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
        async function check() {
            try {
                if (!AdminAuthService.isLoggedIn()) {
                    router.replace("/admin/login");
                    return;
                }

                await AdminAuthService.profile();

                setLoading(false);
            } catch {
                router.replace("/admin/login");
            }
        }

        check();
    }, [router]);

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center">
                Loading...
            </div>
        );
    }

    return children;
}