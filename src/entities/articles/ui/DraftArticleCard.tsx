import { Article } from "@/shared/api/generated/schemas";
import { ROUTES_PATHS } from "@/shared/config/routes";
import { formatDate } from "@/shared/lib/formatDate";
import { AvatarWithFallback } from "@/entities/articles/ui/AvatarWithFallback";
import { Button } from "@/shared/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/Card";
import Image from "next/image";
import Link from "next/link";
import React, { FC, HTMLAttributes } from "react";
import { ArticleTimeEstimate } from "./ArticleTimeEstimate";
import { ArticleContentNode } from "../libs/getArticleContentText";
import { getImageUrl } from "@/shared/lib/getImageUrl";

interface ArticleCardProps extends HTMLAttributes<HTMLLIElement> {
  article: Article;
}

export const DraftArticleCard: FC<ArticleCardProps> = ({
  article: {
    title,
    description,
    cover,
    publishedAt,
    author,
    documentId,
    articleContent,
  },
  ...props
}) => {
  const isImageCover =
    cover?.url &&
    cover?.width &&
    cover?.height &&
    cover?.caption &&
    cover?.alternativeText;

  return (
    <li {...props}>
      <article>
        <Card>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription className="break-all">
              {description}
              {(articleContent as ArticleContentNode) && (
                <div className="mt-[10px]">
                  <ArticleTimeEstimate
                    articleContent={articleContent as ArticleContentNode[]}
                  />
                </div>
              )}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isImageCover && (
              <figure className="relative">
                <Image
                  src={getImageUrl(cover?.url as string)}
                  alt={cover.alternativeText ?? "Article cover"}
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
            {publishedAt && <span>Published at {formatDate(publishedAt)}</span>}
            {author && (
              <div className="mt-[10px]">
                {author && (
                  <AvatarWithFallback
                    name={author?.name || ""}
                    url={getImageUrl(author?.avatar?.url as string)}
                  />
                )}
                <span>Author: {author.name}</span>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href={`${ROUTES_PATHS.DRAFT_ARTICLES}/${documentId}`}>
                Read
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </article>
    </li>
  );
};
