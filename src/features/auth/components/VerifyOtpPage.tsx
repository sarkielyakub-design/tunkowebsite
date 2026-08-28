"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import { verifyOtp, resendOtp } from "@/src/api/otp";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function VerifyOtpPage() {
  const router = useRouter();

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);

  async function handleVerify() {
    if (otp.length !== 6) {
      toast.error("Please enter the 6-digit OTP.");
      return;
    }

    try {
      setLoading(true);

      const response = await verifyOtp(otp);

      toast.success(
        response.message ?? "OTP verified successfully."
      );

      router.push("/dashboard");
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message ??
          "Invalid or expired OTP."
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleResend() {
    try {
      setResending(true);

      const response = await resendOtp();

      toast.success(
        response.message ?? "OTP sent successfully."
      );
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message ??
          "Unable to resend OTP."
      );
    } finally {
      setResending(false);
    }
  }

  return (
    <section className="flex justify-center py-20">
      <Card className="w-full max-w-md rounded-3xl shadow-xl">
        <CardContent className="space-y-6 p-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold">
              Verify OTP
            </h1>

            <p className="mt-2 text-slate-500">
              Enter the 6-digit verification code sent to your
              email.
            </p>
          </div>

          <Input
            type="text"
            inputMode="numeric"
            value={otp}
            onChange={(e) =>
              setOtp(
                e.target.value.replace(/\D/g, "").slice(0, 6)
              )
            }
            placeholder="123456"
            maxLength={6}
            className="h-12 text-center text-2xl tracking-[12px]"
          />

          <Button
            onClick={handleVerify}
            disabled={loading}
            className="h-12 w-full"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Verifying...
              </>
            ) : (
              "Verify OTP"
            )}
          </Button>

          <Button
            type="button"
            variant="ghost"
            onClick={handleResend}
            disabled={resending}
            className="w-full text-blue-600"
          >
            {resending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Resend Code"
            )}
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}