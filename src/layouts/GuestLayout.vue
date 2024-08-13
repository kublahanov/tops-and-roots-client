<template>
  <q-layout view="hHh lpR fFf">
    <MainHeader
      :appSectionBgColor="appSectionBgColor"
      :appName="appName"
      :appSectionName="appSectionName"
      :toggleAppSectionDrawer="toggleAppSectionDrawer"
      :toggleUserDrawer="toggleUserDrawer"
    >
      <template #tabs>
        <HelpSectionTab />
      </template>
    </MainHeader>
    <AppSectionsDrawer v-model="isAppSectionDrawerOpen" />
    <UserDrawer v-model="isUserDrawerOpen" />
    <q-page-container class="my-layout">
      <router-view />
    </q-page-container>
    <UserFooter :color="appSectionColor" />
  </q-layout>
</template>

<script setup>
import { computed, onBeforeMount, onMounted, ref, watch } from "vue";
import { useMeta } from "quasar";
import { useSectionDataStore } from "stores/sectionDataStore";
import AppSectionsDrawer from "components/AppSectionsDrawer.vue";
import UserDrawer from "components/UserDrawer.vue";
import HelpSectionTab from "components/HelpSectionTab.vue";
import UserFooter from "components/UserFooter.vue";
import MainHeader from "components/MainHeader.vue";

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
const appSectionBgColor = computed(() => "bg-" + appSectionColor.value);

function getDataFromAppStore() {
  appSectionName.value = process.env.helpSectionName;
  appSectionColor.value = "secondary";
  hasAppSectionTabs.value = appStore.hasAppSectionTabs;
  appSectionTabs.value = appStore.getAppSectionTabs;
}

watch(
  () => appStore.appSectionData,
  (newValue, oldValue) => {
    getDataFromAppStore();
  }
);

onBeforeMount(() => {
  appStore.updateLayoutName("GuestLayout");
});

onMounted(() => {
  getDataFromAppStore();

  useMeta(() => {
    return {
      title: appSectionName.value + " | " + appName,
    };
  }); // Установка заголовка страницы
});
</script>

<style scoped lang="sass"></style>
