<template>
  <div class="main position-relative" :style="style">
    <q-layout view="lHh Lpr lFf" class="main__layout shadow-3" container>
      <q-header>
        <q-toolbar>
          <div class="q-pa-sm">
            <q-btn round class="q-pa-sm">
              <q-avatar>
                <img style="-webkit-filter: invert(1); filter: invert(1);" src="/safari-pinned-tab.svg" alt="" />
              </q-avatar>
            </q-btn>
          </div>
          <q-fab v-model="fab1" label="Actions" label-position="left" color="purple" icon="keyboard_arrow_right" direction="right">
            <q-fab-action color="primary" @click="onClick" icon="mail" label="Email" />
            <q-fab-action color="secondary" @click="onClick" icon="alarm" label="Alarm"/>
          </q-fab>
        </q-toolbar>
        <q-tabs align="left" dense outside-arrows inline-label no-caps>
          <q-route-tab to="/page1" label="Книги" icon="map" alert="accent" alert-icon="alarm_on" />
          <q-route-tab to="/page2" label="Авторы" icon="explore" />
          <q-route-tab to="/page3" label="Цитаты" icon="public" />
        </q-tabs>
      </q-header>
      <q-page-container class="bg-grey-2">
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref, computed } from "vue";

// const appName = process.env.appName;
// const appVersion = process.env.appVersion;
// const currentYear = () => (new Date()).getFullYear();

const $q = useQuasar();
const style = computed(() => ({
  height: $q.screen.height + "px",
}));

const fab1 = ref(true);
function onClick() {
  // console.log('Clicked on a fab action')
}
</script>

<style lang="sass">
@import "src/css/quasar.variables"

.main
  padding-top: var(--layout--vertical-padding)
  padding-bottom: var(--layout--vertical-padding)
  background-color: var(--layout-background-color)
  background-image: var(--layout-background-image)

  &:before
    content: ''
    height: 10em
    position: fixed
    top: 0
    width: 100%

  &:after
    content: ''
    height: 5em
    position: fixed
    bottom: 0
    width: 100%

  &__layout
    margin: 0 auto
    z-index: 4000
    max-width: $layout-max-width
    border-radius: 15px

    @media (max-width: $layout-max-width)
      border-radius: 0
</style>
