"use client";

import { CheckCircle2, XCircle } from "lucide-react";

interface Props {
  password: string;
}

export default function PasswordStrength({
  password,
}: Props) {
  const checks = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };

  const score = Object.values(checks).filter(Boolean).length;

  const getStrength = () => {
    if (score <= 1)
      return {
        text: "Weak",
        color: "bg-red-500",
      };

    if (score === 2)
      return {
        text: "Fair",
        color: "bg-orange-500",
      };

    if (score === 3)
      return {
        text: "Good",
        color: "bg-yellow-500",
      };

    if (score === 4)
      return {
        text: "Strong",
        color: "bg-blue-500",
      };

    return {
      text: "Very Strong",
      color: "bg-green-600",
    };
  };

  const strength = getStrength();

  return (
    <div className="space-y-4">

      <div>

        <div className="mb-2 flex items-center justify-between">

          <span className="text-sm font-medium">
            Password Strength
          </span>

          <span className="text-sm font-semibold">
            {strength.text}
          </span>

        </div>

        <div className="h-2 overflow-hidden rounded-full bg-slate-200">

          <div
            className={`h-full transition-all duration-300 ${strength.color}`}
            style={{
              width: `${(score / 5) * 100}%`,
            }}
          />

        </div>

      </div>

      <div className="grid gap-2 text-sm">

        <Requirement
          passed={checks.length}
          text="Minimum 8 characters"
        />

        <Requirement
          passed={checks.uppercase}
          text="One uppercase letter"
        />

        <Requirement
          passed={checks.lowercase}
          text="One lowercase letter"
        />

        <Requirement
          passed={checks.number}
          text="One number"
        />

        <Requirement
          passed={checks.special}
          text="One special character"
        />

      </div>

    </div>
  );
}

function Requirement({
  passed,
  text,
}: {
  passed: boolean;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2">

      {passed ? (
        <CheckCircle2
          className="h-4 w-4 text-green-600"
        />
      ) : (
        <XCircle
          className="h-4 w-4 text-slate-400"
        />
      )}

      <span
        className={
          passed
            ? "text-green-600"
            : "text-slate-500"
        }
      >
        {text}
      </span>

    </div>
  );
}