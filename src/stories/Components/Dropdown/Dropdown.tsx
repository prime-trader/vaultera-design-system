import React, { LegacyRef, useState } from "react";
import clsx from "clsx"; // For conditional class names
import style from "./Dropdown.module.scss";
import "../../../index.css";

type DropdownProps = {
  id?: string;
  dropdownRef?: LegacyRef<HTMLInputElement>;
  label?: string;
  required?: boolean;
  placeholder?: string;

  value: object;
  onChange: (e: object) => void;

  optionLst: object;
  disabled?: boolean;
  size?: "450px" | "100%" | string;
  errorMsg?: string | undefined | null;
};

const Dropdown: React.FC<DropdownProps> = ({
  id,
  label,
  required = false,
  placeholder = "Hi, i am input",
  value = null,
  onChange,
  size = "450px",
  errorMsg,
  dropdownRef,
}) => {
  const errorId = errorMsg ? "error-msg" : undefined;
  return (
    <div className={clsx(style.TextFieldWrapper)} style={{ width: size }}>
      {errorMsg && (
        <p id={errorId} className={style.errorMsg}>
          {errorMsg}
        </p>
      )}
    </div>
  );
};
export default Dropdown;
