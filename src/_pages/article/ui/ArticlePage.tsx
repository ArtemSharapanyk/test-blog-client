import { Article } from "@/shared/api/generated/schemas";
import { formatDate } from "@/shared/lib/formatDate";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/shared/ui/Card";

import Image from "next/image";
import React, { FC } from "react";
import { AvatarWithFallback } from "@/entities/articles/ui/AvatarWithFallback";

import {
  ArticleContent,
  ArticleContentType,
  ArticleTimeEstimate,
  ArticleContentNode,
} from "@/entities/articles";
import { getImageUrl } from "@/shared/lib/getImageUrl";

interface ArticlePageProps {
  article: Article;
}

export const ArticlePage: FC<ArticlePageProps> = ({
  article: { title, description, cover, publishedAt, author, articleContent },
}) => {
  const isImageCover =
    cover?.url &&
    cover?.width &&
    cover?.height &&
    cover?.caption &&
    cover?.alternativeText;

  return (
    <article
      itemScope
      itemType="https://schema.org/BlogPosting"
      className="md:w-[70%]  xs:w-[90%] mx-auto"
    >
      <Card>
        <CardHeader className="flex flex-row justify-between items-center">
          <div>
            <CardTitle>
              <h1 itemProp="headline">{title}</h1>
            </CardTitle>
            <CardDescription>
              <p itemProp="description" className="break-all">
                {description}
              </p>
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
              name={author?.name || ""}
              url={getImageUrl(author?.avatar?.url as string)}
            />
          )}
        </CardHeader>
        <CardContent>
          {isImageCover && (
            <figure
              className="relative"
              itemProp="image"
              itemScope
              itemType="https://schema.org/ImageObject"
            >
              <Image
                src={getImageUrl(cover?.url as string)}
                alt={cover.alternativeText || "Article cover"}
                width={cover.width}
                height={cover.height}
                className="mb-[10px]"
                layout="responsive"
                loading="lazy"
              />
              <figcaption className="opacity-0 absolute" itemProp="caption">
                {cover.caption}
              </figcaption>
            </figure>
          )}
          <section className="mt-[5px]" itemProp="articleBody">
            {!!articleContent && (
              <ArticleContent content={articleContent as ArticleContentType} />
            )}
          </section>
        </CardContent>
        <CardFooter>
          {publishedAt && (
            <time itemProp="datePublished" content={publishedAt}>
              Published at {formatDate(publishedAt)}
            </time>
          )}
        </CardFooter>
      </Card>
    </article>
  );
};
