/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { GlobalFaviconFolderFilesItemCreatedByRolesItemCreatedBy } from './globalFaviconFolderFilesItemCreatedByRolesItemCreatedBy';
import type { GlobalFaviconFolderFilesItemCreatedByRolesItemLocalizationsItem } from './globalFaviconFolderFilesItemCreatedByRolesItemLocalizationsItem';
import type { GlobalFaviconFolderFilesItemCreatedByRolesItemPermissionsItem } from './globalFaviconFolderFilesItemCreatedByRolesItemPermissionsItem';
import type { GlobalFaviconFolderFilesItemCreatedByRolesItemUpdatedBy } from './globalFaviconFolderFilesItemCreatedByRolesItemUpdatedBy';
import type { GlobalFaviconFolderFilesItemCreatedByRolesItemUsersItem } from './globalFaviconFolderFilesItemCreatedByRolesItemUsersItem';

export type GlobalFaviconFolderFilesItemCreatedByRolesItem = {
  code?: string;
  createdAt?: string;
  createdBy?: GlobalFaviconFolderFilesItemCreatedByRolesItemCreatedBy;
  description?: string;
  documentId?: string;
  id?: number;
  locale?: string;
  localizations?: GlobalFaviconFolderFilesItemCreatedByRolesItemLocalizationsItem[];
  name?: string;
  permissions?: GlobalFaviconFolderFilesItemCreatedByRolesItemPermissionsItem[];
  publishedAt?: string;
  updatedAt?: string;
  updatedBy?: GlobalFaviconFolderFilesItemCreatedByRolesItemUpdatedBy;
  users?: GlobalFaviconFolderFilesItemCreatedByRolesItemUsersItem[];
};
