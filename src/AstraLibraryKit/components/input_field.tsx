import { cn } from "./utils";
import { useRef, type InputHTMLAttributes, type ReactNode } from "react";

interface InputFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "prefix" | "suffix"> {
  value?: string;
  placeholder?: string;
  label?: string;
  description?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  disabled?: boolean;
  className?: string;
  onChange?: (value: string) => void;
}

export function InputField({
  value,
  placeholder = "I am a placeholder...",
  label,
  description,
  prefix,
  suffix,
  disabled = false,
  className,
  onChange,
  ...rest
}: InputFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={cn("relative", className)}>
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            className="text-label-sm font-medium text-text-primary cursor-pointer"
            onClick={() => inputRef.current?.focus()}
          >
            {label}
          </label>
        )}

        <div
          className={cn(
            "flex items-center gap-2 bg-bg-subtle w-full rounded-lg px-3 py-2.5 transition-colors",
            "has-[:focus]:bg-bg-hover",
            !disabled && "hover:bg-bg-hover",
            disabled && "opacity-50 cursor-not-allowed",
          )}
          onClick={() => inputRef.current?.focus()}
        >
          {prefix && (
            <span className="shrink-0 text-text-secondary">{prefix}</span>
          )}
          <input
            ref={inputRef}
            type="text"
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            onChange={(e) => onChange?.(e.target.value)}
            className={cn(
              "bg-transparent w-full font-sans text-input-sm leading-none font-normal text-text-primary",
              "placeholder:text-text-secondary",
              "outline-none border-none",
            )}
            {...rest}
          />
          {suffix && (
            <span className="shrink-0 text-text-secondary">{suffix}</span>
          )}
        </div>

        {description && (
          <span className="text-video-title text-text-secondary">
            {description}
          </span>
        )}
      </div>
    </div>
  );
}
