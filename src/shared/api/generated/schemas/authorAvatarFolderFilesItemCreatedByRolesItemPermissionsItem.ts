/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { AuthorAvatarFolderFilesItemCreatedByRolesItemPermissionsItemCreatedBy } from './authorAvatarFolderFilesItemCreatedByRolesItemPermissionsItemCreatedBy';
import type { AuthorAvatarFolderFilesItemCreatedByRolesItemPermissionsItemLocalizationsItem } from './authorAvatarFolderFilesItemCreatedByRolesItemPermissionsItemLocalizationsItem';
import type { AuthorAvatarFolderFilesItemCreatedByRolesItemPermissionsItemRole } from './authorAvatarFolderFilesItemCreatedByRolesItemPermissionsItemRole';
import type { AuthorAvatarFolderFilesItemCreatedByRolesItemPermissionsItemUpdatedBy } from './authorAvatarFolderFilesItemCreatedByRolesItemPermissionsItemUpdatedBy';

export type AuthorAvatarFolderFilesItemCreatedByRolesItemPermissionsItem = {
  action?: string;
  actionParameters?: unknown;
  conditions?: unknown;
  createdAt?: string;
  createdBy?: AuthorAvatarFolderFilesItemCreatedByRolesItemPermissionsItemCreatedBy;
  documentId?: string;
  id?: number;
  locale?: string;
  localizations?: AuthorAvatarFolderFilesItemCreatedByRolesItemPermissionsItemLocalizationsItem[];
  properties?: unknown;
  publishedAt?: string;
  role?: AuthorAvatarFolderFilesItemCreatedByRolesItemPermissionsItemRole;
  subject?: string;
  updatedAt?: string;
  updatedBy?: AuthorAvatarFolderFilesItemCreatedByRolesItemPermissionsItemUpdatedBy;
};