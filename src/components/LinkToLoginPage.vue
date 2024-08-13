<!--
Кнопка для перехода на страницу логина.
-->
<template>
  <q-btn
    v-if="props.isShowAlways || !isAuthenticated"
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
import AuthService from "src/services/auth.service";
import { computed } from "vue";

const props = defineProps({
  class: String,
  isShowAlways: Boolean, // By default = false!
});

const router = useRouter();
const linkToLoginPage = router.resolve({ name: "user-login" }).path;
const isAuthenticated = computed(() => AuthService.isAuthenticated());
</script>

<style scoped lang="sass"></style>
