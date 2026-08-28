import { z } from "zod";

export const registerSchema = z
  .object({
    first_name: z.string().min(2, "First name is required"),

    last_name: z.string().min(2, "Last name is required"),

    username: z
      .string()
      .min(3, "Username must be at least 3 characters"),

    email: z
      .string()
      .email("Enter a valid email"),

    phone: z
      .string()
      .min(8, "Enter a valid phone number"),

    country: z
      .string()
      .min(1, "Select your country"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters"),

    password_confirmation: z.string(),

    referral_code: z.string().optional(),

    terms: z.literal(true, {
      errorMap: () => ({
        message: "You must accept Terms & Conditions",
      }),
    }),
  })
  .refine(
    (data) => data.password === data.password_confirmation,
    {
      message: "Passwords do not match",
      path: ["password_confirmation"],
    }
  );

export type RegisterFormValues = z.infer<
  typeof registerSchema
>;