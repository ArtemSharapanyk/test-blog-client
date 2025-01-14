import { Article } from "@/shared/api/generated/schemas";
import { Alert, AlertDescription, AlertTitle } from "@/shared/ui/Alert";
import { BasePagination } from "@/widgets/pagination";
import { Search } from "@/widgets/search";
import React, { FC } from "react";
import { StrapiResponse } from "strapi-sdk-js";
import { ArticleCard } from "@/entities/articles";
import { Meta } from "@/shared/api/types/Meta";
interface BlogPageProps {
  articles: Article[];
  meta: StrapiResponse<Article[]>["meta"];
}
export const BlogPage: FC<BlogPageProps> = ({ articles, meta }) => {
  return (
    <div className="min-h-[calc(100vh-80px-40px)] flex flex-col justify-between">
      <section className="wrapper">
        <div className="">
          <Search />
        </div>
        <h1 className="text-[black] text-2xl mb-[20px] font-bold">Blog</h1>

        {articles.length ? (
          <ul className="grid gap-4 ">
            {articles.map((article) => (
              <ArticleCard
                className="w-[70%] md:w-[70%]  xs:w-full"
                key={article.id}
                article={article}
              />
            ))}
          </ul>
        ) : (
          <Alert>
            <AlertTitle>Articles not find</AlertTitle>
            <AlertDescription>
              You should search not exists article or it have not be yet
            </AlertDescription>
          </Alert>
        )}
      </section>
      <div>
        <div className="flex">
          <BasePagination meta={meta as unknown as Meta} />
        </div>
      </div>
    </div>
  );
};
