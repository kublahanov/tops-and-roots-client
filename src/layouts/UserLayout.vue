<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated :class="appSectionBgColor">
      <q-toolbar>
        <q-btn dense icon="menu" @click="toggleAppSectionDrawer" />
        <q-space></q-space>
        <q-btn dense icon="menu" @click="toggleUserDrawer" />
      </q-toolbar>
      <MainTabs :hasTabs="false" :tabs="[]" />
    </q-header>
    <AppSectionsDrawer v-model="isAppSectionDrawerOpen" />
    <UserDrawer v-model="isUserDrawerOpen" />
    <q-page-container class="my-layout">
      <router-view />
    </q-page-container>
    <UserFooter :color="appSectionColor" />
  </q-layout>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useMeta } from "quasar";
import UserFooter from "components/UserFooter.vue";
import MainTabs from "components/MainTabs.vue";
import AppSectionsDrawer from "components/AppSectionsDrawer.vue";
import UserDrawer from "components/UserDrawer.vue";

/**
 * Флаги состояния левой и правой панели меню.
 */
const isAppSectionDrawerOpen = ref(false);
const isUserDrawerOpen = ref(false);

/**
 * Переключатели состояния левой и правой панели меню.
 * @returns {boolean}
 */
const toggleAppSectionDrawer = () => (isAppSectionDrawerOpen.value = !isAppSectionDrawerOpen.value);
const toggleUserDrawer = () => (isUserDrawerOpen.value = !isUserDrawerOpen.value);

/**
 * Константы.
 */
const appName = process.env.appName; // Имя приложения
const userSectionName = process.env.userSectionName; // Название пользовательского раздела

/**
 * Цвет и цветовой класс раздела.
 */
const appSectionColor = "secondary";
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
