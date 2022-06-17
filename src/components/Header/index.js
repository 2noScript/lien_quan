//components
import { Link } from "react-router-dom";
// image
import logo_new from "./logo-new.png";
import bg_nav_top from "./bg-nav-top.png";

//package
import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);
const navLeft = [
  {
    name: "trang chủ",
    url: "",
  },
  {
    name: "tin tức",
    url: "",
  },
  {
    name: "học viện",
    url: "",
  },
];

const navRight = [
  {
    name: "giftcode",
    url: "",
  },
  {
    name: "tài khoản",
    url: "",
  },
  {
    name: "hợp tác",
    url: "",
  },
];
function Header() {
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
          {navLeft.map((item, index) => (
            <Link to={item.url} key={index} className={cx("item")}>
              <div>{item.name}</div>
            </Link>
          ))}
        </div>
        <div className={cx("right")}>
          {navRight.map((item, index) => (
            <Link to={item.url} key={index} className={cx("item")}>
              <div>{item.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
