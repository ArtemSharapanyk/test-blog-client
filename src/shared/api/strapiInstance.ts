import Strapi from "strapi-sdk-js";
import { safeEnv } from "../lib/getSafeEnv";

export const strapi = new Strapi({
  url: safeEnv?.NEXT_PUBLIC_STRAPI_API_URL,
  prefix: "/api",
});
