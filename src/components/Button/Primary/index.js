import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import bg from "./btn.png";
import styles from "./Primary.module.scss";
const cx = classNames.bind(styles);
function Primary({ children, url = "#", active }) {
  return (
    <div
      className={cx("wrapper", { active })}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Link to={url} className={cx("content")}>
        {children}
      </Link>
    </div>
  );
}

export default Primary;
