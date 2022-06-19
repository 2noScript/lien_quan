//hooks
import { useRequest } from "~/hooks";
import { useState, useEffect, Fragment, useRef } from "react";
import { useLocation } from "react-router-dom";
import { instance } from "~/hooks/useRequest";
import Separator from "cpm/Separator";
//components

import { ButtonPrimary } from "cpm/Button";
import PostCard from "cpm/PostCard";
//style
import { menu, a_type } from "./option.js";
import classNames from "classnames/bind";
import styles from "./Other.module.scss";
const cx = classNames.bind(styles);

function Other() {
  const { pathname } = useLocation();
  const [url, setUrl] = useState(localStorage.getItem("postUrl"));
  const [limit, setLimit] = useState(7);

  const [data] = useRequest("get", `${url}`, {
    params: {
      _limit: limit,
    },
  });

  useEffect(() => {
    localStorage.setItem("postUrl", url);
  }, [url]);
  useEffect(() => {
    a_type.map((item) => {
      if (item.path === pathname) setUrl(`/posts?type=${item.type}`);
    });
    if (pathname === "/tin-tuc") {
      setUrl("/posts");
    }
  }, [pathname]);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("w-menu")}>
        <div className={cx("menu")}>
          {menu.map((item, index) => {
            if (pathname === item.path)
              return (
                <div className={cx("menu-item")} key={index}>
                  <ButtonPrimary url={item.link} active>
                    {item.name}
                  </ButtonPrimary>
                </div>
              );
            return (
              <div className={cx("menu-item")} key={index}>
                <ButtonPrimary url={item.link}>{item.name}</ButtonPrimary>
              </div>
            );
          })}
        </div>
      </div>
      <div className={cx("content")}>
        {data &&
          data.map((item, index) => {
            return (
              <Fragment key={index}>
                {item.id > 0 && (
                  <>
                    <PostCard data={item} />
                    <Separator />
                  </>
                )}
              </Fragment>
            );
          })}
      </div>
      <div className={cx("btn-wrapper")}>
        <div className={cx("more")}>
          <span>xem thêm</span>
          <span className={cx("more-ico")}></span>
        </div>
      </div>
    </div>
  );
}

export default Other;
