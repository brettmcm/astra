import { cn } from './utils'
import { ReactNode } from 'react'

interface ButtonGroupProps {
  children: ReactNode;
  align?: 'justify' | 'start' | 'end' | 'center' | 'stack';
  className?: string;
}

export function ButtonGroup({
  children,
  align = 'justify',
  className
}: ButtonGroupProps) {
  const alignStyles = {
    justify: 'flex-row justify-between',
    start: 'flex-row justify-start',
    end: 'flex-row justify-end',
    center: 'flex-row justify-center',
    stack: 'flex-col',
  };

  return (
    <div
      className={cn(
        'flex gap-3 w-full',
        alignStyles[align],
        align === 'stack' && '[&>*]:w-full',
        align === 'justify' && '[&>*]:flex-1',
        className
      )}
    >
      {children}
    </div>
  );
}
