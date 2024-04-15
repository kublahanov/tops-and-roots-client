<template>
  <q-card class="text-center shadow-0">
    <q-card-section>
      <h1 class="q-ma-none">{{ appName }}</h1>
    </q-card-section>
    <q-card-section>
      <q-img src="~/assets/tops-and-roots_logo_001.svg" width="100px" height="100px" :alt="appName" />
    </q-card-section>
    <q-card-section>
      <h2 class="q-ma-none">Войти</h2>
    </q-card-section>
  </q-card>
  <q-card>
    <q-card-section>
      <q-form @submit="onSubmit" @reset="onReset" class="q-pa-xl bg-white rounded-borders">
        <q-card-section>
          <q-input
            filled
            v-model="name"
            label="Your name *"
            hint="Name and surname"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Please type something']"
          />
        </q-card-section>
        <q-card-section>
          <q-input
            filled
            type="number"
            v-model="age"
            label="Your age *"
            lazy-rules
            :rules="[
        (val) => (val !== null && val !== '') || 'Please type your age',
        (val) => (val > 0 && val < 100) || 'Please type a real age',
      ]"
          />
        </q-card-section>
        <q-card-actions>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </q-card-actions>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref } from "vue";

/**
 * Константы.
 */
const appName = process.env.appName; // Имя приложения

const $q = useQuasar();

const name = ref(null);
const age = ref(null);
const accept = ref(false);

function onSubmit() {
  if (accept.value !== true) {
    $q.notify({
      color: "red-5",
      textColor: "white",
      icon: "warning",
      message: "You need to accept the license and terms first",
    });
  } else {
    $q.notify({
      color: "green-4",
      textColor: "white",
      icon: "cloud_done",
      message: "Submitted",
    });
  }
}

function onReset() {
  name.value = null;
  age.value = null;
  accept.value = false;
}
</script>

<style scoped lang="sass">
h1
  font-size: 2rem
h2
  font-size: 1.5rem
</style>
