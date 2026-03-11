import { cn } from "./utils";
import { useRef, type InputHTMLAttributes } from "react";

interface InputFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  value?: string;
  placeholder?: string;
  label?: string;
  description?: string;
  disabled?: boolean;
  className?: string;
  onChange?: (value: string) => void;
}

export function InputField({
  value,
  placeholder = "I am a placeholder...",
  label,
  description,
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
            className="text-body-md font-medium text-text-primary cursor-pointer"
            onClick={() => inputRef.current?.focus()}
          >
            {label}
          </label>
        )}

        <input
          ref={inputRef}
          type="text"
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.value)}
          className={cn(
            "bg-bg-subtle w-full rounded-lg px-3 py-2.5 font-sans text-body-md leading-[1.4] font-normal text-text-primary transition-colors",
            "placeholder:text-text-secondary",
            "outline-none border-none",
            "focus:bg-bg-hover",
            !disabled && "hover:bg-bg-hover",
            disabled && "opacity-50 cursor-not-allowed",
          )}
          {...rest}
        />

        {description && (
          <span className="text-body-sm text-text-secondary">
            {description}
          </span>
        )}
      </div>
    </div>
  );
}
