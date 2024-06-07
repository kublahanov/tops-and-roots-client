<template>
  <q-drawer v-model="isOpen" side="right" behavior="mobile" elevated>
    <q-toolbar class="q-pl-md q-py-md">
      <q-toolbar-title>{{ userSectionName }}</q-toolbar-title>
      <q-btn dense flat icon="close" @click="toggleDrawer" />
    </q-toolbar>
    <q-list>
      <MenuLink
        v-for="link in menuLinks"
        :key="link.title"
        v-bind="link"
      />
    </q-list>
  </q-drawer>
</template>

<script setup>
import { profileMenuLinks, guestMenuLinks } from "src/router/menu";
import MenuLink from "components/MenuLink.vue";
import AuthService from "src/services/auth.service";

const isAuthenticated = AuthService.isAuthenticated();
const isOpen = defineModel();
const toggleDrawer = () => (isOpen.value = !isOpen.value);
const menuLinks = isAuthenticated ? profileMenuLinks : guestMenuLinks;

/**
 * Константы.
 */
// Название пользовательского раздела
const userSectionName = isAuthenticated
  ? AuthService.getUserName().name + " " + AuthService.getUserName().surname
  : process.env.userSectionName;
</script>

<style scoped lang="sass"></style>
