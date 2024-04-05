const appSectionMenuLinks = [
  {
    title: "Библиотека",
    icon: "o_library_books",
    link: "/libs",
    linkName: "libs-books",
    color: "blue-8",
  },
  {
    title: "Фильмотека",
    icon: "o_movie",
    link: "/films",
    linkName: "films-index",
    color: "orange-8",
  },
  {
    title: "Картотека",
    icon: "o_dashboard_customize",
    link: "/cards",
    linkName: "cards-index",
    color: "red-8",
  },
  {
    title: "Биография",
    icon: "o_assignment_ind",
    link: "/bios",
    linkName: "bios-index",
    color: "teal-8",
  },
  {
    title: "Планирование",
    icon: "o_moving",
    link: "/plans",
    linkName: "plans-index",
    color: "indigo-8",
  },
];

const profileMenuLinks = [
  {
    title: "Профиль",
    icon: "o_account_circle",
    link: "/user/profile",
  },
  {
    title: "Настройки",
    icon: "o_settings",
    link: "/user/settings",
  },
  {
    title: "Клуб",
    icon: "o_groups",
    link: "/user/club",
  },
  {
    title: "Выход",
    icon: "o_logout",
    link: "/user/logout",
  },
];

export { appSectionMenuLinks, profileMenuLinks };
