<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated :class="appSectionBgColor">
      <q-toolbar>
        <q-btn dense icon="menu" @click="toggleLeftDrawer" />
        <q-space></q-space>
        <q-btn dense icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
      <!-- prettier-ignore -->
      <q-tabs align="left" dense inline-label no-caps outside-arrows class="tabs-margin">
        <q-route-tab to="/libs/books" label="Книги" icon="o_auto_stories" />
        <q-route-tab to="/libs/authors" label="Авторы" icon="o_groups" />
        <q-route-tab to="/libs/cites" label="Цитаты" icon="o_format_quote" />
      </q-tabs>
    </q-header>
    <!-- prettier-ignore -->
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
    <!-- prettier-ignore -->
    <q-drawer v-model="rightDrawerOpen" side="right" behavior="mobile" elevated>
      <q-toolbar class="q-ma-sm">
        <q-toolbar-title>Авторизация</q-toolbar-title>
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
import { useAppStore } from "stores/example-store";
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

/**
 * Название и цвет раздела, синхронизируемые через хранилище.
 */
const appStore = useAppStore();
const appSectionName = ref("");
const appSectionColor = ref("");

/**
 * Установка названия и цвета раздела.
 */
function getDataFromAppStore() {
  if (!appStore.getAppSectionEmpty) {
    appSectionName.value = appStore.getAppSectionName;
    appSectionColor.value = appStore.getAppSectionColor;
  }
}

/**
 * Установка названия и цвета раздела при создании компонента.
 */
onMounted(() => {
  getDataFromAppStore();
});

/**
 * Слежение за изменением названия и цвета раздела.
 */
watch(
  () => appStore.appSectionData,
  (newValue, oldValue) => {
    getDataFromAppStore();

    useMeta({
      title: appName,
      titleTemplate: (title) => `${title} - ${appSectionName.value}`,
    });
  }
);

/**
 * Формирование классов для фона и текста,
 * исходя из текущего цвета раздела.
 */
const appSectionBgColor = computed(() => "bg-" + appSectionColor.value);

/**
 * Установка заголовка страницы.
 */
useMeta({
  title: appName,
  titleTemplate: (title) => `${title} - ${appSectionName.value}`,
});
</script>

<style lang="sass" scoped>
@import "src/css/quasar.variables.scss"

main
  font-size: 17px // vs. default body font-size: 14px

.q-page
  padding-bottom: 2rem

.my-layout
  max-width: $layout-max-width
  margin: 0 auto

.tabs-margin
  margin: auto 12px
</style>
