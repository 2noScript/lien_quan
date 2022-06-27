import { memo } from "react";
//components
import Image from "cpm/Image";
import { Link } from "react-router-dom";
import Loading from "cpm/Loading";
import Slideshow from "cpm/Slideshow";
//hooks

import { useRequest } from "~/hooks";
//images

// Import Swiper styles

import classNames from "classnames/bind";
import styles from "./Other.module.scss";
const cx = classNames.bind(styles);

function Other({ children }) {
  const [data] = useRequest("get", "slide?type=2");
  return (
    <div className={cx("wrapper")}>
      <Slideshow data={data} />
      {children}
    </div>
  );
}

export default memo(Other);
