<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-space></q-space>
        <q-btn round flat icon="more_vert" class="q-mr-sm">
          <q-menu auto-close :offset="[110, 0]">
            <q-list style="min-width: 150px">
              <q-item clickable>
                <q-item-section>Contact data</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Block</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Select messages</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Silence</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Clear messages</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Erase messages</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>

      <q-tabs align="left" outside-arrows inline-label no-caps>
        <q-route-tab to="/" label="Книги" icon="menu_book" />
        <q-route-tab to="/page2" label="Авторы" icon="groups" />
        <q-route-tab to="/page3" label="Цитаты" icon="format_quote" />
      </q-tabs>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" elevated>
      <q-list>
        <q-toolbar class="q-ma-sm">
          <q-toolbar-title>{{ appName }}</q-toolbar-title>
        </q-toolbar>

        <EssentialLink
          v-for="link in mainMenuLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-drawer v-model="rightDrawerOpen" side="right" behavior="mobile" elevated>
      <q-list>
        <q-toolbar class="q-ma-sm">
          <q-toolbar-title>Авторизация</q-toolbar-title>
        </q-toolbar>

        <EssentialLink
          v-for="link in mainMenuLinks"
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
        <div
          class="footer-logo column items-center q-pa-xl"
          style="border-radius: 100%"
        >
          <q-img
            src="safari-pinned-tab.svg"
            width="100px"
            height="100px"
            alt="Вершки и корешки"
            class="q-mb-md flash"
          />
          <div>
            <div class="text-center">
              <span class="text-weight-bolder text-uppercase">{{
                appName
              }}</span>
            </div>
            <div class="text-center">
              <span>Версия {{ appVersion }}, {{ currentYear() }} &copy;</span>
            </div>
          </div>
        </div>
      </q-toolbar>
    </footer>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import mainMenuLinks from "src/router/menu";
import EssentialLink from "components/EssentialLink.vue";

const leftDrawerOpen = ref(false);
const rightDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value;
}

const appName = process.env.appName;
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
