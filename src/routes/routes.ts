import LandingPage from "../pages/Landing/landing-page.vue";
import {
  createRouter,
  createWebHistory,
  type RouteLocationNormalized,
} from "vue-router";
import routesMeta from "../routes-meta.json";
import { categoryRoute, componentRoute } from "./route-utils";

const routes = [
  {
    path: "/",
    name: "Home",
    component: LandingPage,
  },
  {
    path: "/setup",
    name: "Setup",
    component: () => import("../pages/Setup/setup-page.vue"),
  },
  {
    path: "/components",
    name: "Components",
    component: () => import("../pages/Components/components-page.vue"),
  },
  {
    path: "/specs",
    name: "Specs",
    component: () => import("../pages/Specs/specs-page.vue"),
  },

  categoryRoute("pc"),
  categoryRoute("laptop"),
  categoryRoute("monitors"),
  categoryRoute("peripherals"),
  categoryRoute("audio"),
  categoryRoute("workspace"),

  componentRoute("pc"),
  componentRoute("laptop"),
  componentRoute("monitors"),
  componentRoute("peripherals"),
  componentRoute("audio"),
  componentRoute("workspace"),

  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../pages/404/404-page.vue"),
  },
];

const Router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(
    _to: RouteLocationNormalized,
    _from: RouteLocationNormalized,
    savedPosition: { left: number; top: number } | null,
  ) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

/*
  Each address is served with its own head tags from the same table. This keeps
  the title right when the visitor moves between routes without a page load.
*/
Router.afterEach((to) => {
  const path = to.path.replace(/\/?$/, "/");
  const route = routesMeta.find((item) => item.path === path);
  document.title = route ? route.title : "Page Not Found | WorkStation Setup";
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", route ? route.description : "");
});

export default Router;
