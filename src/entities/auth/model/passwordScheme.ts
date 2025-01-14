import { z } from "zod";
export const passwordScheme = z.string().min(5).max(30);