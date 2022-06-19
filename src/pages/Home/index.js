//components

//components
import { Link } from "react-router-dom";
import { ButtonPrimary } from "cpm/Button";
//hooks

//images
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);
function Home() {
  return (
    <div className={cx("wrapper")}>
      <ButtonPrimary>tất cả</ButtonPrimary>
    </div>
  );
}

export default Home;
