import { strapi } from "@/shared/api/strapiInstance";
import { StrapiRequestParams } from "strapi-sdk-js";
import { Article } from "@/shared/api/generated/schemas";

interface ArticleListParams extends StrapiRequestParams {
  status?: "draft" | "published" | "modified";
}

const getArticlesList = async (
  page: number = 1,
  params: ArticleListParams = {}
) =>
  strapi.find<Article[]>("Articles", {
    ...params,
    populate: ["cover", "author.avatar"],
    pagination: { pageSize: 5, page },
  });

const getArticle = async (id: string, params: StrapiRequestParams = {}) =>
  strapi.findOne<Article>("Articles", id, {
    ...params,
    populate: ["cover", "author.avatar"],
  });

export { getArticlesList, getArticle };
