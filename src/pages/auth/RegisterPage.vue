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
      <h1 class="text-primary">{{ appName }} &nbsp;&bull;&nbsp; Регистрация</h1>
    </q-card-section>
  </q-card>
  <q-card :flat="isMobile" class="q-px-md q-pt-md q-pb-sm custom-width">
    <q-form @submit="onSubmit">
      <q-card-section class="q-pt-md q-pb-sm">
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
      <q-card-section class="q-pb-md q-pt-sm">
        <q-input
          dense
          outlined
          type="password"
          v-model="password_re"
          label="Повтор пароля"
        >
          <template v-slot:prepend>
            <q-icon name="password" class="q-mr-xs" />
          </template>
        </q-input>
      </q-card-section>
      <q-card-section class="q-py-md text-center">
        <q-btn
          no-caps
          label="Создать аккаунт"
          type="submit"
          color="primary"
          class="full-width q-mb-sm"
        />
        или
        <q-btn
          no-caps
          flat
          dense
          label="Войти"
          type="a"
          :to="linkToLoginPage"
          color="primary"
          class="full-width q-mt-xs"
        />
      </q-card-section>
    </q-form>
  </q-card>
</template>

<script setup>
import { useQuasar } from "quasar";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

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
const password_re = ref(null);

/**
 * Ссылка на страницу логина.
 */
const linkToLoginPage = router.resolve({ name: "user-login" }).path;

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
  margin: 0

.custom-width
  width: 320px

.custom-margin
  margin-top: -15%
</style>
