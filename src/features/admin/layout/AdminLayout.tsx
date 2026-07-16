"use client";

import { ReactNode } from "react";

import Sidebar from "@/src/components/sidebar/Sidebar";
import Header from "@/src/components/header/Header";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({
  children,
}: AdminLayoutProps) {
  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex min-h-screen flex-1 flex-col overflow-hidden">

        {/* <Header /> */}

        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>

      </div>

    </div>
  );
}