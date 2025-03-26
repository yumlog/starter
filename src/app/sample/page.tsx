import styles from "./sample.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default function Home() {
  return (
    <div className="flex items-center">
      <h1 className="text-primary">샘플</h1>
      <p>😭</p>
      <span className={cx("badge")}>뱃지입니당</span>
    </div>
  );
}
