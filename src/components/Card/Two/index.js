import classNames from "classnames/bind";
import Image from "cpm/Image";
import { memo } from "react";
import styles from "./Two.module.scss";
const cx = classNames.bind(styles);
const link =
  "https://lienquan.garena.vn/files/posts/0ded5863888fc2af17b6972f885344b062b05275212fd.jpg";
function Two({ data, className = "" }) {
  return (
    <div
      className={cx("wrapper", {
        [className]: className,
      })}
    >
      <Image src={link} />
    </div>
  );
}

export default memo(Two);
