import React, { FC } from "react";
import { BASE_SPEED_WORDS_PER_MINUTE } from "../constants/baseSpeedWordsPerMinute";
import { Article } from "@/shared/api/generated/schemas";
import {
  ArticleContentNode,
  getArticleContentText,
} from "../libs/getArticleContentText";

export const ArticleTimeEstimate: FC<{
  articleContent: Article["articleContent"][];
}> = ({ articleContent }) => {
  const text = getArticleContentText(articleContent as ArticleContentNode[]);
  const articleWordsCount = text.split(" ").length;
  const minutes = Math.round(articleWordsCount / BASE_SPEED_WORDS_PER_MINUTE);

  return (
    <div>
      <span>Time Estimate: {minutes < 1 ? 1 : minutes}min</span>
    </div>
  );
};
