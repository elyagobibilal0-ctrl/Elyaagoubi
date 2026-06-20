import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return <div className={cn("glass-card rounded-[28px] p-6", className)} {...props} />;
}

export function CardHeader({ className, ...props }: CardProps) {
  return <div className={cn("mb-4 flex items-start justify-between gap-4", className)} {...props} />;
}

export function CardTitle({ className, ...props }: CardProps) {
  return <h3 className={cn("text-xl font-semibold tracking-tight text-white", className)} {...props} />;
}

export function CardDescription({ className, ...props }: CardProps) {
  return <p className={cn("text-sm text-slate-300", className)} {...props} />;
}
