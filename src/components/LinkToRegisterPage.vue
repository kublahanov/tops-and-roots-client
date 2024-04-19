<template>
  <q-btn
    outline
    no-caps
    label="Создать аккаунт"
    type="a"
    :to="linkToRegisterPage"
    icon="o_how_to_reg"
    :class="props.class"
  />
</template>

<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  class: String,
});

const router = useRouter();
const linkToRegisterPage = router.resolve({ name: "user-register" }).path;
</script>

<style scoped lang="sass"></style>
