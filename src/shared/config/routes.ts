export enum ROUTES_PATHS {
  BLOG = "/blog",
  ARTICLE = "/blog/articles",
  SIGN_IN = "/sign-in",
  SIGN_UP = "/sign-up",
  DRAFT_ARTICLES = "/draft-articles",
}

export interface Route {
  path: `${ROUTES_PATHS}`;
  protected?: boolean;
}
