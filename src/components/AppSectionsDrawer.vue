<template>
  <q-drawer v-model="isOpen" side="left" behavior="mobile" elevated>
    <q-toolbar class="q-pl-md q-py-md">
      <q-toolbar-title>{{ appName }}</q-toolbar-title>
      <q-btn dense flat icon="close" @click="toggleDrawer" />
    </q-toolbar>
    <q-list>
      <MenuLink
        v-for="link in appSectionMenuLinks"
        :key="link.title"
        v-bind="link"
      />
    </q-list>
  </q-drawer>
</template>

<script setup>
import { appSectionMenuLinks } from "src/router/menu";
import MenuLink from "components/MenuLink.vue";

const isOpen = defineModel();
const toggleDrawer = () => (isOpen.value = !isOpen.value);

/**
 * Константы.
 */
const appName = process.env.appName; // Имя приложения
</script>

<style scoped lang="sass"></style>
