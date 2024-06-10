const routes = [
  {
    path: "/", // Гостевая индексная страница
    name: "home",
    component: () => import("layouts/GuestLayout.vue"),
    children: [
      {
        path: "",
        redirect: { name: "help-index" },
        // component: () => import("pages/main/IndexPage.vue"),
        // name: "guest-index",
      },
    ],
  },
  {
    path: "/auth", // Пользователь
    component: () => import("layouts/AuthLayout.vue"),
    children: [
      { path: "", redirect: { name: "user-login" } },
      {
        path: "login",
        component: () => import("pages/auth/LoginPage.vue"),
        name: "user-login",
        meta: { requiresGuest: true },
      },
      {
        path: "register",
        component: () => import("pages/auth/RegisterPage.vue"),
        name: "user-register",
        meta: { requiresGuest: true },
      },
      {
        path: "logout",
        component: () => import("pages/user/LogoutPage.vue"),
        name: "user-logout",
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: "/libs", // Библиотека
    component: () => import("layouts/MainLayout.vue"),
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        redirect: { name: "libs-books" },
      },
      {
        path: "books",
        component: () => import("pages/main/libs/BooksPage.vue"),
        name: "libs-books",
      },
      {
        path: "authors",
        component: () => import("pages/main/libs/AuthorsPage.vue"),
        name: "libs-authors",
      },
      {
        path: "cites",
        component: () => import("pages/main/libs/CitesPage.vue"),
        name: "libs-cites",
      },
    ],
  },
  {
    path: "/films", // Фильмотека
    component: () => import("layouts/MainLayout.vue"),
    meta: { requiresAuth: true },
    children: [
      { path: "", redirect: { name: "films-index" } },
      {
        path: "index",
        component: () => import("pages/main/films/IndexPage.vue"),
        name: "films-index",
      },
    ],
  },
  {
    path: "/cards", // Картотека
    component: () => import("layouts/MainLayout.vue"),
    meta: { requiresAuth: true },
    children: [
      { path: "", redirect: { name: "cards-index" } },
      {
        path: "index",
        component: () => import("pages/main/cards/IndexPage.vue"),
        name: "cards-index",
      },
    ],
  },
  {
    path: "/bios", // Биография
    component: () => import("layouts/MainLayout.vue"),
    meta: { requiresAuth: true },
    children: [
      { path: "", redirect: { name: "bios-index" } },
      {
        path: "index",
        component: () => import("pages/main/bios/IndexPage.vue"),
        name: "bios-index",
      },
    ],
  },
  {
    path: "/plans", // Планирование
    component: () => import("layouts/MainLayout.vue"),
    meta: { requiresAuth: true },
    children: [
      { path: "", redirect: { name: "plans-index" } },
      {
        path: "index",
        component: () => import("pages/main/plans/IndexPage.vue"),
        name: "plans-index",
      },
    ],
  },
  {
    path: "/user", // Пользователь
    component: () => import("layouts/UserLayout.vue"),
    meta: { requiresAuth: true },
    children: [
      { path: "", redirect: { name: "user-profile" } },
      {
        path: "profile",
        component: () => import("pages/user/IndexPage.vue"),
        name: "user-profile",
      },
      {
        path: "settings",
        component: () => import("pages/user/SettingsPage.vue"),
        name: "user-settings",
      },
      {
        path: "club",
        component: () => import("pages/user/ClubPage.vue"),
        name: "user-club",
      },
    ],
  },
  {
    path: "/help", // Помощь
    component: () => import("layouts/GuestLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/help/IndexPage.vue"),
        name: "help-index",
      },
      {
        path: "libs",
        component: () => import("pages/help/libs/IndexPage.vue"),
        name: "help-libs",
      },
      {
        path: "films",
        component: () => import("pages/help/films/IndexPage.vue"),
        name: "help-films",
      },
      {
        path: "cards",
        component: () => import("pages/help/cards/IndexPage.vue"),
        name: "help-cards",
      },
      {
        path: "bios",
        component: () => import("pages/help/bios/IndexPage.vue"),
        name: "help-bios",
      },
      {
        path: "plans",
        component: () => import("pages/help/plans/IndexPage.vue"),
        name: "help-plans",
      },
    ],
  },
  {
    path: "/:catchAll(.*)*", // 404 Not found
    component: () => import("pages/ErrorNotFound.vue"),
    name: "not-found",
  },
];

export default routes;
