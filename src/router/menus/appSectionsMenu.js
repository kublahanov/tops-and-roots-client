/**
 * Меню разделов приложения.
 */
const appSectionsMenu = [
  {
    title: "Библиотека",
    icon: "o_library_books",
    linkName: "libs-books",
    color: "blue-8",
    tabs: [
      {
        title: "Книги",
        icon: "o_auto_stories",
        linkName: "libs-books",
      },
      {
        title: "Авторы",
        icon: "o_groups",
        linkName: "libs-authors",
      },
      {
        title: "Цитаты",
        icon: "o_format_quote",
        linkName: "libs-cites",
      },
    ],
  },
  {
    title: "Фильмотека",
    icon: "o_movie",
    linkName: "films-index",
    color: "orange-9",
  },
  {
    title: "Картотека",
    icon: "o_dashboard_customize",
    linkName: "cards-index",
    color: "red-8",
  },
  {
    title: "Биография",
    icon: "o_assignment_ind",
    linkName: "bios-index",
    color: "teal-8",
  },
  {
    title: "Планирование",
    icon: "o_moving",
    linkName: "plans-index",
    color: "indigo-7",
  },
];

export default appSectionsMenu;
