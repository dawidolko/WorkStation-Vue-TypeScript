import { RouteLocationNormalized, NavigationGuardNext } from "vue-router";
import { getComponent } from "../data/WorkStation-utils";

function parseRouteId(id: string | string[]): number {
  if (Array.isArray(id)) return parseInt(id[0]);
  return parseInt(id);
}

export function categoryRoute(category: string) {
  return {
    path: `/${category}`,
    component: () => import("../pages/Category/category-page.vue"),
    props: { category: category },
  };
}

export function componentRoute(category: string) {
  return {
    path: `/${category}/:id`,
    name: category,
    component: () => import("../pages/Product/product-page.vue"),
    props: (route: any) => ({
      category: category,
      componentId: parseInt(route.params.id),
    }),
    beforeEnter: (
      to: RouteLocationNormalized,
      _: RouteLocationNormalized,
      next: NavigationGuardNext,
    ) => {
      if (getComponent(category, parseRouteId(to.params.id))) {
        next();
        return;
      }
      next({
        name: "NotFound",
        params: { pathMatch: to.path.split("/").filter(Boolean) },
        replace: true,
      });
    },
  };
}
