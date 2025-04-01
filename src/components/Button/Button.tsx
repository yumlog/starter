"use client";

import RightIcon from "/public/images/icon-chevron-right.svg";
import styles from "./Button.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

interface ButtonProps {
  label?: React.ReactNode;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  color?: "black" | "gray" | "white" | "blackline" | "grayline";
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
      {prefix && <>{prefix}</>}
      {label && <span className={cx("label")}>{label}</span>}
      {suffix && <>{suffix}</>}
      {type === "more" && (
        <RightIcon
          className={`aspect-square
            ${
              size === "lg"
                ? "w-9"
                : size === "md"
                ? "w-8"
                : size === "sm"
                ? "w-6"
                : ""
            }
          `}
        />
      )}
    </button>
  );
}
