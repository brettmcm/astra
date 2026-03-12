import { cn } from './utils'
import { ReactNode } from 'react'
import { DurationBadge } from './duration_badge'

interface ItemCardProps {
  title?: string;
  updated?: string;
  spec?: string;
  duration?: string;
  thumbnail?: ReactNode;
  className?: string;
}

export function ItemCard({
  title = 'Item Title',
  updated = 'Edited 2m ago',
  spec = '4K',
  duration = '0:01:30',
  thumbnail,
  className
}: ItemCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-start overflow-clip rounded-lg border border-border-primary bg-surface-bg w-[305px]',
        className
      )}
    >
      {/* Media */}
      <div
        className="relative w-full aspect-[316/177] overflow-clip"
        style={!thumbnail ? {
          backgroundImage: 'linear-gradient(168deg, rgb(26, 58, 42) 8%, rgb(45, 90, 58) 42%, rgb(74, 122, 74) 92%)'
        } : undefined}
      >
        {thumbnail && (
          <div className="absolute inset-0">
            {thumbnail}
          </div>
        )}
        {duration && (
          <DurationBadge duration={duration} className="absolute bottom-3 right-3 z-10" />
        )}
      </div>

      {/* Description */}
      <div className="flex flex-col gap-1 items-start w-full px-3 py-3">
        <p className="text-label text-text-primary w-full">{title}</p>
        <div className="flex items-center gap-1.5 h-[13px]">
          <span className="text-video-title text-text-primary whitespace-nowrap">{updated}</span>
          <div className="size-[3px] rounded-sm bg-on-reverse shrink-0" />
          <span className="text-video-title text-text-primary whitespace-nowrap">{spec}</span>
        </div>
      </div>
    </div>
  );
}
