import React, { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";
const Home = lazy(() => import('../pages/Home/Home'));
const Goods = lazy(() => import('../pages/Goods/Goods'));
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/goods",
    element: <Goods />
  }
];
export default routes;