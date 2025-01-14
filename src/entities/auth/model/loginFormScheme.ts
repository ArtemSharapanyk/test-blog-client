import { LoginFormData } from "./api";
import { passwordScheme } from "@/entities/auth/model/passwordScheme";
import { z } from "zod";

export const loginFormScheme: z.ZodType<LoginFormData> = z.object({
  email: z.string().email(),
  password: passwordScheme,
});
