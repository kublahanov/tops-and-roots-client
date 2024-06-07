<template>
  <q-item
    :to="calculatedHref"
    active-class="active"
    :active="checkRoute()"
    :disable
  >
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>
    <q-item-section style="min-width: 185px">
      <q-item-label class="menu-label">
        {{ title }}
      </q-item-label>
    </q-item-section>
    <q-item-section>
      <q-badge
        v-if="color"
        rounded
        :color
        style="width: 13px"
        class="float-right"
      />
    </q-item-section>
  </q-item>
</template>

<script setup>
import { useRouter } from "vue-router";
import { computed } from "vue";
import { colors } from "quasar";
import { isLinksMatching } from "src/utils/custom";

const props = defineProps({
  title: { type: String, required: true }, // Название пункта меню
  link: { type: String, default: "#" }, // Путь
  linkName: { type: String, default: "" }, // Имя для именованного роута
  icon: { type: String, default: "" }, // Иконка
  color: { type: String, default: "" }, // Цвет раздела
  disable: { type: Boolean, default: false }, // Цвет раздела
});

const router = useRouter();

/**
 * Вычисляемый (исходя из именованного роута) путь.
 */
const calculatedHref = computed(() => {
  try {
    const resolvedRoute = router.resolve({ name: props.linkName });
    return resolvedRoute ? resolvedRoute.path : "#";
  } catch (error) {
    console.error("Failed to resolve route: ", error);
    return "#";
  }
});

/**
 * Вычисляемый (исходя из активности и цвета раздела) фон пункта меню.
 */
const calculatedBgColor = computed(() => colors.getPaletteColor(props.color));

/**
 * Проверяем соответствие пункта меню - текущей ссылке,
 * чтобы определить активен ли он.
 * @returns {boolean}
 */
const checkRoute = function () {
  const path = router.currentRoute.value.path;

  /**
   * Костыль для пользовательского раздела -
   * в нём проверяется полное соответствие ссылки пункту меню.
   */
  return path.indexOf("/user/") !== -1
    ? path === calculatedHref.value
    : isLinksMatching(router.currentRoute.value.path, calculatedHref.value);
};
</script>

<style scoped lang="sass">
.active
  color: white
  background-color: v-bind(calculatedBgColor)
  cursor: default !important

.menu-label
  font-size: larger
</style>
