import { createWebHistory, createRouter, RouterOptions } from "vue-router";

import DefaultLayout from "./layouts/DefaultLayout.vue";
import Home from "./pages/Home.vue";
import Login from "./pages/Login.vue";
import About from "./pages/About.vue";
import Settings from "./pages/settings/index.vue";
import Users from "./pages/settings/Users/index.vue";
import UserDetail from "./pages/settings/Users/UserDetail.vue";
import Roles from "./pages/settings/Roles/index.vue";
import NotFound from "./pages/NotFound.vue";

const token = localStorage.getItem("TELEHEALTH_ACCESS_TOKEN");

const routerOptions: RouterOptions = {
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: DefaultLayout,
      meta: {
        requiredAuth: true,
      },
      children: [
        {
          path: "/",
          component: Home,
        },
        {
          path: "about",
          component: About,
        },
        {
          path: "settings",
          component: Settings,
          children: [
            {
              path: "users",
              component: Users,
            },
            {
              path: "roles",
              component: Roles,
            },
          ],
        },
        {
          path: "settings/users/:id",
          component: UserDetail,
        },
      ],
    },
    {
      path: "/login",
      component: Login,
      meta: {
        requiredAuth: false,
      },
    },
    {
      path: "/404",
      name: "NotFound",
      component: NotFound,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: { name: "NotFound" },
    },
  ],
};

const router = createRouter(routerOptions);

router.beforeEach((to) => {
  if (to.meta.requiredAuth && !token) {
    return {
      path: "/login",
    };
  }

  if (!to.meta.requiredAuth && token) {
    return {
      path: "/",
    };
  }
});

export default router;
