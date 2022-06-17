//pages
import Home from "~/pages/Home";

import routesConfig from "~/configs/routes";

//layout

import { DefaultLayout } from "~/layouts";
import { Fragment } from "react";

const publicRoutes = [
  { path: routesConfig.home, component: Home, layout: DefaultLayout },
];
const privateRoutes = {};
export { publicRoutes, privateRoutes };
