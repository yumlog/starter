import { useState, ReactNode, useEffect } from "react";
import Button, { ButtonProps } from "@/components/Button/Button"; // ButtonProps 가져오기
import CloseIcon from "/public/images/icon-36-substract.svg";
import classNames from "classnames/bind";
import styles from "./Dialog.module.scss";
const cx = classNames.bind(styles);

interface FooterButton extends Omit<ButtonProps, "children"> {} // children 제외

interface DialogProps {
  type?: "default" | "bottomsheet";
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
  close?: boolean;
  footer?: FooterButton[];
  dimClose?: boolean;
}

export default function Dialog({
  type = "default",
  isOpen,
  onClose,
  children,
  close = true,
  footer = [],
  dimClose = true,
}: DialogProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
    }
  }, [isOpen]);

  const closeDialog = () => {
    setIsAnimating(false);
    if (onClose) {
      setTimeout(onClose, 300);
    }
  };

  const handleButtonClick = (onClick?: () => void) => {
    if (onClick) {
      onClick();
    }
    closeDialog();
  };

  const handleDimClick = () => {
    if (dimClose) closeDialog();
  };

  return isOpen ? (
    <div className={cx("dim", { open: isAnimating })} onClick={handleDimClick}>
      <div
        className={cx("dialog", type, { open: isAnimating })}
        onClick={(e) => e.stopPropagation()}
      >
        {close && (
          <button onClick={closeDialog}>
            <CloseIcon />
          </button>
        )}
        {children}
        {footer.length > 0 && (
          <div className={cx("footer")}>
            {footer.map((button, index) => (
              <Button
                key={index}
                onClick={() => handleButtonClick(button.onClick)}
                {...button}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  ) : null;
}
