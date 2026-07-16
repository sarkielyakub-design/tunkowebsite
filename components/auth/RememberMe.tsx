"use client";

import { ControllerRenderProps } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface RememberMeProps {
  field: ControllerRenderProps<any, "remember">;
}

export default function RememberMe({
  field,
}: RememberMeProps) {
  return (
    <div className="flex items-center space-x-3">

      <Checkbox
        id="remember"
        checked={field.value}
        onCheckedChange={field.onChange}
      />

      <Label
        htmlFor="remember"
        className="cursor-pointer text-sm font-medium text-slate-600"
      >
        Remember me for 30 days
      </Label>

    </div>
  );
}