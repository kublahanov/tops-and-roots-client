<template>
  <q-space></q-space>
</template>

<script setup>
import AuthService from "src/services/auth.service";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

const router = useRouter();
const $q = useQuasar();

AuthService.logout();

$q.notify({
  type: "positive",
  position: "top",
  message: "Вы успешно вышли",
});

router.push({ name: "guest-index" });
</script>
