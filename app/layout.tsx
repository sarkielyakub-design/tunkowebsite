import type { Metadata } from "next";
import "./globals.css";

import { Toaster } from "sonner";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import QueryProvider from "@/src/providers/query-provider";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

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
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <QueryProvider>
          {children}

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