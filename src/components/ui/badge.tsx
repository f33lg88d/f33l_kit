import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-sm px-2 py-0.5 font-mono text-xs uppercase tracking-wide",
  {
    variants: {
      tone: {
        sage: "bg-sage/15 text-sage",
        warn: "bg-warn/15 text-warn",
        mute: "bg-elevated text-muted",
        paper: "bg-accent/12 text-accent",
      },
    },
    defaultVariants: { tone: "mute" },
  },
);

export function Badge({
  className,
  tone,
  ...props
}: HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ tone }), className)} {...props} />;
}
