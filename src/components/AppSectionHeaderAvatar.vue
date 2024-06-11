<template>
  <q-avatar
    size="md"
    class="q-mx-md"
  />
  <!--<q-avatar-->
  <!--  size="md"-->
  <!--  font-size="1.3rem"-->
  <!--  color="white"-->
  <!--  :text-color="appSectionColor"-->
  <!--  :icon="appSectionIcon"-->
  <!--  class="q-mx-md"-->
  <!--/>-->
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useSectionDataStore } from "stores/sectionDataStore";

const appStore = useSectionDataStore();
const appSectionColor = ref(""); // Цвет раздела
const appSectionIcon = ref(""); // Иконка раздела

function getDataFromAppStore() {
  appSectionColor.value = appStore.getAppSectionColor;
  appSectionIcon.value = appStore.getAppSectionIcon;
}

onMounted(() => {
  getDataFromAppStore();
});

watch(
  () => appStore.appSectionData,
  (newValue, oldValue) => {
    getDataFromAppStore();
  }
);
</script>

<style scoped lang="sass"></style>
