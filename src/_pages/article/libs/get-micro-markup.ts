import { Article } from "@/shared/api/generated/schemas";
import { ROUTES_PATHS } from "@/shared/config/routes";
import { getAppDomain } from "@/shared/lib/getAppDomain";
import { getImageUrl } from "@/shared/lib/getImageUrl";

export const getMicroMarkup = (article: Article) => {
  const microMarkup = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${getAppDomain()}${ROUTES_PATHS.BLOG}/${article.documentId}`,
    },
    headline: article.title,
    description: article.description,
    image: {
      "@type": "ImageObject",
      url: getImageUrl(article?.cover?.url as string),
      width: article?.cover?.width,
      height: article?.cover?.height,
    },
    author: {
      "@type": "Person",
      name: article.author?.name,
    },
    datePublished: article.publishedAt,
    publisher: {
      "@type": "Organization",
      name: "Blog",
    },
  };

  return JSON.stringify(microMarkup);
};
