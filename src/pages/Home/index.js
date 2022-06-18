//components

//components
import Image from "cpm/Image";
import { Link } from "react-router-dom";
//hooks

import { useRequest } from "~/hooks";
//images

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
const cx = classNames.bind(styles);
function Home() {
  return <div className={cx("wrapper")}>this is home</div>;
}

export default Home;
