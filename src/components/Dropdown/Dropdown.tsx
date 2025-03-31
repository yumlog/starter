"use client";

import { useState } from "react";
import RightIcon from "/public/images/icon-chevron-right.svg";
import styles from "./Dropdown.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

interface DropdownItem {
  label: string;
  prefix?: React.ReactNode;
}

interface DropdownProps {
  label: string;
  list: DropdownItem[];
}

export default function Dropdown({ label, list }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectItem = (item: DropdownItem) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className={cx("dropdown")}>
      <button onClick={toggleDropdown} className={cx("label")}>
        <span>{selectedItem?.label || label}</span>
        <RightIcon
          className="fill-current text-gray-80 shrink-0"
          width={40}
          height={40}
        />
      </button>
      {isOpen && (
        <div className={cx("list")}>
          <ul>
            {list.map((item, index) => (
              <li
                key={index}
                onClick={() => handleSelectItem(item)}
                className={cx("item")}
              >
                {item.prefix && <>{item.prefix}</>}
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
