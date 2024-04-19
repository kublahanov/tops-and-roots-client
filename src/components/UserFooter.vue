<template>
  <footer class="q-pa-lg">
    <q-toolbar class="justify-center my-layout">
      <div class="footer-logo column items-center">
        <div class="app-name" :class="appSectionTextColor">{{ appName }}</div>
        <q-img
          src="~/assets/tops-and-roots_logo_001.svg"
          width="100px"
          height="100px"
          :alt="appName"
        />
        <div class="copyrights">
          Версия {{ appVersion }}, {{ currentYear() }} &copy;
        </div>
      </div>
    </q-toolbar>
  </footer>
</template>

<script setup>
const props = defineProps({
  color: { type: String, required: true }, // Цвет текущей секции
});

/**
 * Константы.
 */
const appName = process.env.appName; // Имя приложения
const appVersion = process.env.appVersion; // Версия приложения
const currentYear = () => new Date().getFullYear(); // Текущий год

/**
 * Формирование класса для текста, исходя из текущего цвета раздела.
 */
const appSectionTextColor = "text-" + props.color;
</script>

<style scoped lang="sass">
footer
  background-color: #fafafa
  border-top: var(--normal-border)
  .footer-logo
    background-color: whitesmoke
    border-radius: 100%
    width: 235px
    height: 235px
    padding: 36px
    .app-name
      color: v-bind(textColor)
      font-weight: bold
      text-transform: uppercase
      font-size: 105%
      margin: 8px auto
    .copyrights
      font-size: 85%
      margin: 7px auto 0
</style>
