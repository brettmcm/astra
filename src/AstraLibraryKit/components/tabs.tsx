import { cn } from './utils'
import { ReactNode, useState } from 'react'

interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  onChange?: (tabId: string) => void;
  className?: string;
}

export function Tabs({
  tabs,
  defaultTab,
  onChange,
  className
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id || '');

  const handleSelect = (tabId: string) => {
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  const activeContent = tabs.find(t => t.id === activeTab)?.content;

  return (
    <div className={cn('flex flex-col', className)}>
      <div role="tablist" className="flex border-b border-border-secondary">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${tab.id}`}
              onClick={() => handleSelect(tab.id)}
              className={cn(
                'px-4 py-2.5 text-label-sm font-medium transition-colors relative',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-inset',
                isActive
                  ? 'text-brand-primary'
                  : 'text-text-secondary hover:text-text-primary'
              )}
            >
              {tab.label}
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary" />
              )}
            </button>
          );
        })}
      </div>
      <div
        role="tabpanel"
        id={`tabpanel-${activeTab}`}
        className="pt-4"
      >
        {activeContent}
      </div>
    </div>
  );
}
