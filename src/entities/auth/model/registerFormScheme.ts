import { RegisterFormData } from "./api";
import { passwordScheme } from "@/entities/auth/model/passwordScheme";
import { z } from "zod";

export const registerFormScheme: z.ZodType<RegisterFormData> = z.object({
  email: z.string().email(),
  password: passwordScheme,
  username: z.string().min(5).max(30),
});
