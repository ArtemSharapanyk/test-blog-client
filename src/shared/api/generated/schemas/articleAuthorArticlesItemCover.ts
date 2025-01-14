/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { ArticleAuthorArticlesItemCoverCreatedBy } from './articleAuthorArticlesItemCoverCreatedBy';
import type { ArticleAuthorArticlesItemCoverFolder } from './articleAuthorArticlesItemCoverFolder';
import type { ArticleAuthorArticlesItemCoverLocalizationsItem } from './articleAuthorArticlesItemCoverLocalizationsItem';
import type { ArticleAuthorArticlesItemCoverRelatedItem } from './articleAuthorArticlesItemCoverRelatedItem';
import type { ArticleAuthorArticlesItemCoverUpdatedBy } from './articleAuthorArticlesItemCoverUpdatedBy';

export type ArticleAuthorArticlesItemCover = {
  alternativeText?: string;
  caption?: string;
  createdAt?: string;
  createdBy?: ArticleAuthorArticlesItemCoverCreatedBy;
  documentId?: string;
  ext?: string;
  folder?: ArticleAuthorArticlesItemCoverFolder;
  folderPath?: string;
  formats?: unknown;
  hash?: string;
  height?: number;
  id?: number;
  locale?: string;
  localizations?: ArticleAuthorArticlesItemCoverLocalizationsItem[];
  mime?: string;
  name?: string;
  previewUrl?: string;
  provider?: string;
  provider_metadata?: unknown;
  publishedAt?: string;
  related?: ArticleAuthorArticlesItemCoverRelatedItem[];
  size?: number;
  updatedAt?: string;
  updatedBy?: ArticleAuthorArticlesItemCoverUpdatedBy;
  url?: string;
  width?: number;
};