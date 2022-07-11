import classNames from "classnames/bind";
import styles from "./GiftCode.module.scss";
import Footer from "cpm/Footer";
import Image from "cpm/Image";
import bg from "./pr.png";
import btn from "./btn01.png";
const cx = classNames.bind(styles);
function GiftCode() {
  return (
    <div className={cx("wrapper")}>
      <Image src={bg} />
      <div className={cx("content")}>
        <input type="text" placeholder="Vui lòng nhập code" />
        <div style={{ backgroundImage: `url(${btn})` }} className={cx("btn")}>
          {/* <Image src={btn} /> */}
        </div>

        <div className={cx("notice")}>
          Khi số lượng người cùng quy đổi quá nhiều, bạn có thể gặp lỗi "Hệ
          thống đang bận". Vui lòng chờ một chút rồi thử lại nhé!
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default GiftCode;
