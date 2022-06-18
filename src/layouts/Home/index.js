//components

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

//components
import Image from "cpm/Image";
import { Link } from "react-router-dom";
//hooks

import { useRequest } from "~/hooks";
//images

import down1 from "img/home/bt-down_1.png";
import down2 from "img/home/bt-down_2.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
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
  const [data] = useRequest("get", "slide?type=1");
  // console.log(data);
  return (
    <div className={cx("wrapper")}>
      {data && (
        <Swiper
          // pagination={true}
          className={cx("slide")}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
        >
          {data.map((item) => {
            if (item.id > 0)
              return (
                <SwiperSlide key={item.id} className={cx("slide-item")}>
                  <Link to={"#"}>
                    <Image src={item.url} width={"100%"} />
                  </Link>
                </SwiperSlide>
              );
          })}
          <div className={cx("download")}>
            {download.map((item, index) => (
              // eslint-disable-next-line react/jsx-no-target-blank
              <a href={item.link} key={index} target="_blank">
                <Image src={item.img} />
              </a>
            ))}
          </div>
        </Swiper>
      )}
      {children}
    </div>
  );
}

export default Home;
