<template>
  <!-- prettier-ignore -->
  <q-layout view="hHh lpR fFf">
    <q-header elevated :class="appSectionBgColor">
      <q-toolbar>
        <q-btn dense icon="menu" @click="toggleLeftDrawer" />
        <q-space></q-space>
        <q-btn dense icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
      <q-tabs align="left" dense inline-label no-caps outside-arrows class="tabs-margin">
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
    <UserFooter :color="appSectionColor" />
  </q-layout>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { appSectionMenuLinks, profileMenuLinks } from "src/router/menu";
import MenuLink from "components/MenuLink.vue";
import { useMeta } from "quasar";
import UserFooter from "components/UserFooter.vue";

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
 * Цвет и цветовой класс раздела.
 */
const appSectionColor = "blue-grey-7";
const appSectionBgColor = "bg-" + appSectionColor;

onMounted(() => {
  /**
   * Установка заголовка страницы.
   */
  useMeta(() => {
    return {
      title: userSectionName + " | " + appName,
    };
  });
});
</script>

<style lang="sass" scoped></style>
