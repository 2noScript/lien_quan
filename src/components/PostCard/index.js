import classNames from "classnames/bind";
import Image from "cpm/Image";

import styles from "./PostCard.module.scss";
const cx = classNames.bind(styles);
function PostCard({ data }) {
  return (
    <>
      {data && (
        <>
          <div className={cx("wrapper")}>
            <Image
              src={data.img}
              height={164}
              width={350}
              className={cx("img")}
            />
            <div className={cx("content")}>
              <p className={cx("title")}>{data.title}</p>
              <div className={cx("date")}>{data.date}</div>
              <div className={cx("description")}>{data.description}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default PostCard;
