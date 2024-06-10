<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated :class="appSectionBgColor">
      <q-toolbar>
        <q-btn dense icon="menu" @click="toggleAppSectionDrawer" />
        <q-toolbar-title class="q-mt-xs q-mx-sm q-px-sm">
          {{ appName }} - {{ guestSectionName }}
        </q-toolbar-title>
        <q-space></q-space>
        <UserHeaderAvatar></UserHeaderAvatar>
        <q-btn dense icon="menu" @click="toggleUserDrawer" />
      </q-toolbar>
      <HelpSectionTab />
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
import { onMounted, ref, watch } from "vue";
import { useMeta } from "quasar";
import UserFooter from "components/UserFooter.vue";
import UserDrawer from "components/UserDrawer.vue";
import AppSectionsDrawer from "components/AppSectionsDrawer.vue";
import { useSectionDataStore } from "stores/sectionDataStore";
import UserHeaderAvatar from "components/UserHeaderAvatar.vue";
import HelpSectionTab from "components/HelpSectionTab.vue";

/**
 * Флаги состояния левой и правой панели меню.
 */
const isAppSectionDrawerOpen = ref(false);
const isUserDrawerOpen = ref(false);

/**
 * Переключатели состояния левой и правой панели меню.
 */
const toggleAppSectionDrawer = () =>
  (isAppSectionDrawerOpen.value = !isAppSectionDrawerOpen.value);
const toggleUserDrawer = () =>
  (isUserDrawerOpen.value = !isUserDrawerOpen.value);

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

/**
 * Данные из хранилища sectionData.
 */
const appStore = useSectionDataStore();
const hasAppSectionTabs = ref(false); // Флаг наличия табов
const appSectionTabs = ref([]); // Массив табов

/**
 * Установка табов для раздела.
 */
function getDataFromAppStore() {
  hasAppSectionTabs.value = appStore.hasAppSectionTabs;
  appSectionTabs.value = appStore.getAppSectionTabs;
}

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
  // console.info("GuestLayout");

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
