"use client";

import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import { UseFormRegister } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PasswordInputProps {
  register: UseFormRegister<any>;
  error?: string;
  disabled?: boolean;
}

export default function PasswordInput({
  register,
  error,
  disabled = false,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">

      <Label htmlFor="password">
        Password
      </Label>

      <div className="relative">

        <Lock
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />

        <Input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          disabled={disabled}
          {...register("password")}
          className={`h-12 rounded-xl pl-11 pr-12 transition-all ${
            error
              ? "border-red-500 focus-visible:ring-red-500"
              : ""
          }`}
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600"
        >
          {showPassword ? (
            <EyeOff size={20} />
          ) : (
            <Eye size={20} />
          )}
        </button>

      </div>

      {error && (
        <p className="text-sm font-medium text-red-500">
          {error}
        </p>
      )}

    </div>
  );
}