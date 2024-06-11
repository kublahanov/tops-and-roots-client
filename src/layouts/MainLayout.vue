<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated :class="appSectionBgColor">
      <q-toolbar>
        <q-btn dense icon="menu" @click="toggleAppSectionDrawer" />
        <q-toolbar-title class="q-mt-xs q-mx-sm q-px-sm text-center">
          {{ appName }} - {{ appSectionName }}
        </q-toolbar-title>
        <!--<q-space></q-space>-->
        <UserHeaderAvatar></UserHeaderAvatar>
        <q-btn dense icon="menu" @click="toggleUserDrawer" />
      </q-toolbar>
      <MainTabs :hasTabs="hasAppSectionTabs" :tabs="appSectionTabs" />
    </q-header>
    <AppSectionsDrawer v-model="isAppSectionDrawerOpen" />
    <UserDrawer v-model="isUserDrawerOpen" />
    <q-page-container class="my-layout">
      <router-view />
    </q-page-container>
    <MainFooter :color="appSectionColor" :sectionName="appSectionName" />
  </q-layout>
</template>

<script setup>
import { computed, onBeforeMount, onMounted, ref, watch } from "vue";
import { useMeta } from "quasar";
import { useSectionDataStore } from "stores/sectionDataStore";
import AppSectionsDrawer from "components/AppSectionsDrawer.vue";
import UserDrawer from "components/UserDrawer.vue";
import UserHeaderAvatar from "components/UserHeaderAvatar.vue";
import MainTabs from "components/MainTabs.vue";
import MainFooter from "components/MainFooter.vue";

/**
 * Флаги и переключатели состояния левой и правой панели меню.
 */
const isAppSectionDrawerOpen = ref(false);
const isUserDrawerOpen = ref(false);
const toggleAppSectionDrawer = () =>
  (isAppSectionDrawerOpen.value = !isAppSectionDrawerOpen.value);
const toggleUserDrawer = () =>
  (isUserDrawerOpen.value = !isUserDrawerOpen.value);

/**
 * Константы.
 */
const appName = process.env.appName; // Имя приложения

/**
 * Данные из хранилища sectionData.
 */
const appStore = useSectionDataStore();
const appSectionName = ref(""); // Название раздела
const appSectionColor = ref(""); // Цвет раздела
const hasAppSectionTabs = ref(false); // Флаг наличия табов
const appSectionTabs = ref([]); // Массив табов

function getDataFromAppStore() {
  appSectionName.value = appStore.getAppSectionName;
  appSectionColor.value = appStore.getAppSectionColor;
  hasAppSectionTabs.value = appStore.hasAppSectionTabs;
  appSectionTabs.value = appStore.getAppSectionTabs;
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

onBeforeMount(() => {
  appStore.updateLayoutName("MainLayout");
});

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

<style scoped lang="sass"></style>
