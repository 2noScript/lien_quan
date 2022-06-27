import classNames from "classnames/bind";
import styles from "./One.module.scss";
import Image from "cpm/Image";
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
          <Image src={data.img} className={cx("img")}>
            <div className={cx("title")}>
              <p>{data.title}</p>
            </div>
          </Image>
        </div>
      )}
    </>
  );
}

export default memo(One);
