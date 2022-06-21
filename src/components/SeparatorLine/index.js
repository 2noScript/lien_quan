import classNames from "classnames/bind";
import Image from "cpm/Image";
import styles from "./SeparatorLine.module.scss";
import line from "./line.png";

const cx = classNames.bind(styles);

function SeparatorLine() {
  return (
    <div className={cx("wrapper")}>
      <Image src={line} className={cx("line")} />
    </div>
  );
}

export default SeparatorLine;
