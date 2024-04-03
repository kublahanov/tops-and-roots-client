import { defineStore } from "pinia";

export const useAppStore = defineStore("counter", {
  state: () => ({
    counter: 0,
    appSectionName: "",
  }),
  getters: {
    doubleCount(state) {
      return state.counter * 2;
    },
    getAppSectionName(state) {
      return state.appSectionName;
    },
  },
  actions: {
    increment() {
      this.counter++;
    },
    updateAppSectionName(sectionName) {
      this.appSectionName = sectionName;
    },
  },
});
