import { cn } from './utils'
import { useState } from 'react'

interface RadioOption {
  value: string;
  label: string;
  description?: string;
}

interface RadioGroupProps {
  options: RadioOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  name?: string;
  disabled?: boolean;
  className?: string;
}

export function RadioGroup({
  options,
  value: controlledValue,
  defaultValue = '',
  onChange,
  name,
  disabled = false,
  className
}: RadioGroupProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const selected = controlledValue !== undefined ? controlledValue : internalValue;

  const handleSelect = (value: string) => {
    if (disabled) return;
    if (controlledValue === undefined) {
      setInternalValue(value);
    }
    onChange?.(value);
  };

  return (
    <div role="radiogroup" className={cn('flex flex-col gap-3', className)}>
      {options.map((option) => {
        const isSelected = selected === option.value;

        return (
          <label
            key={option.value}
            className={cn(
              'flex gap-3 items-start cursor-pointer',
              disabled && 'opacity-50 cursor-not-allowed'
            )}
          >
            <button
              role="radio"
              type="button"
              aria-checked={isSelected}
              onClick={() => handleSelect(option.value)}
              disabled={disabled}
              className={cn(
                'relative flex items-center justify-center size-5 shrink-0 rounded-full mt-0.5',
                'border transition-all duration-200',
                'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary',
                'disabled:cursor-not-allowed',
                isSelected
                  ? 'border-brand-primary'
                  : 'border-border-primary hover:border-text-secondary'
              )}
            >
              {isSelected && (
                <div className="size-2.5 rounded-full bg-brand-primary" />
              )}
            </button>
            {(option.label || option.description) && (
              <div className="flex flex-col gap-1 min-w-0">
                {option.label && (
                  <span className="text-label text-text-primary">{option.label}</span>
                )}
                {option.description && (
                  <span className="text-label-sm text-text-secondary">{option.description}</span>
                )}
              </div>
            )}
          </label>
        );
      })}
    </div>
  );
}
