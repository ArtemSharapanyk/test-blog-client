/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { SharedSeoComponentShareImageCreatedBy } from './sharedSeoComponentShareImageCreatedBy';
import type { SharedSeoComponentShareImageFolder } from './sharedSeoComponentShareImageFolder';
import type { SharedSeoComponentShareImageLocalizationsItem } from './sharedSeoComponentShareImageLocalizationsItem';
import type { SharedSeoComponentShareImageRelatedItem } from './sharedSeoComponentShareImageRelatedItem';
import type { SharedSeoComponentShareImageUpdatedBy } from './sharedSeoComponentShareImageUpdatedBy';

export type SharedSeoComponentShareImage = {
  alternativeText?: string;
  caption?: string;
  createdAt?: string;
  createdBy?: SharedSeoComponentShareImageCreatedBy;
  documentId?: string;
  ext?: string;
  folder?: SharedSeoComponentShareImageFolder;
  folderPath?: string;
  formats?: unknown;
  hash?: string;
  height?: number;
  id?: number;
  locale?: string;
  localizations?: SharedSeoComponentShareImageLocalizationsItem[];
  mime?: string;
  name?: string;
  previewUrl?: string;
  provider?: string;
  provider_metadata?: unknown;
  publishedAt?: string;
  related?: SharedSeoComponentShareImageRelatedItem[];
  size?: number;
  updatedAt?: string;
  updatedBy?: SharedSeoComponentShareImageUpdatedBy;
  url?: string;
  width?: number;
};