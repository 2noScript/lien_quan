//hooks
import { useRequest } from "~/hooks";
import { useState, useEffect, Fragment, memo } from "react";
import { useLocation } from "react-router-dom";
import Separator from "cpm/Separator";
//components

import { ButtonPrimary, ButtonMore } from "cpm/Button";
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
  const [data, setData] = useState();
  const [res] = useRequest("get", `${url}`);
  useEffect(() => {
    localStorage.setItem("postUrl", url);
  }, [url]);
  const handleMore = () => {
    if (limit >= res.length) return;
    setLimit(limit + 7);
  };
  useEffect(() => {
    if (res) {
      // console.log(res);
      if (limit < res.length) {
        setData(res.slice(0, limit - 1));
      } else {
        setData(res);
      }
    }
  }, [limit, res]);
  useEffect(() => {
    if (pathname === "/tin-tuc") {
      setUrl(`/posts`);
      return;
    }
    a_type.map((item) => {
      if (item.path === pathname) {
        setUrl(`/posts?type=${item.type}`);
      }
    });
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
              <div
                className={cx("menu-item")}
                key={index}
                onClick={() => {
                  setLimit(7);
                }}
              >
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
                <PostCard data={item} />
                <Separator />
              </Fragment>
            );
          })}
      </div>
      <div className={cx("btn-wrapper")}>
        {res && limit < res.length && <ButtonMore onClick={handleMore} />}
      </div>
    </div>
  );
}

export default memo(Other);
