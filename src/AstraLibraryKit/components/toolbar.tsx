import { cn } from './utils'
import { ReactNode } from 'react'

interface ToolbarProps {
  children: ReactNode;
  className?: string;
}

export function Toolbar({
  children,
  className
}: ToolbarProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center justify-center gap-2 px-2',
        'h-12 rounded-2xl',
        'bg-surface-bg border border-border-primary',
        'shadow-[0px_0px_12.1px_0px_rgba(0,0,0,0.1)]',
        className
      )}
    >
      {children}
    </div>
  );
}
