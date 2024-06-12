<!--
Лого приложения для главной страницы.
-->
<template>
  <q-img
    no-spinner
    src="~/assets/tops-and-roots_logo_001.svg"
    class="q-mb-lg"
    width="150px"
    height="150px"
    :alt="appName"
  />
</template>

<script setup>
/**
 * Константы.
 */
const appName = process.env.appName; // Имя приложения
</script>

<style scoped lang="sass"></style>
