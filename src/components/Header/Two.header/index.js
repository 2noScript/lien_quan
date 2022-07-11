import Image from "cpm/Image";
import classNames from "classnames/bind";
import styles from "./TwoHeader.module.scss";
import topM from "../nv-top-m.png";
import logo from "../app-icon-new.png";
import { Link } from "react-router-dom";
import icoHome from "./icon-home.png";
import icoNews from "./icon-news.png";

import icohv from "./icon-hv.png";
import icoHoptac from "./caothu.png";

import downGame from "./downgame.png";
import { useLocation } from "react-router-dom";
import { memo, useState, useEffect } from "react";
const cx = classNames.bind(styles);
const icon = [icoHome, icoNews, icohv, icoHoptac];
function Two({ data }) {
  const { pathname } = useLocation();
  return (
    <>
      <div className={cx("wrapper")}>
        <Image src={topM} width={"100%"} />
        <Image src={logo} className={cx("logo")} />
        <a href="https://play.google.com/store/apps/details?id=com.garena.game.kgvn">
          <Image className={cx("down-game")} src={downGame}></Image>
        </a>
        <div className={cx("lienQuan")}>
          <h2>garena liên quân mobile</h2>
          <h3>thắng bại tại kỹ năng</h3>
        </div>
      </div>
      <div className={cx("nav")}>
        {data &&
          pathname &&
          data.navLeft.map((item, index) => {
            return (
              <Link
                className={cx(
                  "nav-item",
                  `${pathname === item.url && "active"}`
                )}
                key={index}
                to={item.url}
              >
                <Image src={icon[index]} className={cx("icon")} />
                <span>{item.name}</span>
              </Link>
            );
          })}

        <Link
          className={cx(
            "nav-item",
            `${pathname === data.navRight[2].url && "active"}`
          )}
          to={data.navRight[2].url}
        >
          <Image src={icon[3]} className={cx("icon")} />
          <span>{data.navRight[2].name}</span>
        </Link>
      </div>
    </>
  );
}

export default memo(Two);
