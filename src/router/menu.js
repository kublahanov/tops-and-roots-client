/**
 * Меню разделов приложения.
 */
const appSectionMenuLinks = [
  {
    title: "Библиотека",
    icon: "o_library_books",
    link: "/libs",
    linkName: "libs-books",
    color: "blue-8",
    tabs: [
      {
        title: "Книги",
        icon: "o_auto_stories",
        link: "/libs/books",
        linkName: "libs-books",
      },
      {
        title: "Авторы",
        icon: "o_groups",
        link: "/libs/authors",
        linkName: "libs-authors",
      },
      {
        title: "Цитаты",
        icon: "o_format_quote",
        link: "/libs/cites",
        linkName: "libs-cites",
      },
    ],
  },
  {
    title: "Фильмотека",
    icon: "o_movie",
    link: "/films",
    linkName: "films-index",
    color: "orange-9",
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
    color: "indigo-7",
  },
];

/**
 * Меню пользовательского раздела.
 */
const profileMenuLinks = [
  {
    title: "Профиль",
    icon: "o_account_circle",
    link: "/user/profile",
    linkName: "user-profile",
    color: "blue-grey-7",
  },
  {
    title: "Настройки",
    icon: "o_settings",
    link: "/user/settings",
    linkName: "user-settings",
    color: "blue-grey-7",
  },
  {
    title: "Клуб",
    icon: "o_groups",
    link: "/user/club",
    linkName: "user-club",
    color: "blue-grey-7",
  },
  {
    title: "Выход",
    icon: "o_logout",
    link: "/user/logout",
    linkName: "user-logout",
    color: "blue-grey-7",
  },
];

export { appSectionMenuLinks, profileMenuLinks };
