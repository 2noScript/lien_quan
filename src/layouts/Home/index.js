//components

import { memo } from "react";
//components
import Image from "cpm/Image";
import { Link } from "react-router-dom";
import Loading from "cpm/Loading";
import Slideshow from "cpm/Slideshow";
//hooks
import { useDesktop, useLaptop } from "~/hooks";
import { useRequest } from "~/hooks";
//images

import down1 from "img/home/bt-down_1.png";
import down2 from "img/home/bt-down_2.png";

// Import Swiper styles
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
const cx = classNames.bind(styles);
const download = [
  {
    img: down2,
    link: "https://play.google.com/store/apps/details?id=com.garena.game.kgvn",
  },
  {
    img: down1,
    link: "https://apps.apple.com/VN/app/id1150288115?mt=8",
  },
];
function Home({ children }) {
  const isDesktop = useDesktop();
  const isLaptop = useLaptop();
  const [data] = useRequest("get", "slide?type=1");
  return (
    <div className={cx("wrapper")}>
      <div className={cx("w-top")}>
        <Slideshow data={data} />
        {isDesktop | isLaptop && (
          <div className={cx("download")}>
            {download.map((item, index) => (
              // eslint-disable-next-line react/jsx-no-target-blank
              <a href={item.link} key={index} target="_blank">
                <Image src={item.img} />
              </a>
            ))}
          </div>
        )}
      </div>
      {children}
    </div>
  );
}

export default memo(Home);
