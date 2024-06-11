import { defineStore } from "pinia";

/**
 * Основные параметры секции по-умолчанию.
 */
const defaultSectionData = {
  title: "Главная",
  color: "secondary",
  tabs: [],
  icon: "o_help",
};

/**
 * Хранилище данных о текущей секции приложения.
 */
export const useSectionDataStore = defineStore("sectionData", {
  state: () => ({
    defaultSectionData,
    appSectionData: defaultSectionData,
    layoutName: null,
  }),
  getters: {
    hasAppSectionTabs(state) {
      return Boolean(
        state.appSectionData?.tabs && state.appSectionData?.tabs.length > 0
      );
    },
    getAppSectionName(state) {
      return state.appSectionData?.title ?? state.defaultSectionData.title;
    },
    getAppSectionColor(state) {
      return state.appSectionData?.color ?? state.defaultSectionData.color;
    },
    getAppSectionTabs(state) {
      return state.appSectionData?.tabs || [];
    },
    getLayoutName(state) {
      return state.layoutName || [];
    },
    getAppSectionIcon(state) {
      return state.appSectionData?.icon || [];
    },
  },
  actions: {
    updateAppSectionData(link) {
      this.appSectionData = link;
      console.log("this.appSectionData => ", this.appSectionData);
    },
    updateLayoutName(layoutName) {
      this.layoutName = layoutName;
      console.log("this.layoutName => ", this.layoutName);
    },
  },
  persist: true,
});
