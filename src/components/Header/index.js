//components
import One from "./One.header";
import Two from "./Two.header";
// image

//package

//hooks
import routesConfig from "~/configs/routes";
const navLeft = [
  {
    name: "trang chủ",
    url: routesConfig.home,
  },
  {
    name: "tin tức",
    url: routesConfig.news,
  },
  {
    name: "học viện",
    // url: routesConfig.introduce,
    url: "/",
  },
];

const navRight = [
  {
    name: "giftcode",
    url: routesConfig.giftcode,
  },
  {
    name: "tài khoản",
    url: "/",
  },
  {
    name: "hợp tác",
    url: "/",
  },
];
function HeaderOne() {
  return <One data={{ navLeft, navRight }} />;
}

function HeaderTwo() {
  return <Two data={{ navLeft, navRight }} />;
}
export { HeaderOne, HeaderTwo };
