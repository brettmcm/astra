import { cn } from "./utils";
import { useRef, type TextareaHTMLAttributes } from "react";

interface TextareaFieldProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange"> {
  value?: string;
  placeholder?: string;
  label?: string;
  description?: string;
  disabled?: boolean;
  className?: string;
  onChange?: (value: string) => void;
}

export function TextareaField({
  value,
  placeholder = "Your text goes here...",
  label,
  description,
  disabled = false,
  className,
  onChange,
  rows = 3,
  ...rest
}: TextareaFieldProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div className={cn("relative", className)}>
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            className="text-label-sm font-medium text-text-primary cursor-pointer"
            onClick={() => textareaRef.current?.focus()}
          >
            {label}
          </label>
        )}

        <textarea
          ref={textareaRef}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          rows={rows}
          onChange={(e) => onChange?.(e.target.value)}
          className={cn(
            "bg-bg-subtle w-full rounded-lg px-3 py-2.5 font-sans text-input-sm font-normal text-text-primary transition-colors resize-vertical",
            "placeholder:text-text-secondary",
            "outline-none border-none",
            "focus:bg-bg-hover",
            !disabled && "hover:bg-bg-hover",
            disabled && "opacity-50 cursor-not-allowed resize-none",
          )}
          {...rest}
        />

        {description && (
          <span className="text-video-title text-text-secondary">
            {description}
          </span>
        )}
      </div>
    </div>
  );
}
