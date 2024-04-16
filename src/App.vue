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

// Генерация стилей для h1 ... h6
$h1-font-size: 2.8rem
@for $i from 1 through 6
  h#{$i}
    font-size: $h1-font-size - ($i - 1) * 0.3rem
    line-height: $h1-font-size - ($i - 1) * 0.3rem
    // background-color: #00acc1
    font-weight: 400
    margin-top: 0
    margin-bottom: 1.2rem

.q-page
  padding: 2rem 0.8rem
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
