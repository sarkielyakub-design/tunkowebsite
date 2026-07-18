"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import Cookies from "js-cookie";

import { login } from "@/src/api/auth";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import PasswordInput from "./PasswordInput";

const loginSchema = z.object({
  login: z
    .string()
    .min(1, "Email, phone or username is required"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),

  remember: z.boolean().default(false).pipe(z.boolean()),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm({
  resolver: zodResolver(loginSchema),

  defaultValues: {
    login: "",
    password: "",
    remember: true,
  },
});

 const onSubmit = async (data: LoginFormValues) => {

    console.log("========== LOGIN START ==========");
    console.log("Form Data:", data);

    try {

        setLoading(true);

        console.log("Calling login API...");

        const response = await login({
            login: data.login,
            password: data.password,
            device_name: "Tunko Web",
        });

        console.log("API Response:", response);

        Cookies.set("token", response.token, {
            expires: data.remember ? 30 : 1,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
        });

        console.log("Token Saved");

        toast.success(response.message);

        console.log("Redirecting to Dashboard...");

        router.push("/dashboard");

    } catch (error: any) {

        console.error("LOGIN ERROR");
        console.error(error);

        if (error.response) {
            console.error("Status:", error.response.status);
            console.error("Response:", error.response.data);
        }

        toast.error(
            error?.response?.data?.message ??
            error?.message ??
            "Unable to login."
        );

    } finally {

        console.log("========== LOGIN END ==========");

        setLoading(false);
    }
};
  return (
    <section className="flex items-center justify-center p-6 lg:p-20">

      <Card className="w-full max-w-md rounded-3xl border-0 shadow-2xl">

        <CardContent className="p-10">

          <div className="mb-8">

            <h1 className="text-4xl font-bold">
              Welcome Back
            </h1>

            <p className="mt-2 text-gray-500">
              Login to continue using Tunko.
            </p>

          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >

            <div>

              <Label>
                Email / Phone / Username
              </Label>

              <Input
                {...register("login")}
                placeholder="Enter email, phone or username"
                className="mt-2 h-12"
              />

              {errors.login && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.login.message}
                </p>
              )}

            </div>

            <PasswordInput
              register={register}
              error={errors.password?.message}
            />

            <div className="flex items-center justify-between">

              <label className="flex items-center gap-2">

                <input
                  type="checkbox"
                  {...register("remember")}
                />

                <span className="text-sm">
                  Remember Me
                </span>

              </label>

              <Link
                href="/forgot-password"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Forgot Password?
              </Link>

            </div>

            <Button
              disabled={loading}
              className="h-12 w-full rounded-xl text-base"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />

                  Signing In...
                </>
              ) : (
                "Sign In"
              )}
            </Button>

          </form>

          <div className="mt-8 text-center">

            <p className="text-gray-500">

              Don't have an account?

              <Link
                href="/register"
                className="ml-2 font-semibold text-blue-600 hover:underline"
              >
                Create Account
              </Link>

            </p>

          </div>

        </CardContent>

      </Card>

    </section>
  );
}