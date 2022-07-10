import classNames from "classnames/bind";
import styles from "./One.module.scss";
import Image from "cpm/Image";
import AspectRatio from "cpm/AspectRatio";
import { memo } from "react";
const cx = classNames.bind(styles);
function One({ data, className }) {
  return (
    <>
      {data && (
        <div
          className={cx("wrapper", {
            [className]: className,
          })}
        >
          <AspectRatio ratio="46.67%">
            <div
              className={cx("bg")}
              style={{ backgroundImage: `url(${data.img})` }}
            ></div>
          </AspectRatio>
        </div>
      )}
    </>
  );
}

export default memo(One);
