<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>{{ appName }} {{ leftDrawerOpen }}</q-toolbar-title>

        <div>
          <strong>{{ appName }}</strong>, вер. {{ appVersion }}, {{ currentYear }} &copy;
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <MenuLink
          v-for="link in mainMenuLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import MenuLink from "components/MenuLink.vue";
import { mainMenuLinks } from "src/router/menu";

const appName = process.env.appName;
const appVersion = process.env.appVersion;

const leftDrawerOpen = ref(true);

const currentYear = () => (new Date()).getFullYear();
const toggleLeftDrawer = () => leftDrawerOpen.value = !leftDrawerOpen.value;
</script>
