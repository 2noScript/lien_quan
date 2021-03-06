//hooks
import { useDesktop, useLaptop } from "~/hooks";

//components
import { HeaderOne, HeaderTwo } from "cpm/Header";
import Image from "cpm/Image";
import Footer from "cpm/Footer";
//image
import warning from "img/defaultLayout/warning.jpg";
//package
import { memo } from "react";
import classNames from "classnames/bind";
import styles from "./Default.module.scss";

const cx = classNames.bind(styles);
function Default({ children }) {
  const isDesktop = useDesktop();
  const isLaptop = useLaptop();
  return (
    <div className={cx("wrapper")}>
      {isLaptop | isDesktop ? <HeaderOne /> : <HeaderTwo />}
      <Image src={warning} width={152} height={67} className={cx("warning")} />
      <div className={cx("content")}> {children}</div>
      <Footer />
    </div>
  );
}

export default memo(Default);
