<template>
  <q-card flat class="text-center q-mb-md custom-margin">
    <q-card-section class="q-py-xs">
      <router-link to="/" tabindex="-1">
        <q-img
          src="~/assets/tops-and-roots_logo_001.svg"
          width="80px"
          height="80px"
          :alt="appName"
          no-spinner
          no-transition
        />
      </router-link>
    </q-card-section>
    <q-card-section class="q-py-xs">
      <h1 class="text-primary">{{ appName }} &nbsp;&bull;&nbsp; Вход</h1>
    </q-card-section>
  </q-card>
  <q-card :flat="isMobile" class="q-px-md q-pt-md q-pb-sm custom-width">
    <q-form @submit="onSubmit">
      <q-card-section class="q-pt-md q-pb-sm">
        <div
          id="g_id_onload"
          :data-client_id="myGoogleClientId"
          data-login_uri="https://your.domain/your_login_endpoint"
          data-auto_prompt="false"
        ></div>
        <div
          class="g_id_signin"
          data-type="standard"
          data-size="large"
          data-theme="outline"
          data-text="signin_with"
          data-shape="rectangular"
          data-logo_alignment="left"
          data-width="255"
          :data-click_listener="onClickHandler()"
        ></div>
      </q-card-section>
      <q-card-section class="q-pa-none text-center">
        или
      </q-card-section>
      <q-card-section class="q-pt-sm q-pb-sm">
        <q-input
          dense
          outlined
          type="email"
          v-model="email"
          label="Электронный адрес"
        >
          <template v-slot:prepend>
            <q-icon name="email" class="q-mr-xs" />
          </template>
        </q-input>
      </q-card-section>
      <q-card-section class="q-pb-sm q-pt-sm">
        <q-input
          dense
          outlined
          type="password"
          v-model="password"
          label="Пароль"
        >
          <template v-slot:prepend>
            <q-icon name="password" class="q-mr-xs" />
          </template>
        </q-input>
      </q-card-section>
      <q-card-section class="q-py-md text-center">
        <q-btn
          no-caps
          label="Войти"
          type="submit"
          color="primary"
          class="full-width q-mb-sm"
        />
        или
        <q-btn
          no-caps
          flat
          dense
          label="Создать аккаунт"
          type="a"
          :to="linkToRegisterPage"
          color="primary"
          class="full-width q-mt-xs"
        />
      </q-card-section>
    </q-form>
  </q-card>
</template>

<script setup>
import { useQuasar } from "quasar";
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

/**
 * Манипуляции с Google.
 */
const myGoogleClientId = "178464542195-gqrnk9eqe3sncd59is6eb0h5pp5f0p3f.apps.googleusercontent.com";

onMounted(() => {
  const script = document.createElement("script");
  script.src = "https://accounts.google.com/gsi/client";
  script.async = false;
  document.body.appendChild(script);
});

function onClickHandler() {
  return console.log("Вход через Google!");
}

const $q = useQuasar();
const router = useRouter();

/**
 * Константы.
 */
const appName = process.env.appName; // Имя приложения

/**
 * Флаг размера экрана.
 */
const isMobile = computed(() => $q.screen.lt.sm);

/**
 * Данные формы.
 */
const email = ref(null);
const password = ref(null);

/**
 * Ссылка на страницу регистрации.
 */
const linkToRegisterPage = router.resolve({ name: "user-register" }).path;

function onSubmit() {
  $q.notify({
    color: "green-4",
    textColor: "white",
    icon: "cloud_done",
    message: "Успешно",
  });
}
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
