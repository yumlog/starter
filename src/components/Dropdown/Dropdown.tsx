import { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import DownIcon from "/public/images/icon-chevron-down.svg";
import CheckIcon from "/public/images/icon-40-check.svg";
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
        <span
          className={`${
            selectedItem === null ? "text-gray-50" : "text-gray-100"
          }`}
        >
          {selectedItem?.label || label}
        </span>
        <DownIcon
          className={`fill-current text-gray-80 shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
          width={40}
          height={40}
        />
      </button>
      {isOpen && (
        <div className={cx("list")}>
          <Scrollbars
            autoHeight
            autoHeightMin={100}
            autoHeightMax={545}
            renderThumbVertical={(props) => (
              <div
                {...props}
                style={{
                  width: "8px",
                  backgroundColor: "var(--gray-40)",
                  borderRadius: "5px",
                }}
              />
            )}
            renderTrackVertical={(props) => (
              <div
                {...props}
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "32px",
                  height: "100%",
                  padding: "12px",
                }}
              />
            )}
          >
            <ul>
              {list.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleSelectItem(item)}
                  className={cx("item")}
                >
                  {item.prefix && <>{item.prefix}</>}
                  <span>{item.label}</span>
                  {selectedItem?.label === item.label && <CheckIcon />}
                </li>
              ))}
            </ul>
          </Scrollbars>
        </div>
      )}
    </div>
  );
}
