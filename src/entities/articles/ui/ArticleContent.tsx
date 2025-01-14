import React, { FC } from "react";
import { ArticleContentType } from "../types/ArticleContent";
import { renderArticleContent } from "../libs/renderArticleContent";

interface ArticleContentProps {
  content: ArticleContentType;
}

export const ArticleContent: FC<ArticleContentProps> = ({ content }) => {
  return (
    <div>
      {content.map((item, index) => (
        <div key={index}>{renderArticleContent(item)}</div>
      ))}
    </div>
  );
};
