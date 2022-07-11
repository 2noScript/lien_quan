import { Link } from "react-router-dom";
import { memo } from "react";
import classNames from "classnames/bind";
import bg from "./btn.png";
import styles from "./Primary.module.scss";
const cx = classNames.bind(styles);
function Primary({ children, url = "#", active, className }) {
  return (
    <div
      className={cx("wrapper", { active, [className]: className })}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Link to={url} className={cx("content")}>
        {children}
      </Link>
    </div>
  );
}

export default memo(Primary);
