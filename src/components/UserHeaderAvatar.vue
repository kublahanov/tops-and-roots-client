<template>
  <q-avatar
    size="md"
    font-size="2rem"
    color="white"
    text-color="secondary"
    :icon="icon"
    class="q-mx-md"
  />
</template>

<script setup>
import AuthService from "src/services/auth.service";

const isAuthenticated = AuthService.isAuthenticated();
const icon = isAuthenticated ? "account_circle" : "help_outline";
</script>

<style scoped lang="sass"></style>
