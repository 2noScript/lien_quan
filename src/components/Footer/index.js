import { memo } from "react";
//components
import SeparatorLine from "cpm/SeparatorLine";

import Image from "cpm/Image";
//images
import logoFooter from "img/defaultLayout/logo-footer.png";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
const cx = classNames.bind(styles);
function Footer() {
  return (
    <>
      <SeparatorLine />
      <div className={cx("wrapper")}>
        {/* <Image src={logoFooter} width={624} height={111} /> */}
        <Image src={logoFooter} className={cx("logo-footer")} width={"100%"} />
        <div className={cx("address")}>
          <p>
            CÔNG TY CỔ PHẦN GIẢI TRÍ VÀ THỂ THAO ĐIỆN TỬ VIỆT NAM
            <br />
            Giấy CNĐKKD số 0105301438, cấp lần đầu ngày 10/05/2011
            <br />
            Cơ quan cấp: Phòng Đăng ký kinh doanh- Sở Kế hoạch và đầu tư TP Hà
            Nội
            <br />
            Địa chỉ trụ sở chính: Tầng 29, tòa nhà Trung tâm Lotte Hà Nội, số
            54, đường Liễu Giai, Phường Cống Vị, Quận Ba Đình,
            <br /> Thành phố Hà Nội, Việt Nam.
            <br />
            Điện thoại: 024 73053939
          </p>
        </div>
        <div className={cx("rule")}>
          <a href="https://www.garena.vn/terms" target="_blank">
            Điều khoản dịch vụ
          </a>
          |
          <a href="https://www.garena.vn/privacy" target="_blank">
            Chính sách bảo mật
          </a>
          |
          <a href="" target="_blank">
            Chính sách giải quyết tranh chấp
          </a>
        </div>
      </div>
    </>
  );
}

export default memo(Footer);
