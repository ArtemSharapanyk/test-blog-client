import { safeEnv } from "@/shared/lib/getSafeEnv";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/signin", "/signup"] },
    ],
    sitemap: `${safeEnv?.NEXT_PUBLIC_DOMAIN}/sitemap.xml`,
  };
}
