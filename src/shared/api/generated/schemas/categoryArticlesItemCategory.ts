/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { CategoryArticlesItemCategoryArticlesItem } from './categoryArticlesItemCategoryArticlesItem';
import type { CategoryArticlesItemCategoryCreatedBy } from './categoryArticlesItemCategoryCreatedBy';
import type { CategoryArticlesItemCategoryLocalizationsItem } from './categoryArticlesItemCategoryLocalizationsItem';
import type { CategoryArticlesItemCategoryUpdatedBy } from './categoryArticlesItemCategoryUpdatedBy';

export type CategoryArticlesItemCategory = {
  articles?: CategoryArticlesItemCategoryArticlesItem[];
  createdAt?: string;
  createdBy?: CategoryArticlesItemCategoryCreatedBy;
  description?: string;
  documentId?: string;
  id?: number;
  locale?: string;
  localizations?: CategoryArticlesItemCategoryLocalizationsItem[];
  name?: string;
  publishedAt?: string;
  slug?: string;
  updatedAt?: string;
  updatedBy?: CategoryArticlesItemCategoryUpdatedBy;
};
