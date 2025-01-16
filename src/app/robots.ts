import { ROUTES_PATHS } from "@/shared/config/routes";
import { safeEnv } from "@/shared/lib/getSafeEnv";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", ROUTES_PATHS.BLOG],
        disallow: ["/signin", "/signup", ROUTES_PATHS.DRAFT_ARTICLES],
      },
    ],
    sitemap: `${safeEnv?.NEXT_PUBLIC_DOMAIN}/sitemap.xml`,
  };
}
