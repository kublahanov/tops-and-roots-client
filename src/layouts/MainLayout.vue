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
    <!-- prettier-ignore -->
    <footer class="q-pa-lg q-mt-lg">
      <q-toolbar class="justify-center my-layout">
        <div class="footer-logo column items-center">
          <span class="app-section-name" :class="appSectionTextColor">{{ appSectionName }}</span>
          <q-img src="~/assets/tops-and-roots_logo_001.svg" width="100px" height="100px" :alt="appName" class="q-my-md q-mx-xl flash" />
          <small class="app-name">{{ appName }}</small>
          <small class="copyrights">Версия {{ appVersion }}, {{ currentYear() }} &copy;</small>
        </div>
      </q-toolbar>
    </footer>
  </q-layout>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { appSectionMenuLinks, profileMenuLinks } from "src/router/menu";
import MenuLink from "components/MenuLink.vue";
import { useAppStore } from "stores/example-store";
import { useMeta } from "quasar";
import { findAndGetLinkMatchingHref } from "src/js/custom";
import { useRouter } from "vue-router";

/**
 * Левая и правая панели меню.
 */
const leftDrawerOpen = ref(false);
const rightDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value;
}

/**
 * Константы.
 */
const appName = process.env.appName;
const appVersion = process.env.appVersion;
const currentYear = () => new Date().getFullYear();

/**
 * Название и цвет раздела, синхронизируемые через хранилище.
 */
const appStore = useAppStore();
let appSectionName = ref("");
let appSectionColor = ref("");

/**
 * Установка названия и цвета раздела.
 */
const combinedMenuLinks = [...appSectionMenuLinks, ...profileMenuLinks];
const router = useRouter();

function getDataFromAppStore() {
  if (appStore.getAppSectionEmpty) {
    console.log("appStore.getAppSectionEmpty");
    const matchedLink = findAndGetLinkMatchingHref(combinedMenuLinks, router.currentRoute.value.path);
    appStore.updateAppSectionData(matchedLink);
  }

  appSectionName.value = appStore.getAppSectionName;
  appSectionColor.value = appStore.getAppSectionColor;
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
  }
);

/**
 * Формирование классов для фона и текста,
 * исходя из текущего цвета раздела.
 */
const appSectionBgColor = computed(() => "bg-" + appSectionColor.value);
const appSectionTextColor = computed(() => "text-" + appSectionColor.value);

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

footer
  background-color: #fafafa
  border-top: var(--normal-border)
  .footer-logo
    background-color: whitesmoke
    border-radius: 100%
    padding: 36px
    small, span
      display: block
    .app-section-name, .app-name
      font-weight: 900
      text-transform: uppercase
    .copyrights
      font-weight: 400

.my-layout
  max-width: $layout-max-width
  margin: 0 auto

.tabs-margin
  margin: auto 12px

@keyframes flash
  0%
    opacity: 1
  50%
    opacity: 0.6
  100%
    opacity: 1

.flash
  cursor: pointer
  opacity: 0.6

  &:hover
    animation: flash 0.7s ease-in-out infinite
</style>
