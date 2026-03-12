import { cn } from "./utils";
import { type ReactNode, type ButtonHTMLAttributes } from "react";

interface SecondaryNavItemProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  icon: ReactNode;
  label: string;
  active?: boolean;
  className?: string;
}

export function SecondaryNavItem({
  icon,
  label,
  active = false,
  className,
  ...rest
}: SecondaryNavItemProps) {
  return (
    <button
      className={cn(
        "flex items-center gap-lg px-lg py-lg w-full rounded-corner-md transition-colors cursor-pointer text-left",
        active
          ? "bg-brand-tertiary text-brand-primary"
          : "text-text-secondary hover:bg-bg-hover",
        className,
      )}
      aria-current={active ? "page" : undefined}
      {...rest}
    >
      <span className="size-5 shrink-0">{icon}</span>
      <span className="text-label-sm whitespace-nowrap">{label}</span>
    </button>
  );
}
