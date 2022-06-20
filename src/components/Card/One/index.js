import classNames from "classnames/bind";
import styles from "./One.module.scss";
import Image from "cpm/Image";
import AspectRatio from "cpm/AspectRatio";
import { memo } from "react";
const cx = classNames.bind(styles);
function One({ data }) {
  const ratio = (260 / 564) * 100;
  const imgRatio = (214 / 564) * 100;
  return (
    <>
      {data && (
        <div className={cx("wrapper")}>
          <AspectRatio ratio={`${ratio}%`}>
            <AspectRatio ratio={`${imgRatio}%`}>
              <Image src={data.img} className={cx("img")} />
            </AspectRatio>
            <div className={cx("title")}>
              <p>{data.title}</p>
            </div>
          </AspectRatio>
        </div>
      )}
    </>
  );
}

export default memo(One);
