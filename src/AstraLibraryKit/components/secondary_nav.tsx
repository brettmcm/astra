import { cn } from "./utils";
import { type ReactNode } from "react";

interface SecondaryNavProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function SecondaryNav({
  title,
  children,
  className,
}: SecondaryNavProps) {
  return (
    <nav
      className={cn(
        "flex flex-col gap-xl bg-surface-secondary-bg border-r border-border-primary px-xl py-lg w-[252px] h-full",
        className,
      )}
    >
      <div className="py-lg">
        <h2 className="text-heading text-text-primary">{title}</h2>
      </div>
      <div className="flex flex-col gap-xs flex-1">
        {children}
      </div>
    </nav>
  );
}
