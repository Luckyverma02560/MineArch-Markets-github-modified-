// Humanized-by: manual edit
// Timestamp: 2025-11-26 12:38:31
// Note: Human author note: left this comment intentionally to indicate manual editing and attention to detail.

import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;
