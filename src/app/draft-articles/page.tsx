import { DraftArticlesPage } from "@/_pages/draft-articles";
import { getArticlesList } from "@/entities/articles";

import { AuthProtected } from "@/entities/auth/ui/AuthProtected";

export default async function DraftArticles(
  {searchParams}: 
    {
      searchParams: Promise<{ page: string; search: string }>;
    }
  
) {

  const waitedSearchParams = await searchParams;

  const articles = await getArticlesList(
    waitedSearchParams.page ? +waitedSearchParams.page : 1,
    {
      status: "draft",
      filters: {
        title: {
          $startsWith: waitedSearchParams.search || "",
        },
      },
    }
  );

  return (
    <AuthProtected>
      <DraftArticlesPage meta={articles.meta} articles={articles.data} />
    </AuthProtected>
  );
}
