import { defineStore } from "pinia";

export const useAppStore = defineStore("sectionData", {
  state: () => ({
    appSectionData: null,
  }),
  getters: {
    isAppSectionEmpty(state) {
      return state.appSectionData == null;
    },
    hasAppSectionTabs(state) {
      return (state.appSectionData.tabs && state.appSectionData.tabs.length > 0);
    },
    getAppSectionName(state) {
      return state.appSectionData.title ?? "Заголовок";
    },
    getAppSectionColor(state) {
      return state.appSectionData.color ?? "black";
    },
  },
  actions: {
    updateAppSectionData(link) {
      this.appSectionData = link;
    },
  },
  persist: true,
});