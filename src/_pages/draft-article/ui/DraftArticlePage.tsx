import {
  ArticleContent,
  ArticleContentNode,
  ArticleContentType,
  ArticleTimeEstimate,
} from "@/entities/articles";
import { Article } from "@/shared/api/generated/schemas";
import { formatDate } from "@/shared/lib/formatDate";
import { AvatarWithFallback } from "@/entities/articles/ui/AvatarWithFallback";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/Card";
import Image from "next/image";
import React, { FC } from "react";
import { getImageUrl } from "@/shared/lib/getImageUrl";

interface DrafArticlePageProps {
  article: Article;
}

export const DraftArticlePage: FC<DrafArticlePageProps> = ({
  article: { title, description, cover, publishedAt, author, articleContent },
}) => {
  const isImageCover =
    cover?.url &&
    cover?.width &&
    cover?.height &&
    cover?.caption &&
    cover?.alternativeText;

  return (
    <article className="md:w-[70%]  xs:w-[90%] mx-auto">
      <Card>
        <CardHeader className="flex flex-row justify-between items-center">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription className="break-all">
              <p className="break-all">{description}</p>
              {(articleContent as ArticleContentNode) && (
                <div className="mt-[10px]">
                  <ArticleTimeEstimate
                    articleContent={articleContent as ArticleContentNode[]}
                  />
                </div>
              )}
            </CardDescription>
          </div>
          {author && (
            <AvatarWithFallback
              name={author?.name ?? ""}
              url={getImageUrl(author?.avatar?.url as string)}
            />
          )}
        </CardHeader>
        <CardContent>
          {isImageCover && (
            <figure className="relative">
              <Image
                src={getImageUrl(cover?.url as string)}
                alt={cover.alternativeText || "Article cover"}
                width={cover.width}
                height={cover.height}
                className="mb-[10px]"
                layout="responsive"
                loading="lazy"
              />
              <figcaption className="opacity-0 absolute">
                {cover.caption}
              </figcaption>
            </figure>
          )}
          <section className="mt-[5px]">
            {!!articleContent && (
              <ArticleContent content={articleContent as ArticleContentType} />
            )}
          </section>
        </CardContent>
        <CardFooter>
          {publishedAt && <span>Published at {formatDate(publishedAt)}</span>}
        </CardFooter>
      </Card>
    </article>
  );
};
