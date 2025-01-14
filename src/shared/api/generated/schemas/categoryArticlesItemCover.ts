/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { CategoryArticlesItemCoverCreatedBy } from './categoryArticlesItemCoverCreatedBy';
import type { CategoryArticlesItemCoverFolder } from './categoryArticlesItemCoverFolder';
import type { CategoryArticlesItemCoverLocalizationsItem } from './categoryArticlesItemCoverLocalizationsItem';
import type { CategoryArticlesItemCoverRelatedItem } from './categoryArticlesItemCoverRelatedItem';
import type { CategoryArticlesItemCoverUpdatedBy } from './categoryArticlesItemCoverUpdatedBy';

export type CategoryArticlesItemCover = {
  alternativeText?: string;
  caption?: string;
  createdAt?: string;
  createdBy?: CategoryArticlesItemCoverCreatedBy;
  documentId?: string;
  ext?: string;
  folder?: CategoryArticlesItemCoverFolder;
  folderPath?: string;
  formats?: unknown;
  hash?: string;
  height?: number;
  id?: number;
  locale?: string;
  localizations?: CategoryArticlesItemCoverLocalizationsItem[];
  mime?: string;
  name?: string;
  previewUrl?: string;
  provider?: string;
  provider_metadata?: unknown;
  publishedAt?: string;
  related?: CategoryArticlesItemCoverRelatedItem[];
  size?: number;
  updatedAt?: string;
  updatedBy?: CategoryArticlesItemCoverUpdatedBy;
  url?: string;
  width?: number;
};
