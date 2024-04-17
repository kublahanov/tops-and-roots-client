<template>
  <q-drawer v-model="isOpen" side="right" behavior="mobile" elevated>
    <q-toolbar class="q-pl-md q-py-md">
      <q-toolbar-title>{{ userSectionName }}</q-toolbar-title>
      <q-btn dense flat icon="close" @click="toggleDrawer" />
    </q-toolbar>
    <q-list>
      <MenuLink
        v-for="link in profileMenuLinks"
        :key="link.title"
        v-bind="link"
      />
    </q-list>
  </q-drawer>
</template>

<script setup>
import { profileMenuLinks } from "src/router/menu";
import MenuLink from "components/MenuLink.vue";

const isOpen = defineModel();
const toggleDrawer = () => (isOpen.value = !isOpen.value);

/**
 * Константы.
 */
const userSectionName = process.env.userSectionName; // Название пользовательского раздела
</script>

<style scoped lang="sass"></style>
