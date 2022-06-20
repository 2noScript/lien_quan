import classNames from "classnames/bind";
import Image from "cpm/Image";
import AspectRatio from "cpm/AspectRatio";
import { memo } from "react";
import styles from "./Two.module.scss";
const cx = classNames.bind(styles);
const link =
  "https://lienquan.garena.vn/files/posts/0ded5863888fc2af17b6972f885344b062b05275212fd.jpg";
function Two({ data }) {
  //   const ratio = "100%";
  return (
    <div className={cx("wrapper")}>
      <AspectRatio>
        <Image src={link} />
      </AspectRatio>
    </div>
  );
}

export default memo(Two);
