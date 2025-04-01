"use client";

import styles from "./Badge.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

interface BadgeProps {
  label: React.ReactNode;
  color?:
    | "white"
    | "dark"
    | "light"
    | "gray"
    | "red"
    | "blue"
    | "green"
    | "orange"
    | "purple";
  size?: "md" | "sm";
  bold?: boolean;
}

export default function Badge({
  label,
  color = "white",
  size = "sm",
  bold = false,
}: BadgeProps) {
  const colorClass = color ? `color-${color}` : "";
  const sizeClass = size ? `size-${size}` : "";
  const boldClass = bold ? `${cx("bold")}` : "";

  return (
    <div className={cx("badge", colorClass, sizeClass, boldClass)}>
      <span>{label}</span>
    </div>
  );
}
