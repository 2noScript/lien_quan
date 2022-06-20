import { memo } from "react";
import classNames from "classnames/bind";
import styles from "./More.module.scss";
const cx = classNames.bind(styles);
function More({ onClick }) {
  return (
    <div className={cx("more")} onClick={onClick}>
      <span>xem thêm</span>
      <span className={cx("more-ico")}></span>
    </div>
  );
}

export default memo(More);
