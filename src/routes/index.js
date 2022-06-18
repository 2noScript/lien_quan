//pages
import Home from "~/pages/Home";
import Other from "~/pages/Other";
import routesConfig from "~/configs/routes";

//layout

import { HomeLayout, OtherLayout } from "~/layouts";
import { Fragment } from "react";

const publicRoutes = [
  { path: routesConfig.home, component: Home, layout: HomeLayout },
  { path: routesConfig.news, component: Other, layout: OtherLayout },
  { path: routesConfig.handbook, component: Other, layout: OtherLayout },
];
const privateRoutes = {};
export { publicRoutes, privateRoutes };
