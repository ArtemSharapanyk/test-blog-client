/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { AuthorAvatarFolderFilesItemCreatedByRolesItemCreatedBy } from './authorAvatarFolderFilesItemCreatedByRolesItemCreatedBy';
import type { AuthorAvatarFolderFilesItemCreatedByRolesItemLocalizationsItem } from './authorAvatarFolderFilesItemCreatedByRolesItemLocalizationsItem';
import type { AuthorAvatarFolderFilesItemCreatedByRolesItemPermissionsItem } from './authorAvatarFolderFilesItemCreatedByRolesItemPermissionsItem';
import type { AuthorAvatarFolderFilesItemCreatedByRolesItemUpdatedBy } from './authorAvatarFolderFilesItemCreatedByRolesItemUpdatedBy';
import type { AuthorAvatarFolderFilesItemCreatedByRolesItemUsersItem } from './authorAvatarFolderFilesItemCreatedByRolesItemUsersItem';

export type AuthorAvatarFolderFilesItemCreatedByRolesItem = {
  code?: string;
  createdAt?: string;
  createdBy?: AuthorAvatarFolderFilesItemCreatedByRolesItemCreatedBy;
  description?: string;
  documentId?: string;
  id?: number;
  locale?: string;
  localizations?: AuthorAvatarFolderFilesItemCreatedByRolesItemLocalizationsItem[];
  name?: string;
  permissions?: AuthorAvatarFolderFilesItemCreatedByRolesItemPermissionsItem[];
  publishedAt?: string;
  updatedAt?: string;
  updatedBy?: AuthorAvatarFolderFilesItemCreatedByRolesItemUpdatedBy;
  users?: AuthorAvatarFolderFilesItemCreatedByRolesItemUsersItem[];
};
