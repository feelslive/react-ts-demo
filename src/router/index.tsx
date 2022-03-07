import React, { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";
const Home = lazy(() => import('../pages/Home/Home'));
const Goods = lazy(() => import('../pages/Goods/Goods'));
const About = lazy(() => import('../pages/About/About'));
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/goods",
    element: <Goods />
  },
  {
    path: "/about",
    element: <About />
  }
];
export default routes;