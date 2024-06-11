<template>
  <q-layout>
    <q-page-container class="fullscreen flex column flex-center">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { onBeforeMount } from "vue";
import { useSectionDataStore } from "stores/sectionDataStore";

const appStore = useSectionDataStore();
onBeforeMount(() => {
  appStore.updateLayoutName("AuthLayout");
});
</script>

<style scoped lang="sass"></style>
