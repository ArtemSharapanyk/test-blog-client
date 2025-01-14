/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * DOCUMENTATION
 * OpenAPI spec version: 1.0.0
 */
import type { SharedSliderComponentFilesItemCreatedBy } from './sharedSliderComponentFilesItemCreatedBy';
import type { SharedSliderComponentFilesItemFolder } from './sharedSliderComponentFilesItemFolder';
import type { SharedSliderComponentFilesItemLocalizationsItem } from './sharedSliderComponentFilesItemLocalizationsItem';
import type { SharedSliderComponentFilesItemRelatedItem } from './sharedSliderComponentFilesItemRelatedItem';
import type { SharedSliderComponentFilesItemUpdatedBy } from './sharedSliderComponentFilesItemUpdatedBy';

export type SharedSliderComponentFilesItem = {
  alternativeText?: string;
  caption?: string;
  createdAt?: string;
  createdBy?: SharedSliderComponentFilesItemCreatedBy;
  documentId?: string;
  ext?: string;
  folder?: SharedSliderComponentFilesItemFolder;
  folderPath?: string;
  formats?: unknown;
  hash?: string;
  height?: number;
  id?: number;
  locale?: string;
  localizations?: SharedSliderComponentFilesItemLocalizationsItem[];
  mime?: string;
  name?: string;
  previewUrl?: string;
  provider?: string;
  provider_metadata?: unknown;
  publishedAt?: string;
  related?: SharedSliderComponentFilesItemRelatedItem[];
  size?: number;
  updatedAt?: string;
  updatedBy?: SharedSliderComponentFilesItemUpdatedBy;
  url?: string;
  width?: number;
};
