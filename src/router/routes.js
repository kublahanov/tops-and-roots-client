import { useAppStore } from "stores/sectionData-store";
import { appSectionMenuLinks, profileMenuLinks } from "src/router/menu";
import { getMatchingMenuElement } from "src/js/custom";

const combinedMenuLinks = [...appSectionMenuLinks, ...profileMenuLinks];

function beforeEnter(to, from) {
  const appStore = useAppStore();
  const matchedLink = getMatchingMenuElement(combinedMenuLinks, to.path);
  appStore.updateAppSectionData(matchedLink);
}

// prettier-ignore
const routes = [
  {
    path: "/", // Гостевая индексная страница
    component: () => import("layouts/GuestLayout.vue"),
    beforeEnter: () => useAppStore().resetAppSectionData(),
    children: [
      { path: "", component: () => import("pages/main/IndexPage.vue"), name: "guest-index" },
    ],
  },
  {
    path: "/auth", // Пользователь
    component: () => import("layouts/AuthLayout.vue"),
    children: [
      { path: "", redirect: { name: "user-login" } },
      { path: "login", component: () => import("pages/auth/LoginPage.vue"), name: "user-login" },
      { path: "register", component: () => import("pages/auth/RegisterPage.vue"), name: "user-register" },
      { path: "logout", component: () => import("pages/user/LogoutPage.vue"), name: "user-logout" },
    ],
  },
  {
    path: "/libs", // Библиотека
    component: () => import("layouts/MainLayout.vue"),
    beforeEnter,
    children: [
      { path: "", redirect: { name: "libs-books" }, beforeEnter },
      { path: "books", component: () => import("pages/main/libs/BooksPage.vue"), name: "libs-books", beforeEnter },
      { path: "authors", component: () => import("pages/main/libs/AuthorsPage.vue"), name: "libs-authors", beforeEnter },
      { path: "cites", component: () => import("pages/main/libs/CitesPage.vue"), name: "libs-cites", beforeEnter },
    ],
  },
  {
    path: "/films", // Фильмотека
    component: () => import("layouts/MainLayout.vue"),
    beforeEnter,
    children: [
      { path: "", redirect: { name: "films-index" } },
      { path: "index", component: () => import("pages/main/films/IndexPage.vue"), name: "films-index" },
    ],
  },
  {
    path: "/cards", // Картотека
    component: () => import("layouts/MainLayout.vue"),
    beforeEnter,
    children: [
      { path: "", redirect: { name: "cards-index" } },
      { path: "index", component: () => import("pages/main/cards/IndexPage.vue"), name: "cards-index" },
    ],
  },
  {
    path: "/bios", // Биография
    component: () => import("layouts/MainLayout.vue"),
    beforeEnter,
    children: [
      { path: "", redirect: { name: "bios-index" } },
      { path: "index", component: () => import("pages/main/bios/IndexPage.vue"), name: "bios-index" },
    ],
  },
  {
    path: "/plans", // Планирование
    component: () => import("layouts/MainLayout.vue"),
    beforeEnter,
    children: [
      { path: "", redirect: { name: "plans-index" } },
      { path: "index", component: () => import("pages/main/plans/IndexPage.vue"), name: "plans-index" },
    ],
  },
  {
    path: "/user", // Пользователь
    component: () => import("layouts/UserLayout.vue"),
    children: [
      { path: "", redirect: { name: "user-profile" } },
      { path: "profile", component: () => import("pages/user/IndexPage.vue"), name: "user-profile" },
      { path: "settings", component: () => import("pages/user/SettingsPage.vue"), name: "user-settings" },
      { path: "club", component: () => import("pages/user/ClubPage.vue"), name: "user-club" },
    ],
  },
  {
    path: "/:catchAll(.*)*", // 404 Not found
    component: () => import("pages/ErrorNotFound.vue"),
    beforeEnter,
    name: "not-found",
  },
];

export default routes;
