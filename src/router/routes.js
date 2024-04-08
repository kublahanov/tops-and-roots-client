import { useAppStore } from "stores/example-store";
import { appSectionMenuLinks, profileMenuLinks } from "src/router/menu";

const combinedMenuLinks = [...appSectionMenuLinks, ...profileMenuLinks];

function findLinkMatchingHref(links, href) {
  return links.find(link => href.startsWith(link.link));
}

function beforeEnter(to, from) {
  const appStore = useAppStore();
  const matchedLink = findLinkMatchingHref(combinedMenuLinks, to.href);
  appStore.updateAppSectionData(matchedLink);
  console.log("beforeEnter >> ", "from: ", from.path, "to: ", to.path, "Name: ", matchedLink.link);
}

const routes = [
  {
    path: "/",
    // component: () => import("layouts/MainLayout.vue"),
    // beforeEnter,
    redirect: { name: "libs-books" },
  },

  // Библиотека
  {
    path: "/libs",
    component: () => import("layouts/MainLayout.vue"),
    beforeEnter,
    children: [
      { path: "", redirect: { name: "libs-books" }, beforeEnter },
      { path: "books", component: () => import("pages/libs/BooksPage.vue"), name: "libs-books", beforeEnter },
      { path: "authors", component: () => import("pages/libs/AuthorsPage.vue"), beforeEnter },
      { path: "cites", component: () => import("pages/libs/CitesPage.vue"), beforeEnter },
    ],
  },

  // Фильмотека
  {
    path: "/films",
    component: () => import("layouts/MainLayout.vue"),
    beforeEnter,
    children: [
      { path: "", redirect: { name: "films-index" } },
      { path: "index", component: () => import("pages/films/IndexPage.vue"), name: "films-index" },
    ],
  },

  // Картотека
  {
    path: "/cards",
    component: () => import("layouts/MainLayout.vue"),
    beforeEnter,
    children: [
      { path: "", redirect: { name: "cards-index" } },
      { path: "index", component: () => import("pages/cards/IndexPage.vue"), name: "cards-index" },
    ],
  },

  // Биография
  {
    path: "/bios",
    component: () => import("layouts/MainLayout.vue"),
    beforeEnter,
    children: [
      { path: "", redirect: { name: "bios-index" } },
      { path: "index", component: () => import("pages/bios/IndexPage.vue"), name: "bios-index" },
    ],
  },

  // Планирование
  {
    path: "/plans",
    component: () => import("layouts/MainLayout.vue"),
    beforeEnter,
    children: [
      { path: "", redirect: { name: "plans-index" } },
      { path: "index", component: () => import("pages/plans/IndexPage.vue"), name: "plans-index" },
    ],
  },

  // 404 Not found
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
    beforeEnter,
    name: "not-found",
  },
];

export default routes;
