import { cn } from './utils'
import { useState, InputHTMLAttributes } from 'react'

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type' | 'size'> {
  label?: string;
  description?: string;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export function Checkbox({
  label,
  description,
  defaultChecked = false,
  onChange,
  disabled = false,
  className,
  ...props
}: CheckboxProps) {
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = () => {
    if (disabled) return;
    const newChecked = !checked;
    setChecked(newChecked);
    onChange?.(newChecked);
  };

  return (
    <label
      className={cn(
        'flex gap-3 items-start cursor-pointer',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      <button
        role="checkbox"
        type="button"
        aria-checked={checked}
        onClick={handleChange}
        disabled={disabled}
        className={cn(
          'relative flex items-center justify-center size-5 shrink-0 rounded mt-0.5',
          'border transition-all duration-200',
          'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary',
          'disabled:cursor-not-allowed',
          checked
            ? 'bg-brand-primary border-brand-primary'
            : 'bg-transparent border-border-primary hover:border-text-secondary'
        )}
      >
        {checked && (
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="text-on-brand"
          >
            <path
              d="M2.5 6L5 8.5L9.5 3.5"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
      {(label || description) && (
        <div className="flex flex-col gap-1 min-w-0">
          {label && (
            <span className="text-label text-text-primary">{label}</span>
          )}
          {description && (
            <span className="text-label-sm text-text-secondary">{description}</span>
          )}
        </div>
      )}
    </label>
  );
}
