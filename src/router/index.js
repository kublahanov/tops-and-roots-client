import { route } from "quasar/wrappers";
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import routes from "./routes";
import AuthService from "src/services/auth.service";
import { useSectionDataStore } from "stores/sectionDataStore";
import { getMatchingMenuElement } from "src/utils/custom";
import appSectionsMenu from "src/router/menus/appSectionsMenu";
import guestMenu from "src/router/menus/guestMenu";
import profileMenu from "src/router/menus/profileMenu";

const combinedMenuLinks = [...appSectionsMenu, ...guestMenu, ...profileMenu];

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  const linkToLoginPage = Router.resolve({ name: "user-login" }).path;
  const linkToGuestPage = Router.resolve({ name: "home" }).path;

  /**
   * Проверка на необходимость ИМЕТЬ или НЕ ИМЕТЬ состояние аутентификации.
   */
  Router.beforeEach((to, from) => {
    if (to.meta["requiresAuth"]) {
      // console.log("requiresAuth");

      /**
       * Если на странице, где необходимо ИМЕТЬ состояние аутентификации, её нет
       * - выполняется редирект на страницу Логина.
       */
      if (AuthService.isGuest()) {
        return {
          path: linkToLoginPage,
        };
      }
    } else {
      // console.log("don't requiresAuth");
    }

    if (to.meta["requiresGuest"]) {
      // console.log("requiresGuest");

      /**
       * Если на странице, где необходимо НЕ ИМЕТЬ состояние аутентификации, она есть
       * - выполняется редирект на индексную гостевую страницу.
       */
      if (AuthService.isAuthenticated()) {
        return {
          path: linkToGuestPage,
        };
      }
    } else {
      // console.log("don't requiresGuest");
    }
  });

  Router.afterEach((to, from) => {
    const appStore = useSectionDataStore();
    const matchedLink = getMatchingMenuElement(combinedMenuLinks, to.path);
    appStore.updateAppSectionData(matchedLink);
  });

  return Router;
});
