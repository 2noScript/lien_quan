/* eslint-disable jsx-a11y/alt-text */
import classNames from "classnames/bind";
import { useState, useEffect, memo } from "react";
import { ButtonAvatar } from "cpm/Button";
import Image from "cpm/Image";

import styles from "./FreeGeneral.module.scss";
const cx = classNames.bind(styles);

function FreeGeneral({ data }) {
  const [currentBg, setCurrentBg] = useState();
  useEffect(() => {
    setCurrentBg(data[0].img);
  }, [data]);
  console.log(1);
  return (
    <div className={cx("wrapper")}>
      <Image src={currentBg} className={cx("bg")} />
      <div className={cx("select")}>
        {data &&
          data.map((item, index) => {
            return (
              <ButtonAvatar
                className={cx(`avatar-btn-${index}`, "avatar-btn")}
                src={item.avatar}
                key={index}
                onClick={() => {
                  setCurrentBg(item.img);
                }}
              />
            );
          })}
      </div>
    </div>
  );
}

export default memo(FreeGeneral);
