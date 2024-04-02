<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense icon="menu" @click="toggleLeftDrawer" />
        <q-space></q-space>
        <q-btn dense icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
      <q-tabs align="left" dense inline-label no-caps outside-arrows class="q-mx-sm">
        <q-route-tab to="/" label="Книги" icon="o_auto_stories" />
        <q-route-tab to="/page2" label="Авторы" icon="o_groups" />
        <q-route-tab to="/page3" label="Цитаты" icon="o_format_quote" />
      </q-tabs>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" elevated>
      <q-toolbar class="q-ma-sm">
        <q-toolbar-title>{{ appName }}</q-toolbar-title>
        <q-btn dense flat icon="close" @click="toggleLeftDrawer" class="q-mx-sm" />
      </q-toolbar>
      <q-list>
        <MenuLink
          v-for="link in appSectionMenuLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    <q-drawer v-model="rightDrawerOpen" side="right" behavior="mobile" elevated>
      <q-toolbar class="q-ma-sm">
        <q-toolbar-title>Авторизация</q-toolbar-title>
        <q-btn dense flat icon="close" @click="toggleRightDrawer" class="q-mx-sm" />
      </q-toolbar>
      <q-list>
        <MenuLink
          v-for="link in profileMenuLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    <q-page-container class="my-layout">
      <router-view />
    </q-page-container>
    <footer class="q-pa-lg q-mt-lg">
      <q-toolbar class="justify-center my-layout">
        <div class="footer-logo column items-center">
          <span class="app-section-name text-primary">{{ appSectionName }}</span>
          <q-img
            src="safari-pinned-tab.svg"
            width="100px"
            height="100px"
            :alt="appName"
            class="q-my-md q-mx-xl flash"
          />
          <small class="app-name">{{ appName }}</small>
          <small class="copyrights">Версия {{ appVersion }}, {{ currentYear() }} &copy;</small>
        </div>
      </q-toolbar>
    </footer>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { appSectionMenuLinks, profileMenuLinks, mainMenuLinks } from "src/router/menu";
import MenuLink from "components/MenuLink.vue";

const leftDrawerOpen = ref(false);
const rightDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value;
}

const appName = process.env.appName;
const appSectionName = "Библиотека";
const appVersion = process.env.appVersion;
const currentYear = () => new Date().getFullYear();
</script>

<style lang="sass" scoped>
@import "src/css/quasar.variables.scss"

footer
  background-color: #fafafa
  border-top: var(--normal-border)
  .footer-logo
    background-color: whitesmoke
    border-radius: 100%
    padding: 36px
    small, span
      display: block
    .app-section-name, .app-name
      font-weight: 900
      text-transform: uppercase
    .copyrights
      font-weight: 400

.my-layout
  max-width: $layout-max-width
  margin: 0 auto

@keyframes flash
  0%
    opacity: 1
  50%
    opacity: 0.6
  100%
    opacity: 1

.flash
  cursor: pointer
  opacity: 0.6

  &:hover
    animation: flash 0.7s ease-in-out infinite
</style>
