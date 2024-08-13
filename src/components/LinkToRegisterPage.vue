<!--
Кнопка для перехода на страницу регистрации.
-->
<template>
  <q-btn
    v-if="props.isShowAlways || !isAuthenticated"
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
import AuthService from "src/services/auth.service";
import { computed } from "vue";

const props = defineProps({
  class: String,
  isShowAlways: Boolean, // By default = false!
});

const router = useRouter();
const linkToRegisterPage = router.resolve({ name: "user-register" }).path;
const isAuthenticated = computed(() => AuthService.isAuthenticated());
</script>

<style scoped lang="sass"></style>
