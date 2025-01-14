import { ArticlePage, getMicroMarkup } from "@/_pages/article";
import { getMetadata } from "@/_pages/article/libs/get-metadata";
import { getArticle } from "@/entities/articles";
import { Metadata } from "next";
import Script from "next/script";

export const revalidate = 60;

export async function generateMetadata({params}: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const waitedParams = await params;
  const { data: article } = await getArticle(waitedParams?.slug as string);

  return getMetadata(waitedParams.slug, article);
}

export default async function Article({params}: { params: Promise<{ slug: string }> }) {
  const waitedParams = await params;

  const article = await getArticle(waitedParams.slug);

  return (
    <>
      <ArticlePage article={article.data} />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getMicroMarkup(article.data) }}
        id="microdata-article"
      ></Script>
    </>
  );
}
