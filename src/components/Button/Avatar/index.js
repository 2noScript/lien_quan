/* eslint-disable jsx-a11y/alt-text */
import classNames from "classnames/bind";
import { memo } from "react";
import styles from "./Avatar.module.scss";
const cx = classNames.bind(styles);
const border = "https://lienquan.garena.vn/asset/images/tab-default-hv.png";

function Avatar({ src, onClick }) {
  return (
    <div className={cx("wrapper")} onClick={onClick}>
      <img src={border} className={cx("border")} />
      <img src={src} className={cx("avatar")} />
    </div>
  );
}

export default memo(Avatar);
