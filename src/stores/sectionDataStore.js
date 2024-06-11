import { defineStore } from "pinia";

/**
 * Основные параметры секции по-умолчанию.
 * @type {{color: string, title: string}}
 */
const defaultSectionData = {
  title: "Главная",
  color: "secondary", // cadetblue, chocolate, cornflowerblue
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
  },
  actions: {
    updateAppSectionData(link) {
      this.appSectionData = link;
      // console.log("this.appSectionData => ", this.appSectionData);
    },
    updateLayoutName(layoutName) {
      this.layoutName = layoutName;
      console.log("this.layoutName => ", this.layoutName);
    },
    // resetAppSectionData() {
    //   this.appSectionData = defaultSectionData;
    // },
  },
  persist: true,
});
