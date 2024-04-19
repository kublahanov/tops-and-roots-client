<template>
  <q-tabs
    v-if="hasTabs"
    align="left"
    dense
    inline-label
    no-caps
    outside-arrows
    class="tabs-margin"
  >
    <q-route-tab
      v-for="tab in tabs"
      :key="tab.link"
      :to="tab.link"
      :label="tab.title"
      :icon="tab.icon"
    />
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
const props = defineProps({
  hasTabs: { type: Boolean, required: true }, // Флаг наличия табов
  tabs: { type: Array, default: () => [] }, // Массив табов
});
</script>

<style scoped lang="sass"></style>
