import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-slate-100 text-slate-950 hover:bg-slate-200",
        secondary: "bg-white/10 text-white border border-white/10 hover:bg-white/15",
        outline: "border border-white/15 text-white hover:bg-white/5",
        ghost: "text-white/70 hover:bg-white/10"
      },
      size: {
        sm: "h-9 px-3",
        md: "h-11 px-5",
        lg: "h-14 px-7"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = "Button";

export { Button, buttonVariants };
