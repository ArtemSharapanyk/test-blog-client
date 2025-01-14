import { Article } from "@/shared/api/generated/schemas";
import { ROUTES_PATHS } from "@/shared/config/routes";
import { getImageUrl } from "@/shared/lib/getImageUrl";
import { safeEnv } from "@/shared/lib/getSafeEnv";

export const getMicroMarkup = (articles: Article[]) => {
  const microMarkup = {
    "@context": "https://schema.org",
    "@type": "Blog",
    url: `${safeEnv?.NEXT_PUBLIC_DOMAIN}${ROUTES_PATHS.BLOG}`,
    name: "Blog",
    description: "Latest articles and updates",
    blogPost: articles.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      description: article.description,
      url: `${safeEnv?.NEXT_PUBLIC_DOMAIN}/${article.id}`,
      datePublished: article.publishedAt,
      dateModified: article.updatedAt ?? article.publishedAt,
      author: {
        "@type": "Person",
        name: article.author?.name,
      },
      image: article.cover?.url
        ? getImageUrl(article?.cover?.url as string)
        : undefined,
    })),
  };

  return JSON.stringify(microMarkup);
};
