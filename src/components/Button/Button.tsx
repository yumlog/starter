"use client";

import RightIcon from "/public/images/icon-chevron-right.svg";
import styles from "./Button.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

interface ButtonProps {
  label: React.ReactNode;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  color?: "black" | "gray" | "white" | "outline";
  size?: "lg" | "md" | "sm" | "xs";
  type?: "normal" | "text" | "more" | "language";
  block?: boolean;
  disabled?: boolean;
  round?: boolean;
  onClick?: () => void;
}

export default function Button({
  label,
  suffix,
  prefix,
  color = "black",
  size = "sm",
  type = "normal",
  block = false,
  disabled = false,
  round = false,
  onClick,
}: ButtonProps) {
  const colorClass = color ? `color-${color}` : "";
  const sizeClass = size ? `size-${size}` : "";
  const blockClass = block ? "flex w-full" : "inline-flex";
  const roundedClass = round ? `${cx("round")}` : "";
  const typeClass = size ? `type-${type}` : "";

  return (
    <button
      type="button"
      className={cx(
        "btn",
        typeClass,
        colorClass,
        sizeClass,
        blockClass,
        roundedClass
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {prefix && <span className={cx("prefix")}>{prefix}</span>}
      <span className={cx("label")}>{label}</span>
      {suffix && <span className={cx("suffix")}>{suffix}</span>}
      {type === "more" && (
        <RightIcon
          className={`
            ${
              color === "black"
                ? "text-gray-100"
                : color === "gray"
                ? "text-gray-80"
                : "text-gray-100"
            }
            ${
              size === "lg"
                ? "w-9 aspect-square"
                : size === "md"
                ? "w-8 aspect-square"
                : size === "sm"
                ? "w-6 aspect-square"
                : ""
            }
          `}
        />
      )}
    </button>
  );
}
