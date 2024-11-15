import React, { useState } from "react";
import clsx from "clsx"; // For conditional class names
import style from "./TextField.module.scss";
import "../../../index.css";

type TextFieldProps = {
  label?: string;
  required?: boolean;
  placeHolder?: string;

  value: string | number;
  onChange: (e: string | number) => void;

  disabled?: boolean;
  variant?: "text" | "number" | "password";

  size?: "450px" | "100%" | string;
  minHeight?: "81px" | "max-content" | string;

  icon?: React.ReactNode;
  onIconclick: () => void;

  errorMsg?: string | undefined | null;
};

const TextField: React.FC<TextFieldProps> = ({
  label,
  required = false,
  placeHolder = "Hi, i am input",
  value = "",
  onChange,
  disabled = false,
  variant = "text",
  size = "450px",
  minHeight = "81px",
  icon,
  onIconclick,
  errorMsg,
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
          id={label}
          type={variant}
          value={value}
          required={required}
          placeholder={placeHolder}
          disabled={disabled}
          onFocus={() => setIsFocused(true)} // Set focus state
          onBlur={() => setIsFocused(false)}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={!!errorMsg}
          aria-describedby={errorId}
        />
        {icon && (
          <span
            className={style.icon}
            onClick={onIconclick}
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
