<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated :class="appSectionBgColor">
      <q-toolbar>
        <q-btn dense icon="menu" @click="toggleAppSectionDrawer" />
        <q-toolbar-title class="q-mt-xs q-mx-sm q-px-sm">
          {{ appName }} - {{ guestSectionName }}
        </q-toolbar-title>
        <q-space></q-space>
        <q-avatar
          size="md"
          font-size="2rem"
          color="white"
          text-color="secondary"
          icon="account_circle"
          class="q-mx-md"
        />
        <q-btn dense icon="menu" @click="toggleUserDrawer" />
      </q-toolbar>
      <MainTabs :hasTabs="false" :tabs="[]" />
    </q-header>
    <AppSectionsDrawer
      v-model="isAppSectionDrawerOpen"
      :guest="userStore.isGuest"
    />
    <UserDrawer v-model="isUserDrawerOpen" :guest="userStore.isGuest" />
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
import UserDrawer from "components/UserDrawer.vue";
import AppSectionsDrawer from "components/AppSectionsDrawer.vue";
import { useUserStore } from "stores/user-store";

const userStore = useUserStore();

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
const guestSectionName = "О приложении"; // Название гостевого раздела

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
      title: guestSectionName + " | " + appName,
    };
  });
});
</script>

<style scoped lang="sass">
.user-avatar-top-margin
  margin-top: 2px
</style>
