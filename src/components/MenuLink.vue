<template>
  <!-- prettier-ignore -->
  <q-item :to="calculatedHref" active-class="active" :active="checkRoute()">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>
    <q-item-section>
      <q-item-label class="menu-label">{{ title }}</q-item-label>
    </q-item-section>
    <q-item-section>
      <q-badge v-if="color" rounded :color style="width: 13px" class="q-ml-xl" />
    </q-item-section>
  </q-item>
</template>

<script setup>
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { colors } from "quasar";
import { checkLinkMatchCurrentUrl } from "src/boot/custom";

// prettier-ignore
const props = defineProps({
  title: { type: String, required: true },  // Название пункта меню
  link: { type: String, default: "#" },     // Путь
  linkName: { type: String, default: "" },  // Имя для именованного роута
  icon: { type: String, default: "" },      // Иконка
  color: { type: String, default: "" },     // Цвет раздела
});

const router = useRouter();
let calculatedHref = ref("/"); // Вычисляемый (исходя из именованного роута) путь
let calculatedBgColor = ref("white"); // Вычисляемый (исходя из активности и цвета раздела) фон пункта меню

/**
 * Проверяем соответствие пункта меню - текущей ссылке,
 * чтобы определить активен ли он.
 * @returns {boolean}
 */
function checkRoute() {
  return checkLinkMatchCurrentUrl(router.currentRoute.value.path, calculatedHref.value)
}

onMounted(() => {
  calculatedHref.value = props.linkName
    ? router.resolve({ name: props.linkName }).href
    : props.link;

  calculatedBgColor.value = colors.getPaletteColor(props.color);

  // console.log("onMounted", calculatedHref.value, calculatedBgColor.value);
});
</script>

<style lang="sass" scoped>
.active
  color: white
  background-color: v-bind(calculatedBgColor)
  cursor: default !important
.menu-label
  font-size: larger
</style>
