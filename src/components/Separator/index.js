import { memo } from "react";
import classNames from "classnames/bind";
import styles from "./Separator.module.scss";
const cx = classNames.bind(styles);
function Separator({ className }) {
  return (
    <div
      className={cx("wrapper", {
        [className]: className,
      })}
    >
      <div className={cx("line")}></div>
    </div>
  );
}

export default memo(Separator);
