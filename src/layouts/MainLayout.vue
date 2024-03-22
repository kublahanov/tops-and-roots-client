<template>
  <div class="main position-relative" :style="style">
    <q-layout view="lHh Lpr lFf" class="main__layout shadow-3" container>
      <q-header elevated>
        <q-toolbar class="bg-grey-3 text-black">
          <q-btn
            round
            flat
            icon="keyboard_arrow_left"
            class="main__drawer-open q-mr-sm"
            @click="toggleLeftDrawer"
          />
          <q-btn round flat>
            <q-avatar>
              <img :src="currentConversation.avatar" alt="" />
            </q-avatar>
          </q-btn>
          <span class="q-subtitle-1 q-pl-md">
            {{ currentConversation.person }}
          </span>
          <q-space />
          <q-btn round flat icon="more_vert">
            <q-menu auto-close :offset="[110, 0]">
              <q-list dense style="min-width: 150px">
                <q-item clickable>
                  <q-item-section>Login</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Register</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Quit</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        bordered
        :breakpoint="690"
        :width="250"
      >
        <q-toolbar class="bg-grey-3">
          <q-chip size="md" class="q-pa-md">
            <q-avatar class="cursor-pointer" size="sm">
              <img src="/safari-pinned-tab.svg" alt="" />
            </q-avatar>
            <strong class="q-ml-sm">{{ appName }}</strong>
          </q-chip>
          <q-space />
        </q-toolbar>

        <q-scroll-area style="height: calc(100% - 100px)">
          <q-list>
            <!--<q-item-label header>Меню</q-item-label>-->
            <EssentialLink
              v-for="link in mainMenuLinks"
              :key="link.title"
              v-bind="link"
              :title="link.title"
            />
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container class="bg-grey-2">
        <router-view />
      </q-page-container>

      <q-footer>
        <q-toolbar class="bg-grey-3 text-black row">
          <small>{{ appName }}, Вер. {{ appVersion }}, {{ currentYear() }} &copy;</small>
        </q-toolbar>
      </q-footer>
    </q-layout>
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref, computed } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import mainMenuLinks from "./../router/menu";

const appName = process.env.appName;
const appVersion = process.env.appVersion;
const currentYear = () => (new Date()).getFullYear();

const conversations = [
  {
    id: 1,
    person: "Razvan Stoenescu",
    avatar: "https://cdn.quasar.dev/team/razvan_stoenescu.jpeg",
    caption: "I'm working on Quasar!",
    time: "15:00",
    sent: true,
  },
];

const $q = useQuasar();

const leftDrawerOpen = ref(true);
const search = ref("");
const message = ref("");
const currentConversationIndex = ref(0);

const currentConversation = computed(() => {
  return conversations[currentConversationIndex.value];
});

const style = computed(() => ({
  height: $q.screen.height + "px",
}));

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function setCurrentConversation(index) {
  currentConversationIndex.value = index;
}
</script>

<style lang="sass">
.main
  padding-top: var(--layout--vertical-padding)
  padding-bottom: var(--layout--vertical-padding)
  background-color: var(--layout-background-color)
  background-image: var(--layout-background-image)

  &:before
    content: ''
    height: 10em
    position: fixed
    top: 0
    width: 100%
    background-color: var(--layout-paddings-background-color)

  &:after
    content: ''
    height: 5em
    position: fixed
    bottom: 0
    width: 100%
    background-color: var(--layout-paddings-background-color)

  &__layout
    margin: 0 auto
    z-index: 4000
    max-width: var(--layout-max-width)
    border-radius: 5px

  &__field.q-field--outlined .q-field__control:before
    border: none

@media (max-width: 850px)
  .background
    padding: 0

    &__layout
      width: 100%
      border-radius: 0

@media (min-width: 691px)
  .background
    &__drawer-open
      display: none

.conversation__summary
  margin-top: 4px

.conversation__more
  margin-top: 0!important
  font-size: 1.4rem
</style>
