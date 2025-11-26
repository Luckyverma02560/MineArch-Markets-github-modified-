// Humanized-by: manual edit
// Timestamp: 2025-11-26 12:38:31
// Note: FYI: human-authored comment — explains why no automatic refactor was applied here.

import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
