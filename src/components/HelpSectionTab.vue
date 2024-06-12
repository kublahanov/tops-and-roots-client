<!--
Табы для раздела "О приложении".
Не содержат динамической загрузки, как в реальных табах (MainTabs).
Нужны только для перехода по табу в корень раздела, если находимся в подразделе.
-->
<template>
  <q-tabs
    v-if="!isIndexHref"
    align="left"
    dense
    inline-label
    no-caps
    outside-arrows
    class="tabs-margin"
  >
    <q-route-tab :to="indexLink" icon="o_home" />
  </q-tabs>
  <q-tabs
    v-else
    align="left"
    dense
    inline-label
    no-caps
    outside-arrows
    class="tabs-margin"
  >
    <q-tab icon="o_home" class="q-tab--active" />
  </q-tabs>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const indexHref = computed(() => router.resolve({ name: "help-index" }));
const indexLink = indexHref.value.path;
const isIndexHref = computed(
  () => router.currentRoute.value.path === indexHref.value.path
);
</script>

<style scoped lang="sass"></style>
