const routes = [
  {
    path: "/",
    // component: () => import("layouts/MainLayout.vue"),
    redirect: {name: "libs-books"},
  },

  // Библиотека
  {
    path: "/libs",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", redirect: { name: "libs-books" } },
      { path: "books", component: () => import("pages/libs/BooksPage.vue"), name: "libs-books" },
      { path: "authors", component: () => import("pages/libs/AuthorsPage.vue") },
      { path: "cites", component: () => import("pages/libs/CitesPage.vue") },
    ],
  },

  // Фильмотека
  {
    path: "/films",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", redirect: { name: "films-index" } },
      { path: "index", component: () => import("pages/films/IndexPage.vue"), name: "films-index" },
    ],
  },

  // Картотека
  {
    path: "/cards",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", redirect: { name: "cards-index" } },
      { path: "index", component: () => import("pages/cards/IndexPage.vue"), name: "cards-index" },
    ],
  },

  // Биография
  {
    path: "/bios",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", redirect: { name: "bios-index" } },
      { path: "index", component: () => import("pages/bios/IndexPage.vue"), name: "bios-index" },
    ],
  },

  // Планирование
  {
    path: "/plans",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", redirect: { name: "plans-index" } },
      { path: "index", component: () => import("pages/plans/IndexPage.vue"), name: "plans-index" },
    ],
  },

  /**
   * 404 Not found.
   */
  { path: "/:catchAll(.*)*", component: () => import("pages/ErrorNotFound.vue"), name: "NotFound" },
];

export default routes;
