/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { ArticleCoverFolderFilesItemCreatedByRolesItemPermissionsItemCreatedBy } from './articleCoverFolderFilesItemCreatedByRolesItemPermissionsItemCreatedBy';
import type { ArticleCoverFolderFilesItemCreatedByRolesItemPermissionsItemLocalizationsItem } from './articleCoverFolderFilesItemCreatedByRolesItemPermissionsItemLocalizationsItem';
import type { ArticleCoverFolderFilesItemCreatedByRolesItemPermissionsItemRole } from './articleCoverFolderFilesItemCreatedByRolesItemPermissionsItemRole';
import type { ArticleCoverFolderFilesItemCreatedByRolesItemPermissionsItemUpdatedBy } from './articleCoverFolderFilesItemCreatedByRolesItemPermissionsItemUpdatedBy';

export type ArticleCoverFolderFilesItemCreatedByRolesItemPermissionsItem = {
  action?: string;
  actionParameters?: unknown;
  conditions?: unknown;
  createdAt?: string;
  createdBy?: ArticleCoverFolderFilesItemCreatedByRolesItemPermissionsItemCreatedBy;
  documentId?: string;
  id?: number;
  locale?: string;
  localizations?: ArticleCoverFolderFilesItemCreatedByRolesItemPermissionsItemLocalizationsItem[];
  properties?: unknown;
  publishedAt?: string;
  role?: ArticleCoverFolderFilesItemCreatedByRolesItemPermissionsItemRole;
  subject?: string;
  updatedAt?: string;
  updatedBy?: ArticleCoverFolderFilesItemCreatedByRolesItemPermissionsItemUpdatedBy;
};
