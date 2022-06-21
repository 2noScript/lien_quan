import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { memo } from "react";
//components
import Image from "cpm/Image";
import { Link } from "react-router-dom";
import Loading from "cpm/Loading";

//hooks

import { useRequest } from "~/hooks";
//images

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import classNames from "classnames/bind";
import styles from "./Other.module.scss";
const cx = classNames.bind(styles);

function Other({ children }) {
  const [data] = useRequest("get", "slide?type=2");
  return (
    <div className={cx("wrapper")}>
      {!data ? (
        <Loading />
      ) : (
        <Swiper
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
        </Swiper>
      )}
      {children}
    </div>
  );
}

export default memo(Other);
