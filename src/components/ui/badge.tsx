import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "green" | "amber" | "surface" | "error" | "blue";
  dot?: boolean;
  pulse?: boolean;
  className?: string;
}

const variants = {
  green:   "bg-green-light text-green-deep border-green/20",
  amber:   "bg-amber-light text-amber border-amber/20",
  surface: "bg-[var(--surface-2)] text-[var(--body)] border-[var(--border)]",
  error:   "bg-error-light text-error border-error/20",
  blue:    "bg-blue-50 text-blue-700 border-blue-200",
};

export function Badge({ children, variant = "green", dot, pulse, className }: BadgeProps) {
  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border",
      "text-[10px] font-bold tracking-[0.08em] uppercase",
      variants[variant],
      className
    )}>
      {dot && (
        <span className={cn(
          "w-1.5 h-1.5 rounded-full",
          variant === "green" ? "bg-green" : variant === "amber" ? "bg-amber" : "bg-current",
          pulse && "animate-pulse-dot"
        )} />
      )}
      {children}
    </span>
  );
}
