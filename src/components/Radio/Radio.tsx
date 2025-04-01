"use client";

import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Radio.module.scss";
const cx = classNames.bind(styles);

interface RadioOption {
  label?: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  error?: boolean;
}

interface RadioProps {
  name: string;
  options: RadioOption[];
  wrapClass?: string;
}

export default function Radio({ name, options, wrapClass }: RadioProps) {
  const [selectedValue, setSelectedValue] = useState<string>(
    options.find((option) => option.checked)?.value || ""
  );

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div className={wrapClass}>
      {options.map((option) => (
        <label
          key={option.value}
          className={cx("radio", {
            checked: selectedValue === option.value,
            disabled: option.disabled,
            error: option.error,
          })}
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => handleRadioChange(option.value)}
            disabled={option.disabled}
          />
          <span className={cx("icon")}></span>
          {option.label && <span className={cx("label")}>{option.label}</span>}
        </label>
      ))}
      {/* <div>Selected Value: {selectedValue}</div> */}
    </div>
  );
}
