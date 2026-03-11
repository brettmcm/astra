import { cn } from './utils'
import { ReactNode, ButtonHTMLAttributes } from 'react'

interface ToolbarItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  selected?: boolean;
  className?: string;
}

export function ToolbarItem({
  icon,
  selected = false,
  className,
  ...props
}: ToolbarItemProps) {
  return (
    <button
      className={cn(
        'flex items-center justify-center size-8 rounded-lg overflow-clip shrink-0 transition-colors',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary',
        selected
          ? 'bg-brand-secondary'
          : 'hover:bg-bg-hover',
        className
      )}
      {...props}
    >
      <span className={cn(
        'flex items-center justify-center',
        selected ? 'opacity-85' : 'opacity-50'
      )}>
        {icon}
      </span>
    </button>
  );
}
