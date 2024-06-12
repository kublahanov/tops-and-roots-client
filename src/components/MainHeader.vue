<template>
  <q-header elevated :class="appSectionBgColor">
    <q-toolbar>
      <q-btn dense icon="menu" @click="toggleAppSectionDrawer" />
      <AppSectionHeaderAvatar></AppSectionHeaderAvatar>
      <q-toolbar-title class="q-mt-xs q-mx-sm q-px-sm text-center">
        {{ appSectionName }} - {{ appName }}
      </q-toolbar-title>
      <UserHeaderAvatar></UserHeaderAvatar>
      <q-btn dense icon="menu" @click="toggleUserDrawer" />
    </q-toolbar>
    <slot name="tabs"></slot>
  </q-header>
</template>

<script setup>
import UserHeaderAvatar from "components/UserHeaderAvatar.vue";
import AppSectionHeaderAvatar from "components/AppSectionHeaderAvatar.vue";

defineProps({
  appSectionBgColor: {
    type: String,
    required: true,
  },
  appName: {
    type: String,
    required: true,
  },
  appSectionName: {
    type: String,
    required: true,
  },
  toggleAppSectionDrawer: {
    type: Function,
    required: true,
  },
  toggleUserDrawer: {
    type: Function,
    required: true,
  },
});
</script>

<style scoped lang="sass"></style>
