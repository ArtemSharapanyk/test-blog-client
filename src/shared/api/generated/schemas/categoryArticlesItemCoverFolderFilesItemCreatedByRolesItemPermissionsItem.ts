/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { CategoryArticlesItemCoverFolderFilesItemCreatedByRolesItemPermissionsItemCreatedBy } from './categoryArticlesItemCoverFolderFilesItemCreatedByRolesItemPermissionsItemCreatedBy';
import type { CategoryArticlesItemCoverFolderFilesItemCreatedByRolesItemPermissionsItemLocalizationsItem } from './categoryArticlesItemCoverFolderFilesItemCreatedByRolesItemPermissionsItemLocalizationsItem';
import type { CategoryArticlesItemCoverFolderFilesItemCreatedByRolesItemPermissionsItemRole } from './categoryArticlesItemCoverFolderFilesItemCreatedByRolesItemPermissionsItemRole';
import type { CategoryArticlesItemCoverFolderFilesItemCreatedByRolesItemPermissionsItemUpdatedBy } from './categoryArticlesItemCoverFolderFilesItemCreatedByRolesItemPermissionsItemUpdatedBy';

export type CategoryArticlesItemCoverFolderFilesItemCreatedByRolesItemPermissionsItem = {
  action?: string;
  actionParameters?: unknown;
  conditions?: unknown;
  createdAt?: string;
  createdBy?: CategoryArticlesItemCoverFolderFilesItemCreatedByRolesItemPermissionsItemCreatedBy;
  documentId?: string;
  id?: number;
  locale?: string;
  localizations?: CategoryArticlesItemCoverFolderFilesItemCreatedByRolesItemPermissionsItemLocalizationsItem[];
  properties?: unknown;
  publishedAt?: string;
  role?: CategoryArticlesItemCoverFolderFilesItemCreatedByRolesItemPermissionsItemRole;
  subject?: string;
  updatedAt?: string;
  updatedBy?: CategoryArticlesItemCoverFolderFilesItemCreatedByRolesItemPermissionsItemUpdatedBy;
};
