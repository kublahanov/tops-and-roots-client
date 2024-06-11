<template>
  <q-drawer v-model="isOpen" side="left" behavior="mobile" elevated>
    <q-toolbar class="q-pl-md q-py-md">
      <q-toolbar-title>{{ appName }}</q-toolbar-title>
      <q-btn dense flat icon="close" @click="toggleDrawer" />
    </q-toolbar>
    <q-list>
      <MenuLink
        v-for="link in appSectionsMenu"
        :key="link.title"
        v-bind="link"
        :disable="!isAuthenticated"
      />
      <q-separator inset spaced></q-separator>
      <q-item :to="indexHref" active-class="active2" :active="isIndexChecked()">
        <q-item-section avatar>
          <q-icon name="o_help" />
        </q-item-section>
        <q-item-section style="min-width: 185px">
          <q-item-label class="menu-label">О приложении</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-badge
            rounded
            color="secondary"
            style="width: 13px"
            class="float-right"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script setup>
import appSectionsMenu from "src/router/menus/appSectionsMenu";
import MenuLink from "components/MenuLink.vue";
import AuthService from "src/services/auth.service";
import { computed } from "vue";
import { useRouter } from "vue-router";
import { isLinksSectionsMatching } from "src/utils/custom";
import { colors } from "quasar";

const isAuthenticated = AuthService.isAuthenticated();
const isOpen = defineModel();
const toggleDrawer = () => (isOpen.value = !isOpen.value);

/**
 * Дополнительный пункт со ссылкой на индексную страницу.
 */
const router = useRouter();
const indexHref = computed(() => router.resolve({ name: "help-index" }));
const isIndexChecked = () =>
  isLinksSectionsMatching(router.currentRoute.value.path, indexHref.value.path);
const calculatedBgColor = computed(() => colors.getPaletteColor("secondary"));

/**
 * Константы.
 */
const appName = process.env.appName; // Имя приложения
</script>

<style scoped lang="sass">
.active2
  color: white
  background-color: v-bind(calculatedBgColor)
  cursor: default !important

.menu-label
  font-size: larger
</style>
