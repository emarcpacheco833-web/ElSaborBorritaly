import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-forest/10 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-forest uppercase",
        className,
      )}
      {...props}
    />
  );
}
