<template>
  <q-page>
    <q-card flat :class="{ 'big-margin': isDesktop }" class="first-card">
      <q-card-section class="text-center">
        <MainLogo />
        <h1 class="text-primary text-weight-bold">{{ appName }}</h1>
        Приложение позволяет расширить возможности каталогизации, планирования и
        целеполагания в некоторых сферах жизни.
        <br />
        Например: список прочитанных книг, просмотренных фильмов, целей и задач
        на будущее, и так далее.
        <br />
        С его помощью можно структурировать, систематизировать, выстраивать
        связи для большого количества сущностей в рамках выбранной сферы.
        <br />
        Планировать развитие, следить за собственным прогрессом, и даже - при
        желании - делиться им с другими участниками!
      </q-card-section>
      <q-card-section class="text-center">
        <LinkToLoginPage class="q-mb-sm" />
        <LinkToRegisterPage class="q-ml-sm q-mb-sm" />
      </q-card-section>
    </q-card>

    <q-card flat class="q-mb-xl">
      <q-card-section horizontal>
        <q-card-section>
          <strong class="text-primary">Библиотека</strong> - это раздел для
          хранения списка прочитанных книг.
          <br />
          Список ранжируется по годам прочтения, структурируется по авторам,
          тематикам, актуальности и значимости для Вас лично, а также по многим
          другим параметрам.
          <div class="row">
            <q-btn
              type="a"
              outline
              no-caps
              size="md"
              icon-right="chevron_right"
              to=""
              class="q-pr-sm q-mt-sm text-primary"
            >
              Узнать больше
            </q-btn>
          </div>
        </q-card-section>
        <q-card-section class="q-px-lg">
          <q-avatar
            size="125px"
            font-size="70px"
            color="primary"
            text-color="white"
            icon="o_library_books"
          />
        </q-card-section>
      </q-card-section>
    </q-card>

    <q-card flat class="q-mb-xl">
      <q-card-section horizontal>
        <q-card-section class="q-px-lg">
          <q-avatar
            size="125px"
            font-size="70px"
            color="orange-9"
            text-color="white"
            icon="o_movie"
          />
        </q-card-section>
        <q-card-section>
          <strong class="text-orange-9">Фильмотека</strong> - это раздел для
          хранения списка просмотренных фильмов, и других видеоматериалов.
          <br />
          Список ранжируется по годам просмотра, структурируется по авторам,
          жанрам, актуальности и значимости для Вас лично, а также по многим
          другим параметрам.
          <div class="row">
            <q-btn
              type="a"
              outline
              no-caps
              size="md"
              icon-right="chevron_right"
              to=""
              class="q-pr-sm q-mt-sm text-orange-9"
            >
              Узнать больше
            </q-btn>
          </div>
        </q-card-section>
      </q-card-section>
    </q-card>

    <q-card flat class="q-mb-xl">
      <q-card-section horizontal>
        <q-card-section>
          <strong class="text-red-8">Картотека</strong> - это раздел для
          хранения списка прочитанных книг.
          <br />
          Список ранжируется по годам прочтения, структурируется по авторам,
          тематикам, актуальности и значимости для Вас лично, а также по многим
          другим параметрам.
          <div class="row">
            <q-btn
              type="a"
              outline
              no-caps
              size="md"
              icon-right="chevron_right"
              to=""
              class="q-pr-sm q-mt-sm text-red-8"
            >
              Узнать больше
            </q-btn>
          </div>
        </q-card-section>
        <q-card-section class="q-px-lg">
          <q-avatar
            size="125px"
            font-size="70px"
            color="red-8"
            text-color="white"
            icon="o_dashboard_customize"
          />
        </q-card-section>
      </q-card-section>
    </q-card>

    <q-card flat class="q-mb-xl">
      <q-card-section horizontal>
        <q-card-section class="q-px-lg">
          <q-avatar
            size="125px"
            font-size="70px"
            color="teal-8"
            text-color="white"
            icon="o_assignment_ind"
          />
        </q-card-section>
        <q-card-section>
          <strong class="text-teal-8">Биография</strong> - это раздел для
          хранения списка просмотренных фильмов, и других видеоматериалов.
          <br />
          Список ранжируется по годам просмотра, структурируется по авторам,
          жанрам, актуальности и значимости для Вас лично, а также по многим
          другим параметрам.
          <div class="row">
            <q-btn
              type="a"
              outline
              no-caps
              size="md"
              icon-right="chevron_right"
              to=""
              class="q-pr-sm q-mt-sm text-teal-8"
            >
              Узнать больше
            </q-btn>
          </div>
        </q-card-section>
      </q-card-section>
    </q-card>

    <q-card flat class="q-mb-xl">
      <q-card-section horizontal>
        <q-card-section>
          <strong class="text-indigo-7">Планирование</strong> - это раздел для
          хранения списка прочитанных книг.
          <br />
          Список ранжируется по годам прочтения, структурируется по авторам,
          тематикам, актуальности и значимости для Вас лично, а также по многим
          другим параметрам.
          <div class="row">
            <q-btn
              type="a"
              outline
              no-caps
              size="md"
              icon-right="chevron_right"
              to=""
              class="q-pr-sm q-mt-sm text-indigo-7"
            >
              Узнать больше
            </q-btn>
          </div>
        </q-card-section>
        <q-card-section class="q-px-lg">
          <q-avatar
            size="125px"
            font-size="70px"
            color="indigo-7"
            text-color="white"
            icon="o_moving"
          />
        </q-card-section>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import LinkToLoginPage from "components/LinkToLoginPage.vue";
import LinkToRegisterPage from "components/LinkToRegisterPage.vue";
import MainLogo from "components/MainLogo.vue";
import { computed } from "vue";
import { useQuasar } from "quasar";

/**
 * Константы.
 */
const appName = process.env.appName; // Имя приложения

/**
 * Флаг размера экрана.
 */
const $q = useQuasar();
const isDesktop = computed(() => $q.screen.gt.sm);
</script>

<style scoped lang="sass">
.q-card
  font-size: 17px
  &.first-card
    margin-bottom: 24px !important
    .q-card__section
      font-size: 18px
.big-margin
  margin: auto 150px
</style>
