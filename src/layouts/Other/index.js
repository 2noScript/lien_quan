//components

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

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
import styles from "./Other.module.scss";
const cx = classNames.bind(styles);

function Other({ children }) {
  const [data] = useRequest("get", "slide?type=2");
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
        </Swiper>
      )}
      {children}
    </div>
  );
}

export default Other;
