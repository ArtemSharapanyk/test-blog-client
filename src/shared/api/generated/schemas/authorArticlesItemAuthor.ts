/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { AuthorArticlesItemAuthorArticlesItem } from './authorArticlesItemAuthorArticlesItem';
import type { AuthorArticlesItemAuthorAvatar } from './authorArticlesItemAuthorAvatar';
import type { AuthorArticlesItemAuthorCreatedBy } from './authorArticlesItemAuthorCreatedBy';
import type { AuthorArticlesItemAuthorLocalizationsItem } from './authorArticlesItemAuthorLocalizationsItem';
import type { AuthorArticlesItemAuthorUpdatedBy } from './authorArticlesItemAuthorUpdatedBy';

export type AuthorArticlesItemAuthor = {
  articles?: AuthorArticlesItemAuthorArticlesItem[];
  avatar?: AuthorArticlesItemAuthorAvatar;
  createdAt?: string;
  createdBy?: AuthorArticlesItemAuthorCreatedBy;
  documentId?: string;
  email?: string;
  id?: number;
  locale?: string;
  localizations?: AuthorArticlesItemAuthorLocalizationsItem[];
  name?: string;
  publishedAt?: string;
  updatedAt?: string;
  updatedBy?: AuthorArticlesItemAuthorUpdatedBy;
};