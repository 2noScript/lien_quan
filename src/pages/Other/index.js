import classNames from "classnames/bind";
import { ButtonPrimary } from "cpm/Button";
import styles from "./Other.module.scss";
const cx = classNames.bind(styles);
const menu = [
  {
    name: "tất cả",
    link: "/tin-tuc",
  },
  {
    name: "cẩm nang",
    link: "../tin-tuc/danh-muc/cam-nang",
  },
  {
    name: "sự kiện",
    link: "../tin-tuc/danh-muc/su-kien",
  },
  {
    name: "giải đấu",
    link: "../tin-tuc/danh-muc/hoat-dong",
  },
  {
    name: "hợp tác",
    link: "/hop-tac",
  },
];
function Other() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("w-menu")}>
        <div className={cx("menu")}>
          {menu.map((item, index) => (
            <div className={cx("menu-item")} key={index}>
              <ButtonPrimary url={item.link}>{item.name}</ButtonPrimary>
            </div>
          ))}
        </div>
      </div>
      <div className={cx("content")}>1</div>
    </div>
  );
}

export default Other;
