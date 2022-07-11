//pages
import Home from "~/pages/Home";
import Other from "~/pages/Other";
import GiftCode from "~/pages/GiftCode";
import routesConfig from "~/configs/routes";

//layout

import { HomeLayout, OtherLayout } from "~/layouts";
import { Fragment } from "react";

const publicRoutes = [
  { path: routesConfig.home, component: Home, layout: HomeLayout },
  // other
  { path: routesConfig.news, component: Other, layout: OtherLayout },
  { path: routesConfig.handbook, component: Other, layout: OtherLayout },
  { path: routesConfig.event, component: Other, layout: OtherLayout },
  { path: routesConfig.tournaments, component: Other, layout: OtherLayout },
  { path: routesConfig.cooperation, component: Other, layout: OtherLayout },
  //
  { path: routesConfig.introduce, component: Fragment, layout: OtherLayout },
  {
    path: routesConfig.giftcode,
    component: GiftCode,
    layout: Fragment,
  },
];
const privateRoutes = {};
export { publicRoutes, privateRoutes };
