const children = [
  { path: "", component: () => import("pages/IndexPage.vue") },
  { path: "/page2", component: () => import("pages/PageTwo.vue") },
  { path: "/page3", component: () => import("pages/PageThree.vue") },
];

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children,
  },
  {
    path: "/from-wa",
    component: () => import("layouts/FromWALayout.vue"),
    children,
  },
  {
    path: "/old",
    component: () => import("layouts/OldLayout.vue"),
    children,
  },
  {
    path: "/wa",
    component: () => import("layouts/WhatsAppLayout.vue"),
    children,
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
