<template>
  <router-view />
</template>

<script setup></script>

<!--
Глобальные стили.
Не ограничены свойством "scoped" и распространяются на все элементы приложения.
-->
<style lang="sass">
@import "src/css/quasar.variables.scss"

main
  font-size: 17px // vs. default body font-size: 14px

.q-page
  padding: 2rem 1rem
  *:first-child
    margin-top: 0 !important

.my-layout
  max-width: $layout-max-width
  margin: 0 auto

.tabs-margin
  margin: auto 12px
  .q-tab
    border-radius: 10px 10px 0 0
</style>
