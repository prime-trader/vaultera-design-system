import React, { LegacyRef, useState } from "react";
import clsx from "clsx"; // For conditional class names
import style from "./TextField.module.scss";
import "../../../index.css";

type TextFieldProps = {
  id?: string;
  textFieldRef?: LegacyRef<HTMLInputElement> ;
  label?: string;
  required?: boolean;
  placeholder?: string;

  value: string;
  onChange: (e: string) => void;

  disabled?: boolean;
  variant?: "text" | "number" | "password";

  size?: "450px" | "100%" | string;
  minHeight?: "81px" | "max-content" | string;

  icon?: React.ReactNode;
  onIconClick: () => void;

  errorMsg?: string | undefined | null;
};

const TextField: React.FC<TextFieldProps> = ({
  id,
  label,
  required = false,
  placeholder = "I am placeholder...",
  value = "",
  onChange,
  disabled = false,
  variant = "text",
  size = "450px",
  minHeight = "81px",
  icon,
  onIconClick,
  errorMsg,
  textFieldRef
}) => {
  const errorId = errorMsg ? "error-msg" : undefined;
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div
      className={clsx(style.TextFieldWrapper, style[variant])}
      style={{ width: size, minHeight: minHeight }}
    >
      {label && (
        <label htmlFor={label} className={style.lbl}>
          {label} {required && <span>*</span>}
        </label>
      )}
      <div
        className={clsx(style.TextFieldCon, {
          [style.focused]: isFocused,
          [style.error]: errorMsg,
        })}
      >
        <input
          id={id ?? label}
          ref={textFieldRef}
          type={variant}
          value={value}
          required={required}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setIsFocused(true)} // Set focus state
          onBlur={() => setIsFocused(false)}
          onChange={(e) => onChange(e.target.value.toString())}
          aria-invalid={!!errorMsg}
          aria-describedby={errorId}
        />
        {icon && (
          <span
            className={style.icon}
            onClick={onIconClick}
            role="button"
            tabIndex={0}
            aria-label="icon"
          >
            {icon}
          </span>
        )}
      </div>
      {errorMsg && (
        <p id={errorId} className={style.errorMsg}>
          {errorMsg}
        </p>
      )}
    </div>
  );
};
export default TextField;
