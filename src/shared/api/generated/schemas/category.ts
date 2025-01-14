/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { CategoryArticlesItem } from './categoryArticlesItem';
import type { CategoryCreatedBy } from './categoryCreatedBy';
import type { CategoryLocalizationsItem } from './categoryLocalizationsItem';
import type { CategoryUpdatedBy } from './categoryUpdatedBy';

export interface Category {
  articles?: CategoryArticlesItem[];
  createdAt?: string;
  createdBy?: CategoryCreatedBy;
  description?: string;
  documentId?: string;
  id?: number;
  locale?: string;
  localizations?: CategoryLocalizationsItem[];
  name?: string;
  publishedAt?: string;
  slug?: string;
  updatedAt?: string;
  updatedBy?: CategoryUpdatedBy;
}