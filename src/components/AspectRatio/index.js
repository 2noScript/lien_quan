import classNames from "classnames/bind";
import { memo } from "react";
import styles from "./AspectRatio.module.scss";
const cx = classNames.bind(styles);

//default ratio 1:1
//children with 100% and heght 100%
function AspectRatio(props) {
  const { children, ratio } = props;
  return (
    <div className={cx("wrapper")} style={{ paddingTop: `${ratio}` }}>
      <div className={cx("content")}>{children}</div>
    </div>
  );
}

export default memo(AspectRatio);
