"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

interface RegisterSuccessProps {
  userName: string;
}

export default function RegisterSuccess({
  userName,
}: RegisterSuccessProps) {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/verify-otp");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex min-h-[600px] items-center justify-center">
      <div className="w-full max-w-md rounded-3xl bg-white p-10 text-center shadow-2xl">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100">

          <CheckCircle2 className="h-14 w-14 text-green-600" />

        </div>

        <h1 className="mt-8 text-3xl font-bold text-slate-900">
          Registration Successful 🎉
        </h1>

        <p className="mt-4 text-slate-600">
          Welcome to <strong>Tunko</strong>,
          <br />
          <span className="font-semibold text-slate-900">
            {userName}
          </span>
        </p>

        <p className="mt-6 text-sm leading-7 text-slate-500">
          Your account has been created successfully.
          <br />
          We're preparing your wallet and sending a verification code
          to your email or phone.
        </p>

        <div className="mt-10">

          <div className="mx-auto h-2 w-full overflow-hidden rounded-full bg-slate-200">

            <div className="h-full w-full animate-pulse rounded-full bg-blue-600" />

          </div>

          <p className="mt-4 text-sm text-slate-500">
            Redirecting to OTP Verification...
          </p>

        </div>

      </div>
    </div>
  );
}