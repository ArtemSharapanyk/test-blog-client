import { DraftArticlePage } from "@/_pages/draft-article";
import { getArticle } from "@/entities/articles";

import { AuthProtected } from "@/entities/auth/ui/AuthProtected";
import { StrapiBaseRequestParams } from "strapi-sdk-js";

export default async function DraftArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const waitedParams = await params;

  const article = await getArticle(waitedParams.slug, {
    status: "draft",
  } as StrapiBaseRequestParams);
  return (
    <AuthProtected>
      <DraftArticlePage article={article.data} />
    </AuthProtected>
  );
}
