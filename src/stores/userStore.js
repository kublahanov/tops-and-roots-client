import { defineStore } from "pinia";

/**
 * Хранилище данных о текущем пользователе.
 */
export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
    users: [
      {
        id: 1,
        name: "Роман",
        surname: "Кондрашов",
      },
      {
        id: 2,
        name: "Иван",
        surname: "Петров",
      },
    ],
  }),
  getters: {
    isAuthenticated(state) {
      return state.user !== null;
    },
    isGuest(state) {
      return state.user === null;
    },
    getUserData(state) {
      return this.isAuthenticated ? state.user : null;
    },
    getUserFriends(state) {
      return [
        {
          id: 5463,
          name: "Пётр",
          surname: "Иванов",
        },
        {
          id: 89098,
          name: "Иван",
          surname: "Петров",
        },
      ];
    },
  },
  actions: {
    login() {
      this.user = this.users[0];
    },
    logout() {
      this.user = null;
    },
  },
  persist: true,
});
