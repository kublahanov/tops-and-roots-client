<template>
  <q-page class="text-body1">
    <h1>О приложении</h1>
    <q-list>
      <q-item>
        <q-item-section>
          <router-link :to="helpLibsLink" class="text-primary">
            Библиотека
          </router-link>
          - раздел для хранения списка прочитанных книг.
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <router-link :to="helpFilmsLink" class="text-orange-9">
            Фильмотека
          </router-link>
          - раздел для хранения списка просмотренных фильмов, и других
          видеоматериалов.
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <router-link :to="helpCardsLink" class="text-red-8">
            Картотека
          </router-link>
          - раздел для хранения ваших личных данных.
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <router-link :to="helpBiosLink" class="text-teal-8">
            Биография
          </router-link>
          - раздел для записи и хранения структуры и, при необходимости, деталей
          Вашей биографии.
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <router-link :to="helpPlansLink" class="text-indigo-7">
            Планирование
          </router-link>
          - раздел для составления списка планов на жизнь.
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { useRouter } from "vue-router";

/**
 * Ссылки на разделы.
 */
const router = useRouter();
const helpLibsLink = router.resolve({ name: "help-libs" }).path;
const helpFilmsLink = router.resolve({ name: "help-films" }).path;
const helpCardsLink = router.resolve({ name: "help-cards" }).path;
const helpBiosLink = router.resolve({ name: "help-bios" }).path;
const helpPlansLink = router.resolve({ name: "help-plans" }).path;
</script>

<style scoped lang="sass">
a
  display: contents
.q-item
  padding-left: 0
</style>
