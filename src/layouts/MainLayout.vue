<template>
  <!-- prettier-ignore -->
  <q-layout view="hHh lpR fFf">
    <q-header elevated :class="appSectionBgColor">
      <q-toolbar>
        <q-btn dense icon="menu" @click="toggleLeftDrawer" />
        <q-space></q-space>
        <q-btn dense icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
      <q-tabs v-if="hasAppSectionTabs" align="left" dense inline-label no-caps outside-arrows class="tabs-margin">
        <q-route-tab
          v-for="tab in appSectionTabs"
          :key="tab.link"
          :to="tab.link"
          :label="tab.title"
          :icon="tab.icon"
        />
      </q-tabs>
      <q-tabs v-else align="left" dense inline-label no-caps outside-arrows class="tabs-margin">
        <q-tab icon="o_home" class="q-tab--active" />
      </q-tabs>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" elevated>
      <q-toolbar class="q-ma-sm">
        <q-toolbar-title>{{ appName }}</q-toolbar-title>
        <q-btn dense flat icon="close" @click="toggleLeftDrawer" class="q-mx-sm" />
      </q-toolbar>
      <q-list>
        <MenuLink
          v-for="link in appSectionMenuLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    <q-drawer v-model="rightDrawerOpen" side="right" behavior="mobile" elevated>
      <q-toolbar class="q-ma-sm">
        <q-toolbar-title>{{ userSectionName }}</q-toolbar-title>
        <q-btn dense flat icon="close" @click="toggleRightDrawer" class="q-mx-sm" />
      </q-toolbar>
      <q-list>
        <MenuLink
          v-for="link in profileMenuLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    <q-page-container class="my-layout">
      <router-view />
    </q-page-container>
    <MainFooter :color="appSectionColor" :sectionName="appSectionName" />
  </q-layout>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { appSectionMenuLinks, profileMenuLinks } from "src/router/menu";
import MenuLink from "components/MenuLink.vue";
import { useAppStore } from "stores/sectionData-store";
import { useMeta } from "quasar";
import MainFooter from "components/MainFooter.vue";

/**
 * Флаги состояния левой и правой панели меню.
 */
const leftDrawerOpen = ref(false);
const rightDrawerOpen = ref(false);

/**
 * Переключатели состояния левой и правой панели меню.
 * @returns {boolean}
 */
const toggleLeftDrawer = () => (leftDrawerOpen.value = !leftDrawerOpen.value);
const toggleRightDrawer = () => (rightDrawerOpen.value = !rightDrawerOpen.value);

/**
 * Константы.
 */
const appName = process.env.appName; // Имя приложения
const userSectionName = process.env.userSectionName; // Название пользовательского раздела

/**
 * Синхронизируемые через хранилище данные.
 */
const appStore = useAppStore();
const appSectionName = ref(""); // Название раздела
const appSectionColor = ref(""); // Цвет раздела
const hasAppSectionTabs = ref(false); // Флаг наличия табов
const appSectionTabs = ref([]); // Массив табов

/**
 * Установка названия и цвета раздела.
 */
function getDataFromAppStore() {
  if (!appStore.isAppSectionEmpty) {
    appSectionName.value = appStore.getAppSectionName;
    appSectionColor.value = appStore.getAppSectionColor;
    hasAppSectionTabs.value = appStore.hasAppSectionTabs;
    appSectionTabs.value = appStore.getAppSectionTabs;
  }
}

/**
 * Формирование классов для фона и текста,
 * исходя из текущего цвета раздела.
 */
const appSectionBgColor = computed(() => "bg-" + appSectionColor.value);

/**
 * Слежение за изменением параметров раздела.
 */
watch(
  () => appStore.appSectionData,
  (newValue, oldValue) => {
    getDataFromAppStore();
  }
);

onMounted(() => {
  getDataFromAppStore();

  /**
   * Установка заголовка страницы.
   */
  useMeta(() => {
    return {
      title: appSectionName.value + " | " + appName,
    };
  });
});
</script>

<style lang="sass" scoped></style>
