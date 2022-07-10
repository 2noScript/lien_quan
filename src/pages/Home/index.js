import { memo } from "react";
//components
import { CardOne, CardTwo } from "cpm/Card";
import Loading from "cpm/Loading";
import FreeGeneral from "~/pages/Home/FreeGeneral";
import SeparatorLine from "cpm/SeparatorLine";
import { ButtonMore } from "cpm/Button";
import { Link } from "react-router-dom";
import Image from "cpm/Image";
//hooks
import { useRequest } from "~/hooks";
//images
import bgCham from "~/images/home/bg-cham.jpg";
import bgConfig from "~/images/home/bg-down.jpg";
import bgConfigContent from "~/images/home/img-down.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);
function Home() {
  const [data] = useRequest("get", "/posts/9");
  const [dataFreeGeneral] = useRequest("get", "/free-general");
  if (!!(data && dataFreeGeneral))
    return (
      <div className={cx("wrapper")}>
        <div className={cx("news")}>
          <div className={cx("title")}>tin tức mới nhất</div>
          <div className={cx("news-content")}>
            <div className={cx("row", "row-1")}>
              <CardOne data={data} className={cx("row-1-item", "card-one")} />
              <CardOne data={data} className={cx("row-1-item", "card-one")} />
            </div>
            <div className={cx("row", "row-2")}>
              <div className={cx("row-2-item")}>
                <CardTwo data={data} className={cx("card-two")} />
                <CardTwo data={data} className={cx("card-two")} />
              </div>
              <div className={cx("row-2-item")}>
                <CardTwo data={data} className={cx("card-two")} />
                <CardTwo data={data} className={cx("card-two")} />
              </div>
            </div>
            <div className={cx("more-btn")}>
              <Link to="/tin-tuc">
                <ButtonMore></ButtonMore>
              </Link>
            </div>
          </div>
        </div>
        <SeparatorLine />
        <div
          className={cx("free-general")}
          style={{ backgroundImage: `url(${bgCham})` }}
        >
          <div className={cx("title")}>tướng miến phí tuần</div>
          <div className={cx("chams")}>
            <FreeGeneral data={dataFreeGeneral} />
          </div>
        </div>
        <SeparatorLine />
        <div
          className={cx("config")}
          style={{ backgroundImage: `url(${bgConfig})` }}
        >
          <div className={cx("config-content")}>
            <Image src={bgConfigContent} />
            <div className={cx("title", "config-title")}>
              yêu cầu cấu hình thiết bị
            </div>
            <p className={cx("notice")}>
              Lưu ý: Các thiết bị đời thấp hoặc có cấu hình thấp hơn Cấu hình
              tối thiểu dưới đây vẫn có thể tải và chơi game, tuy nhiên có thể
              sẽ gặp tình trạng lag/giật/văng game do cấu hình thiết bị không
              đạt yêu cầu.
            </p>
            <div className={cx("tables")}>
              <div className={cx("table-1")}>
                <div className={cx("device")}>android</div>
                <div className={cx("need")}>
                  yêu cầu thiết bị (tối thiểu)
                  <ul>
                    <li>Chip: CPU 2.5GHz 4 Cores</li>
                    <li>RAM: 2GB</li>
                    <li>Phiên bản: Android 4.4 hoặc cao hơn</li>
                    <li>Dung lượng bộ nhớ trống: 2GB hoặc nhiều hơn</li>
                  </ul>
                </div>
              </div>
              <div className={cx("table-2")}>
                <div className={cx("device")}>ios</div>
                <div className={cx("need")}>
                  yêu cầu thiết bị (tối thiểu)
                  <ul>
                    <li>IPhone 5S hoặc cao hơn</li>
                    <li>Phiên bản: iOS 8.0 hoặc cao hơn</li>
                    <li>Dung lượng bộ nhớ trống: 2GB hoặc nhiều hơn</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  return <Loading />;
}

export default memo(Home);
