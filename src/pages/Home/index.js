import { memo } from "react";
//components
import { Link } from "react-router-dom";
import { CardOne, CardTwo } from "cpm/Card";
import { ButtonMore, ButtonAvatar } from "cpm/Button";
import SeparatorLine from "cpm/SeparatorLine";
import Loading from "cpm/Loading";
import FreeGeneral from "./FreeGeneral";
//hooks
import { useRequest } from "~/hooks";
//images
import imgDown from "../../images/home/img-down.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);
function Home() {
  const [data] = useRequest("get", "/posts/5");
  const [dataFreeGeneral] = useRequest("get", "/free-general");
  if (!!(data && dataFreeGeneral))
    return (
      <div className={cx("wrapper")}>
        <div className={cx("news", "padding-layout")}>
          <div className={cx("title")}>tin tức mới nhất</div>
          <div className={cx("card-main")}>
            <CardOne data={data} />
            <CardOne data={data} />
          </div>
          <div className={cx("card-sub")}>
            <div className={cx("card-sub-col")}>
              <CardTwo />
              <CardTwo />
            </div>
            <div className={cx("card-sub-col")}>
              <CardTwo />
              <CardTwo />
            </div>
          </div>
          <div className={cx("btn-more")}>
            <Link to="/tin-tuc">
              <ButtonMore />
            </Link>
          </div>
        </div>
        <SeparatorLine />
        <div className={cx("free-general", "padding-layout")}>
          <div className={cx("title")}>tướng miễn phí tuần</div>
          <FreeGeneral data={dataFreeGeneral} />
        </div>
        <SeparatorLine />

        <div className={cx("config")}>
          <image src={imgDown} />
          <div className={cx("title")}>yêu cầu cấu hình thiết bị</div>
        </div>
      </div>
    );
  return <Loading />;
}

export default memo(Home);
