// Humanized-by: manual edit
// Timestamp: 2025-11-26 12:38:31
// Note: Annotation: manual review done on this file. Kept logic same; only commentary added.

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
