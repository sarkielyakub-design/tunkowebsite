"use client";

import Link from "next/link";
import { Eye, EyeOff, Shield } from "lucide-react";
import { useState } from "react";

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] =
    useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">

      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">

        <div className="mb-8 text-center">

          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">

            <Shield className="h-10 w-10 text-blue-600" />

          </div>

          <h1 className="text-3xl font-bold">
            Tunko Admin
          </h1>

          <p className="mt-2 text-slate-500">
            Sign in to continue
          </p>

        </div>

        <form className="space-y-5">

          <div>

            <label className="mb-2 block font-medium">
              Email Address
            </label>

            <input
              type="email"
              placeholder="admin@tunko.com"
              className="h-12 w-full rounded-xl border px-4 outline-none focus:border-blue-600"
            />

          </div>

          <div>

            <label className="mb-2 block font-medium">
              Password
            </label>

            <div className="relative">

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="••••••••"
                className="h-12 w-full rounded-xl border px-4 pr-12 outline-none focus:border-blue-600"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="absolute right-4 top-3"
              >
                {showPassword ? (
                  <EyeOff />
                ) : (
                  <Eye />
                )}
              </button>

            </div>

          </div>

          <div className="flex items-center justify-between">

            <label className="flex items-center gap-2 text-sm">

              <input type="checkbox" />

              Remember Me

            </label>

            <Link
              href="#"
              className="text-sm text-blue-600"
            >
              Forgot Password?
            </Link>

          </div>

          <button
            className="h-12 w-full rounded-xl bg-blue-600 font-semibold text-white transition hover:bg-blue-700"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}