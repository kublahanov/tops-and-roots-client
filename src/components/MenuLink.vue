<template>
  <q-item :to="calculatedHref" active-class="active">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>
    <q-item-section>
      <q-item-label class="menu-label">{{ title }}</q-item-label>
    </q-item-section>
    <q-item-section>
      <q-badge
        v-if="color"
        rounded
        :color
        style="width: 13px"
        class="q-ml-xl"
      />
    </q-item-section>
  </q-item>
</template>

<script setup>
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { colors } from "quasar";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    default: "#",
  },
  linkName: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "",
  },
});

const router = useRouter();
const calculatedHref = ref("");
let calculatedBgColor = "white";

onMounted(() => {
  calculatedHref.value = props.linkName
    ? router.resolve({ name: props.linkName }).href
    : props.link;

  calculatedBgColor = colors.getPaletteColor(props.color || "primary");
});
</script>

<style lang="sass" scoped>
.active
  color: white
  background-color: v-bind(calculatedBgColor)
.menu-label
  font-size: larger
</style>
