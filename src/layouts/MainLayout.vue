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

        <q-toolbar-title>{{ appName }}</q-toolbar-title>

        <div>
          <strong>{{ appName }}</strong>, вер. {{ appVersion }}, {{ currentYear }} &copy;
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
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

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { date } from "quasar";

const linksList = [
  {
    title: "Home",
    caption: "",
    icon: "home",
    link: "/",
    target: null,
  },
  {
    title: "Alt layout",
    caption: "",
    icon: "chat",
    link: "/alt",
    target: null,
  },
  {
    title: "Not found",
    caption: "",
    icon: "highlight_off",
    link: "/404",
    target: null,
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  computed: {
    appName() {
      return process.env.appName;
    },
    appVersion() {
      return process.env.appVersion;
    },
    currentYear() {
      return (new Date()).getFullYear();
    },
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
