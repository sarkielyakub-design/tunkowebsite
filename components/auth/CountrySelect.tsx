"use client";

import { ControllerRenderProps } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} 
from "@/components/ui/select";

const countries = [
  { code: "NG", name: "Nigeria" },
  { code: "NE", name: "Niger" },
  { code: "TD", name: "Chad" },
  { code: "CM", name: "Cameroon" },
  { code: "GH", name: "Ghana" },
  { code: "BJ", name: "Benin" },
  { code: "TG", name: "Togo" },
  { code: "CI", name: "Côte d'Ivoire" },
  { code: "SN", name: "Senegal" },
  { code: "ML", name: "Mali" },
  { code: "BF", name: "Burkina Faso" },
];

interface Props {
  field: ControllerRenderProps<any, "country">;
}

export default function CountrySelect({
  field,
}: Props) {
  return (
    <Select
      value={field.value}
      onValueChange={field.onChange}
    >
      <SelectTrigger className="h-12 rounded-xl">
        <SelectValue placeholder="Select Country" />
      </SelectTrigger>

      <SelectContent>
        {countries.map((country) => (
          <SelectItem
            key={country.code}
            value={country.name}
          >
            {country.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}