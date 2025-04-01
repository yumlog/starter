"use client";

import { useState } from "react";
import SubstractIcon from "/public/images/icon-36-substract.svg";
import styles from "./Textfield.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

interface TextfieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
}

export default function Textfield({
  label,
  placeholder,
  value: propValue,
  disabled = false,
  error = false,
  errorMessage,
}: TextfieldProps) {
  const [value, setValue] = useState(propValue ?? "");

  return (
    <div className={cx("textfield")}>
      {label && <label className={cx("label")}>{label}</label>}
      <div className={cx("input")}>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onChange={(e) => setValue(e.target.value)}
        />
        {value && (
          <button onClick={() => setValue("")}>
            <SubstractIcon />
          </button>
        )}
      </div>
      {error && <p className={cx("error")}>{errorMessage}</p>}
    </div>
  );
}
