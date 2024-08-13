<template>
  <q-page>
    <q-form @submit="login">
      <q-input v-model="email" label="Email" type="email" />
      <q-input v-model="password" label="Password" type="password" />
      <q-btn type="submit" label="Login" />
    </q-form>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
// import { useRouter } from "vue-router";
import { api } from "boot/axios";
import { useQuasar } from "quasar";

const email = ref("");
const password = ref("");
// const router = useRouter();
const $q = useQuasar();

const login = async () => {
  try {
    // await api.get("/sanctum/csrf-cookie");
    await api.post("/login", { email: email.value, password: password.value });
    // router.push("/");
    $q.notify({
      type: "positive",
      position: "top",
      message: "Вы успешно авторизовались",
    });
  } catch (error) {
    console.error(error);
  }
};
</script>

<style scoped lang="sass">
h1
  font-size: 1.3rem
  font-weight: bold
  margin: 0

.custom-width
  width: 320px

.custom-margin
  margin-top: -15%

.g_id_signin
  width: 256px
  height: 44px
</style>
