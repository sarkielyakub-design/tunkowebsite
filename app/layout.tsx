import type { Metadata } from "next";
import "./globals.css";

import { Toaster } from "sonner";

import QueryProvider from "@/src/providers/query-provider";
import { I18nProvider } from "@/src/i18n/I18nProvider";

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
        <I18nProvider>
          <QueryProvider>
            {children}

            <Toaster
            position="top-right"
            richColors
            closeButton
            duration={4000}
            />
          </QueryProvider>
        </I18nProvider>
      </body>
    </html>
  );
}