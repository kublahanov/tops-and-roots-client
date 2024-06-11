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
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { colors } from "quasar";
import { calculateHref, isLinksSectionsMatching } from "src/utils/custom";
import { useSectionDataStore } from "stores/sectionDataStore";

const props = defineProps({
  title: { type: String, required: true }, // Название пункта меню
  linkName: { type: String, default: "" }, // Имя для именованного роута
  icon: { type: String, default: "" }, // Иконка
  color: { type: String, default: "" }, // Цвет раздела
  disable: { type: Boolean, default: false }, // Разрешён ли пункт
});

/**
 * Вычисляемый (исходя из именованного роута) путь.
 */
const calculatedHref = computed(() => {
  return calculateHref(props.linkName);
});

/**
 * Вычисляемый (исходя из активности и цвета раздела) фон пункта меню.
 */
const calculatedBgColor = computed(() => colors.getPaletteColor(props.color));

const appStore = useSectionDataStore();
const layoutName = ref("");

onMounted(() => {
  layoutName.value = appStore.getLayoutName;
});

const router = useRouter();

/**
 * Проверяем соответствие пункта меню - текущей ссылке,
 * чтобы определить активен ли он.
 */
const checkRoute = function () {
  const path = router.currentRoute.value.path;

  /**
   * Для разных разделов - проверка разная.
   */
  switch (layoutName.value) {
    case "MainLayout":
      return isLinksSectionsMatching(path, calculatedHref.value);
    // case "UserLayout":
    //   return path === calculatedHref.value;
    // case "GuestLayout":
    //   return path === calculatedHref.value;
    default:
      return path === calculatedHref.value;
  }
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
