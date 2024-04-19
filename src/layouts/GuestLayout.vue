<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated :class="appSectionBgColor">
      <q-toolbar>
        <q-btn dense icon="menu" @click="toggleAppSectionDrawer" />
        <q-toolbar-title class="q-mt-xs" :class="{ 'q-ml-xl': isDesktop }">
          {{ appName }}
        </q-toolbar-title>
        <q-space></q-space>
        <q-btn dense icon="menu" @click="toggleUserDrawer" />
      </q-toolbar>
      <MainTabs :hasTabs="false" :tabs="[]" />
    </q-header>
    <AppSectionsDrawer v-model="isAppSectionDrawerOpen" :disabled="true" />
    <UserDrawer v-model="isUserDrawerOpen" :guest="true" />
    <q-page-container class="my-layout">
      <router-view />
    </q-page-container>
    <UserFooter :color="appSectionColor" />
  </q-layout>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useMeta, useQuasar } from "quasar";
import UserFooter from "components/UserFooter.vue";
import MainTabs from "components/MainTabs.vue";
import UserDrawer from "components/UserDrawer.vue";
import AppSectionsDrawer from "components/AppSectionsDrawer.vue";

/**
 * Флаги состояния левой и правой панели меню.
 */
const isAppSectionDrawerOpen = ref(false);
const isUserDrawerOpen = ref(false);

/**
 * Переключатели состояния левой и правой панели меню.
 * @returns {boolean}
 */
// prettier-ignore
const toggleAppSectionDrawer = () => (isAppSectionDrawerOpen.value = !isAppSectionDrawerOpen.value);
// prettier-ignore
const toggleUserDrawer = () => (isUserDrawerOpen.value = !isUserDrawerOpen.value);

/**
 * Константы.
 */
const appName = process.env.appName; // Имя приложения
const userSectionName = "Главная"; // Название гостевого раздела

/**
 * Цвет и цветовой класс раздела.
 */
const appSectionColor = "secondary";
const appSectionBgColor = "bg-" + appSectionColor;

/**
 * Флаг размера экрана.
 */
const $q = useQuasar();
const isDesktop = computed(() => $q.screen.gt.sm);

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

<style scoped lang="sass"></style>
