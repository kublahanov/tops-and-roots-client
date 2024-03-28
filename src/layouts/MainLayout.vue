<template>
  <div class="main position-relative" :style="style">
    <q-layout view="lHh Lpr lFf" class="main__layout shadow-3" container>
      <q-header>
        <q-toolbar>

          <div class="q-pa-sm">
            <q-btn round class="q-pa-sm">
              <q-avatar>
                <img style="-webkit-filter: invert(1); filter: invert(1);" src="/safari-pinned-tab.svg" alt="" />
              </q-avatar>
            </q-btn>
          </div>

          <q-btn-dropdown
            no-caps
            :label="appName"
            @click="onMainClick"
          >
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section avatar>
                  <q-avatar icon="folder" color="primary" text-color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Photos</q-item-label>
                  <q-item-label caption>February 22, 2016</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-icon name="info" color="amber" />
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section avatar>
                  <q-avatar icon="assignment" color="secondary" text-color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Vacation</q-item-label>
                  <q-item-label caption>February 22, 2016</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-icon name="info" color="amber" />
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>

        </q-toolbar>

        <q-tabs align="left" dense outside-arrows inline-label no-caps>
          <q-route-tab to="/page1" label="Книги" icon="map" alert="accent" alert-icon="alarm_on" />
          <q-route-tab to="/page2" label="Авторы" icon="explore" />
          <q-route-tab to="/page3" label="Цитаты" icon="public" />
        </q-tabs>

      </q-header>

      <q-page-container class="bg-grey-2">
        <router-view />
      </q-page-container>

    </q-layout>
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref, computed } from "vue";
// import EssentialLink from "components/EssentialLink.vue";
// import mainMenuLinks from "./../router/menu";

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
    // background-color: var(--layout-paddings-background-color)

  &:after
    content: ''
    height: 5em
    position: fixed
    bottom: 0
    width: 100%
    // background-color: var(--layout-paddings-background-color)

  &__layout
    margin: 0 auto
    z-index: 4000
    max-width: var(--layout-max-width)
    border-radius: 5px

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
