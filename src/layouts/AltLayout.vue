<!--<template>-->
<!--  <div class="bg-primary">-->
<!--    <q-layout view="hHh lpR fFf" container class="layout-container">-->
<!--      <h1>nandfsd ndfljsdnf dfksdk</h1>-->
<!--      <p>nandfsd ndfljsdnf dfksdk aknflkasfa afdknasl</p>-->
<!--      <p>nandfsd ndfljsdnf dfksdk aknflkasfa afdknasl</p>-->
<!--      <p>nandfsd ndfljsdnf dfksdk aknflkasfa afdknasl</p>-->
<!--      <p>nandfsd ndfljsdnf dfksdk aknflkasfa afdknasl</p>-->
<!--      <p>nandfsd ndfljsdnf dfksdk aknflkasfa afdknasl</p>-->
<!--      <p>nandfsd ndfljsdnf dfksdk aknflkasfa afdknasl</p>-->
<!--    </q-layout>-->
<!--  </div>-->
<!--</template>-->

<template>
  <q-layout view="hHh lpR fFf">

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<style>
.bg-primary {
  & div {
    border: 1px dotted black;
  }
}
.layout-container {
  height: 100vh;
  max-width: 1200px;
  margin: auto;
}
</style>

<!--
https://github.com/quasarframework/quasar/issues/3750#issuecomment-1642482820
-->
