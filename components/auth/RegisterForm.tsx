"use client";

import { useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import {
  registerSchema,
  RegisterFormValues,
} from "@/src/validation/register";

import { register } from "@/src/api/auth";

import RegisterHeader from "./RegisterHeader";
import RegisterSuccess from "./RegisterSuccess";
import CountrySelect from "./CountrySelect";
import PasswordStrength from "./PasswordStrength";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
  Input,
} from "@/components/ui/input";

import {
  Label,
} from "@/components/ui/label";

import {
  Button,
} from "@/components/ui/button";

export default function RegisterForm() {

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const [registeredUser, setRegisteredUser] =
    useState("");

  const {
    register: formRegister,
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),

    defaultValues: {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      phone: "",
      country: "",
      password: "",
      password_confirmation: "",
      referral_code: "",
      terms: true,
    },
  });

  const password = watch("password");

  async function onSubmit(
  data: RegisterFormValues
) {
  try {
    setLoading(true);

    const response = await register({
      first_name: data.first_name,
      last_name: data.last_name,
      username: data.username,
      email: data.email,
      phone: data.phone,
      country: data.country,
      password: data.password,
      password_confirmation:
        data.password_confirmation,
      referral_code:
        data.referral_code || "",
      device_name: "Tunko Web",
    });

    Cookies.set(
      "token",
      response.token,
      {
        expires: 30,
        secure:
          process.env.NODE_ENV ===
          "production",
        sameSite: "strict",
      }
    );

    setRegisteredUser(
      response.user.full_name
    );

    toast.success(
      response.message
    );

    setSuccess(true);

  } catch (error: any) {

    toast.error(
      error?.response?.data?.message ??
      "Registration failed."
    );

  } finally {

    setLoading(false);

  }
}
  if (success) {
    return (
      <RegisterSuccess
        userName={registeredUser}
      />
    );
  }

  return (
    <section className="flex justify-center py-16">

      <Card className="w-full max-w-2xl rounded-3xl border-0 shadow-2xl">

        <CardContent className="p-10">

          <RegisterHeader /><RegisterHeader />

<form
  onSubmit={handleSubmit(onSubmit)}
  className="space-y-6 mt-8"
>

  <div className="grid gap-6 md:grid-cols-2">

    <div className="space-y-2">
      <Label>First Name</Label>

      <Input
        {...formRegister("first_name")}
        placeholder="Abdullahi"
      />

      {errors.first_name && (
        <p className="text-sm text-red-500">
          {errors.first_name.message}
        </p>
      )}
    </div>

    <div className="space-y-2">
      <Label>Last Name</Label>

      <Input
        {...formRegister("last_name")}
        placeholder="Sani"
      />

      {errors.last_name && (
        <p className="text-sm text-red-500">
          {errors.last_name.message}
        </p>
      )}
    </div>

  </div>

  <div className="space-y-2">
    <Label>Username</Label>

    <Input
      {...formRegister("username")}
      placeholder="abdullahi"
    />

    {errors.username && (
      <p className="text-sm text-red-500">
        {errors.username.message}
      </p>
    )}
  </div>

  <div className="space-y-2">
    <Label>Email Address</Label>

    <Input
      type="email"
      {...formRegister("email")}
      placeholder="example@email.com"
    />

    {errors.email && (
      <p className="text-sm text-red-500">
        {errors.email.message}
      </p>
    )}
  </div>

  <div className="space-y-2">
    <Label>Phone Number</Label>

    <Input
      {...formRegister("phone")}
      placeholder="+2348012345678"
    />

    {errors.phone && (
      <p className="text-sm text-red-500">
        {errors.phone.message}
      </p>
    )}
  </div>

  <div className="space-y-2">

    <Label>Country</Label>

    <Controller
      control={control}
      name="country"
      render={({ field }) => (
        <CountrySelect field={field} />
      )}
    />

    {errors.country && (
      <p className="text-sm text-red-500">
        {errors.country.message}
      </p>
    )}

  </div>

  <div className="space-y-2">

    <Label>Password</Label>

    <Input
      type="password"
      {...formRegister("password")}
    />

    {errors.password && (
      <p className="text-sm text-red-500">
        {errors.password.message}
      </p>
    )}

  </div>

  <PasswordStrength password={password} />

  <div className="space-y-2">

    <Label>Confirm Password</Label>

    <Input
      type="password"
      {...formRegister("password_confirmation")}
    />

    {errors.password_confirmation && (
      <p className="text-sm text-red-500">
        {errors.password_confirmation.message}
      </p>
    )}

  </div>

  <div className="space-y-2">

    <Label>
      Referral Code
      <span className="text-slate-400 ml-2">
        (Optional)
      </span>
    </Label>

    <Input
      {...formRegister("referral_code")}
      placeholder="TNKXXXXXX"
    />

  </div>

  <label className="flex items-start gap-3">

    <input
      type="checkbox"
      {...formRegister("terms")}
    />

    <span className="text-sm">

      I agree to the

      <Link
        href="/terms"
        className="mx-1 text-blue-600"
      >
        Terms
      </Link>

      and

      <Link
        href="/privacy"
        className="ml-1 text-blue-600"
      >
        Privacy Policy
      </Link>

    </span>

  </label>

  {errors.terms && (
    <p className="text-sm text-red-500">
      {errors.terms.message}
    </p>
  )}

  <Button
    type="submit"
    disabled={loading}
    className="w-full h-12 rounded-xl"
  >

    {loading ? (
      <>
        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
        Creating Account...
      </>
    ) : (
      "Create Account"
    )}

  </Button>

  <div className="text-center">

    Already have an account?

    <Link
      href="/login"
      className="ml-2 text-blue-600 font-semibold"
    >
      Login
    </Link>

  </div>

</form>

          {/* YOUR FORM GOES HERE */}

        </CardContent>

      </Card>

    </section>
  );
}