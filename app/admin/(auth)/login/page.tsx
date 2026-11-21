
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  Eye,
  EyeOff,
  Loader2,
  Shield,
  AlertCircle,
} from "lucide-react";

import { useLogin } from "@/src/hooks/admin/useAuth";
import { useAuthStore } from "@/src/store/admin/auth-store";

interface LoginForm {
  email: string;
  password: string;
}

export default function AdminLoginPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  const loginMutation = useLogin();

  const { setAdmin, setToken } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit = (values: LoginForm) => {
    setLoginError("");

    loginMutation.mutate(values, {
      onSuccess: (response) => {
        if (!response?.token || !response?.admin) {
          setLoginError(
            "Login response is incomplete. Please contact support."
          );
          return;
        }

        // Save authenticated administrator
        setToken(response.token);
        setAdmin(response.admin);

        // Redirect to dashboard
        router.replace("/admin/dashboard");
      },

      onError: (error: unknown) => {
        const apiError = error as {
          response?: {
            data?: {
              message?: string;
              errors?: Record<string, string[]>;
            };
          };
          message?: string;
        };

        const message =
          apiError.response?.data?.message ||
          apiError.response?.data?.errors?.email?.[0] ||
          apiError.message ||
          "Unable to login. Please try again.";

        setLoginError(message);
      },
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600">
            <Shield className="h-8 w-8 text-white" />
          </div>

          <h1 className="text-3xl font-bold text-slate-900">
            Tunko Admin
          </h1>

          <p className="mt-2 text-slate-500">
            Sign in to continue
          </p>
        </div>

        {/* Login Error */}
        {loginError && (
          <div
            role="alert"
            className="mb-5 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
          >
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />

            <p>{loginError}</p>
          </div>
        )}

        {/* Login Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Email
            </label>

            <input
              type="email"
              autoComplete="username"
              disabled={loginMutation.isPending}
              {...register("email", {
                required: "Email is required",
              })}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:bg-slate-100"
              placeholder="admin@tunkomoney.com"
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                disabled={loginMutation.isPending}
                {...register("password", {
                  required: "Password is required",
                })}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-12 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:bg-slate-100"
                placeholder="Enter your password"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword((previous) => !previous)
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
                aria-label={
                  showPassword ? "Hide password" : "Show password"
                }
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>

            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loginMutation.isPending}
            className="flex w-full items-center justify-center rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loginMutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Signing in...
              </>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-slate-400">
          Secure Tunko Administration Portal
        </p>
      </div>
    </div>
  );
}
