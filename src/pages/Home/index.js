import { memo } from "react";
//components
import { Link } from "react-router-dom";
import { CardOne, CardTwo } from "cpm/Card";
import { ButtonMore } from "cpm/Button";
import Image from "cpm/Image";
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
        <div className={cx("news")}>
          <div className={cx("title")}>tin tức mới nhất</div>
          <div className={cx("news-w", "default-layout")}>
            <div
              className={cx("card-one")}
              style={{ backgroundImage: `url(${data.img})` }}
            >
              <p>{data.title}</p>
            </div>
            <div
              className={cx("card-one")}
              style={{ backgroundImage: `url(${data.img})` }}
            ></div>
            <div>
              <CardTwo data={data} className={cx("card-two")} />
              <CardTwo data={data} className={cx("card-two")} />
              <CardTwo data={data} className={cx("card-two")} />
              <CardTwo data={data} className={cx("card-two")} />
            </div>
          </div>
        </div>
      </div>
    );
  return <Loading />;
}

export default memo(Home);
