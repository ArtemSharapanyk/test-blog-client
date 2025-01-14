import { z } from "zod";

const envScheme = z.object({
  NEXT_PUBLIC_STRAPI_API_URL: z.string(),
  NEXT_PUBLIC_DOMAIN: z.string(),
  NEXT_PUBLIC_MODE: z.enum(["dev", "prod"]),
});

const parseEnv = envScheme.safeParse({
  NEXT_PUBLIC_STRAPI_API_URL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  NEXT_PUBLIC_DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
  NEXT_PUBLIC_MODE: process.env.NEXT_PUBLIC_MODE,
});

if (parseEnv.success === false) {
  console.log("Missing env var: ", parseEnv?.error?.errors[0].message);
}

export const safeEnv = parseEnv.data;

