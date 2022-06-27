import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { Link } from "react-router-dom";
import Image from "cpm/Image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import classNames from "classnames/bind";
import styles from "./Slideshow.module.scss";
const cx = classNames.bind(styles);

function Slideshow({ data }) {
  return (
    <Swiper
      className={cx("wrapper")}
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
      {data &&
        data.map((item) => {
          if (item.id > 0)
            return (
              <SwiperSlide key={item.id} className={cx("slide-item")}>
                <Link to={"#"}>
                  <Image src={item.url} width={"100%"} />
                </Link>
              </SwiperSlide>
            );
        })}
    </Swiper>
  );
}

export default Slideshow;
