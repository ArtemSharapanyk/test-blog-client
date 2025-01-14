import { Article } from "@/shared/api/generated/schemas";
import { strapi } from "@/shared/api/strapiInstance";
import { ROUTES_PATHS } from "@/shared/config/routes";
import { MetadataRoute } from "next";
import { safeEnv } from "@/shared/lib/getSafeEnv";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    { url: safeEnv?.NEXT_PUBLIC_DOMAIN, lastModified: new Date() },
    {
      url: `${safeEnv?.NEXT_PUBLIC_DOMAIN}${ROUTES_PATHS.BLOG}`,
      lastModified: new Date(),
    },
    {
      url: `${safeEnv?.NEXT_PUBLIC_DOMAIN}${ROUTES_PATHS.SIGN_IN}`,
      lastModified: new Date(),
    },
    {
      url: `${safeEnv?.NEXT_PUBLIC_DOMAIN}${ROUTES_PATHS.SIGN_UP}`,
      lastModified: new Date(),
    },
  ];

  const articles = await strapi.find<Article[]>("Articles");

  const dynamicPages = articles.data.map((article: Article) => {
    const dateModified = article.updatedAt ?? article.publishedAt ?? new Date();

    return {
      url: `${safeEnv?.NEXT_PUBLIC_DOMAIN}${article.documentId}`,
      lastModified:
        typeof dateModified === "string"
          ? new Date(dateModified)
          : dateModified,
    };
  });

  return [
    ...(staticPages as MetadataRoute.Sitemap),
    ...(dynamicPages as MetadataRoute.Sitemap),
  ];
}
