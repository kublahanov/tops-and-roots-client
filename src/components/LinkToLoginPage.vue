<template>
  <q-btn
    outline
    no-caps
    label="Войти"
    type="a"
    :to="linkToLoginPage"
    icon="o_login"
    :class="props.class"
  />
</template>

<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  class: String,
});

const router = useRouter();
const linkToLoginPage = router.resolve({ name: "user-login" }).path;
</script>

<style scoped lang="sass"></style>
