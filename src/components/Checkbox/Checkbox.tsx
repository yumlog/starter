"use client";

import { useState } from "react";
import CheckIcon from "/public/images/icon-checkbox-check.svg";
import classNames from "classnames/bind";
import styles from "./Checkbox.module.scss";

const cx = classNames.bind(styles);

interface CheckBoxProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  error?: boolean;
  onChange?: (checked: boolean) => void;
}

export default function Checkbox({
  label,
  checked = false,
  disabled = false,
  error = false,
  onChange,
}: CheckBoxProps) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const newChecked = e.target.checked;
    setIsChecked(newChecked);
    onChange?.(newChecked);
  };

  return (
    <label className={cx("checkbox", { checked: isChecked, disabled, error })}>
      <input
        type="checkbox"
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
      />
      <span className={cx("icon")}>
        <CheckIcon />
      </span>
      {label && <span className={cx("label")}>{label}</span>}
    </label>
  );
}
