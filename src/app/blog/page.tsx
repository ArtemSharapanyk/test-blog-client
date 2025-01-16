import { BlogPage, getMicroMarkup } from "@/_pages/blog";
import { getArticlesList } from "@/entities/articles";
import { ROUTES_PATHS } from "@/shared/config/routes";
import { safeEnv } from "@/shared/lib/getSafeEnv";
import { Metadata } from "next";

import Script from "next/script";

export const revalidate = 60;

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}): Promise<Metadata> {
  const waitedSearchParams = await searchParams;

  const page = +waitedSearchParams.page || 1;
  const isFirstPage = page === 1;

  return {
    title: "Blog",
    description: "Read the latest articles and updates on our blog",
    alternates: {
      canonical: isFirstPage
        ? `${safeEnv?.NEXT_PUBLIC_DOMAIN}${ROUTES_PATHS.BLOG}`
        : `${safeEnv?.NEXT_PUBLIC_DOMAIN}${ROUTES_PATHS.BLOG}?page=${page}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  } as Metadata;
}

export default async function Blog({
  searchParams,
}: {
  searchParams: Promise<{ page: string; search: string }>;
}) {
  const waitedSearchParams = await searchParams;

  const articles = await getArticlesList(
    waitedSearchParams.page ? +waitedSearchParams.page : 1,
    {
      filters: {
        title: {
          $startsWith: waitedSearchParams.search || "",
        },
      },
    }
  );

  return (
    <>
      <BlogPage meta={articles.meta} articles={articles.data} />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getMicroMarkup(articles.data) }}
        id="microdata-blog"
      ></Script>
    </>
  );
}
