import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import bg from "./btn.png";
import styles from "./Primary.module.scss";
const cx = classNames.bind(styles);
console.log(bg);
function Primary({ children, url = "#" }) {
  return (
    <div className={cx("wrapper")} style={{ backgroundImage: `url(${bg})` }}>
      <Link to={url} className={cx("content")}>
        {children}
      </Link>
    </div>
  );
}

export default Primary;
