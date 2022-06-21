import Image from "cpm/Image";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";
const cx = classNames.bind(styles);
const border = "https://lienquan.garena.vn/asset/images/tab-default-hv.png";
const link =
  "https://lienquan.garena.vn/files/free_champions/67bd01ee2708589e83cf48a670bb15255d63c592846d4.png";
function Avatar({ src }) {
  console.log("xx");
  return (
    <div className={cx("wrapper")}>
      <img src={border} className={cx("border")} />
      <img src={link} className={cx("avatar")} />
    </div>
  );
}

export default Avatar;
