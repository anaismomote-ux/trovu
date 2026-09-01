import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-sans font-semibold tracking-wide uppercase transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-40 disabled:cursor-not-allowed select-none",
  {
    variants: {
      variant: {
        primary:  "bg-green text-white hover:bg-green-deep active:scale-[.98] focus-visible:ring-green",
        outline:  "bg-transparent text-green border-[1.5px] border-green hover:bg-green-light active:scale-[.98] focus-visible:ring-green",
        ghost:    "bg-transparent text-[var(--muted)] border-[1.5px] border-[var(--border)] hover:bg-[var(--surface-2)] active:scale-[.98]",
        surface:  "bg-[var(--surface)] text-[var(--body)] border-[1.5px] border-[var(--border)] hover:bg-[var(--surface-2)] active:scale-[.98]",
        amber:    "bg-amber text-white hover:opacity-90 active:scale-[.98] focus-visible:ring-amber",
        danger:   "bg-error text-white hover:opacity-90 active:scale-[.98] focus-visible:ring-error",
      },
      size: {
        sm:  "text-[10px] px-3 py-1.5 rounded-md",
        md:  "text-[11px] px-5 py-3 rounded-lg",
        lg:  "text-[12px] px-7 py-4 rounded-lg",
        xl:  "text-[13px] px-8 py-4 rounded-xl",
        icon:"p-2.5 rounded-lg",
      },
      full: {
        true:  "w-full",
        false: "w-auto",
      },
    },
    defaultVariants: {
      variant: "primary",
      size:    "md",
      full:    false,
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, full, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, full }), className)}
      {...props}
    />
  )
);
Button.displayName = "Button";
