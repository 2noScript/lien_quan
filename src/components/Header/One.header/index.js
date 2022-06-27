import { Link } from "react-router-dom";
import { memo } from "react";
import logo_new from "../logo-new.png";
import bg_nav_top from "../bg-nav-top.png";
import classNames from "classnames/bind";
import styles from "./OneHeader.module.scss";
const cx = classNames.bind(styles);
function One({ data }) {
  if (data)
    return (
      <div
        className={cx("wrapper")}
        style={{
          backgroundImage: `url(${bg_nav_top})`,
        }}
      >
        <div
          className={cx("logo")}
          style={{ backgroundImage: `url(${logo_new})` }}
        ></div>
        <div className={cx("navbar")}>
          <div className={cx("left")}>
            {data.navLeft.map((item, index) => (
              <Link to={item.url} key={index} className={cx("item")}>
                <div>{item.name}</div>
              </Link>
            ))}
          </div>
          <div className={cx("right")}>
            {data.navRight.map((item, index) => (
              <Link to={item.url} key={index} className={cx("item")}>
                <div>{item.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  return <></>;
}

export default memo(One);
