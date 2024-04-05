import { defineStore } from "pinia";

export const useAppStore = defineStore("sectionData", {
  state: () => ({
    appSectionData: null,
  }),
  getters: {
    getAppSectionEmpty(state) {
      return state.appSectionData == null;
    },
    getAppSectionName(state) {
      return state.appSectionData.title ?? "";
    },
    getAppSectionColor(state) {
      return state.appSectionData.color ?? "";
    },
  },
  actions: {
    updateAppSectionData(link) {
      this.appSectionData = link;
      console.log(link);
    },
  },
  persist: true,
});
