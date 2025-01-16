import { Article } from "@/shared/api/generated/schemas";
import { getAppDomain } from "@/shared/lib/getAppDomain";
import { getImageUrl } from "@/shared/lib/getImageUrl";

export const getMetadata = (id: string, article: Article) => {
  return {
    title: `${article.title} | Blog`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: `${getAppDomain()}${id}`,
      images: [
        {
          url: getImageUrl(article?.cover?.url as string),
          width: article?.cover?.width ?? 100,
          height: article?.cover?.width ?? 100,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [getImageUrl(article?.cover?.url as string)],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
};
