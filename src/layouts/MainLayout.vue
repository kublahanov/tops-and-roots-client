<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img
              style="-webkit-filter: invert(1); filter: invert(1)"
              src="/safari-pinned-tab.svg"
              alt=""
            />
          </q-avatar>
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>

      <q-tabs align="left" dense outside-arrows inline-label no-caps>
        <q-route-tab to="/" label="Книги" icon="menu_book" />
        <q-route-tab to="/page2" label="Авторы" icon="groups" />
        <q-route-tab to="/page3" label="Цитаты" icon="format_quote" />
      </q-tabs>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" elevated>
      <!-- drawer content -->
    </q-drawer>

    <q-drawer v-model="rightDrawerOpen" side="right" behavior="mobile" elevated>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <footer class="q-pa-xl q-mt-lg">
      <q-toolbar class="justify-center">
        <div class="column items-center bg-grey-1 q-pa-xl" style="border-radius: 100%">
          <q-img src="safari-pinned-tab.svg" width="100px" height="100px" alt="Вершки и корешки" class="q-mb-md flash" />
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
  border-top: var(--normal-border)

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
