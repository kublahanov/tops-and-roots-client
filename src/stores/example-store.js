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
      return state.appSectionData.title ?? "Заголовок";
    },
    getAppSectionColor(state) {
      return state.appSectionData.color ?? "black";
    },
  },
  actions: {
    updateAppSectionData(link) {
      this.appSectionData = link;
      console.log("updateAppSectionData", link, this.appSectionData);
    },
  },
  persist: true,
});
