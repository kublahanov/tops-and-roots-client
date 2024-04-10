<template>
  <footer class="q-pa-lg q-mt-lg">
    <q-toolbar class="justify-center my-layout">
      <!-- prettier-ignore -->
      <div class="footer-logo column items-center">
        <span class="app-section-name" :class="appSectionTextColor">{{ props.sectionName }}</span>
        <q-img
          src="~/assets/tops-and-roots_logo_001.svg"
          width="100px"
          height="100px"
          :alt="appName"
          class="q-my-md q-mx-xl flash"
        />
        <small class="app-name">{{ appName }}</small>
        <small class="copyrights">Версия {{ appVersion }}, {{ currentYear() }} &copy;</small>
      </div>
    </q-toolbar>
  </footer>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  color: { type: String, required: true }, // Цвет текущей секции
  sectionName: { type: String, required: true }, // Название текущей секции
});

/**
 * Константы.
 */
const appName = process.env.appName; // Имя приложения
const appVersion = process.env.appVersion; // Версия приложения
const currentYear = () => new Date().getFullYear(); // Текущий год

/**
 * Формирование классов для фона и текста,
 * исходя из текущего цвета раздела.
 */
const appSectionTextColor = computed(() => "text-" + props.color);
</script>

<style scoped lang="sass">
footer
  background-color: #fafafa
  border-top: var(--normal-border)
  .footer-logo
    background-color: whitesmoke
    border-radius: 100%
    padding: 36px
    small, span
      display: block
    .app-section-name, .app-name
      font-weight: 900
      text-transform: uppercase
    .copyrights
      font-weight: 400

@keyframes flash
  0%
    opacity: 1
  50%
    opacity: 0.6
  100%
    opacity: 1

.flash
  cursor: pointer
  opacity: 0.6
  &:hover
    animation: flash 0.7s ease-in-out infinite
</style>
