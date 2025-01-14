import { DraftArticleCard } from "@/entities/articles";
import { Article } from "@/shared/api/generated/schemas";
import { Meta } from "@/shared/api/types/Meta";
import { Alert, AlertDescription, AlertTitle } from "@/shared/ui/Alert";
import { BasePagination } from "@/widgets/pagination";
import { Search } from "@/widgets/search";
import React, { FC } from "react";
import { StrapiResponse } from "strapi-sdk-js";

interface DraftArticlesPageProps {
  articles: Article[];
  meta: StrapiResponse<Article[]>["meta"];
}

export const DraftArticlesPage: FC<DraftArticlesPageProps> = ({
  articles,
  meta,
}) => {
  return (
    <div className="flex min-h-[calc(100vh-80px-40px)] flex-col justify-between">
      <section className="wrapper">
        <div>
          <Search />
        </div>
        <h1 className="text-[black] text-2xl mb-[20px] font-bold">
          Draft articles
        </h1>

        <ul className="grid gap-y-[10px]">
          {!!articles.length ? (
            articles.map((article) => (
              <DraftArticleCard
                className="w-[70%] md:w-[70%]  xs:w-full"
                key={article.id}
                article={article}
              />
            ))
          ) : (
            <Alert>
              <AlertTitle>Articles not find</AlertTitle>
              <AlertDescription>
                You should search not exists article or it have not be yet
              </AlertDescription>
            </Alert>
          )}
        </ul>
      </section>
      <div className="flex">
        <BasePagination meta={meta as unknown as Meta} />
      </div>
    </div>
  );
};
