"use client";

import { Bell, Globe, Menu, Search } from "lucide-react";
import Image from "next/image";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import type { DashboardUser } from "@/src/api/dashboard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface DashboardHeaderProps {
  user?: DashboardUser | null;
}

export default function DashboardHeader({ user }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Left */}
        <div className="flex items-center gap-4">

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </Button>

          <div className="flex items-center gap-3">

            <Image
              src="/logo.png"
              alt="Tunko"
              width={42}
              height={42}
              priority
            />

            <div>

              <h1 className="text-xl font-bold text-blue-700">
                Tunko
              </h1>

              <p className="text-xs text-slate-500">
                Money Transfer
              </p>

            </div>

          </div>

        </div>

        {/* Search */}

        <div className="hidden w-full max-w-md lg:block">

          <div className="relative">

            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

            <Input
              placeholder="Search transactions..."
              className="h-11 rounded-full pl-12"
            />

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-3">

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
          >
            <Globe className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="relative rounded-full"
          >
            <Bell className="h-5 w-5" />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
          </Button>

          <Avatar className="h-11 w-11">
            <AvatarFallback className="bg-blue-600 font-bold text-white">
              {(() => {
                if (!user) return "AS";

                const first = user.first_name?.trim()?.[0] ?? "";
                const last = user.last_name?.trim()?.[0] ?? "";

                return (first + last).toUpperCase() || "AS";
              })()}
            </AvatarFallback>

          </Avatar>

        </div>

      </div>
    </header>
  );
}