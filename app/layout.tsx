import type { Metadata } from "next";
import "./globals.css";

import { Toaster } from "sonner";

import QueryProvider from "@/src/providers/query-provider";

import Navbar from "@/components/home/header/Navbar";
import Footer from "@/components/home/footer/Footer";

export const metadata: Metadata = {
  title: "Tunko Money Transfer",
  description: "Fast, Secure & Reliable International Money Transfer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased font-sans">
        <QueryProvider>

          <Navbar />

          {children}

          <Footer />

          <Toaster
            position="top-right"
            richColors
            closeButton
            duration={4000}
          />

        </QueryProvider>
      </body>
    </html>
  );
}