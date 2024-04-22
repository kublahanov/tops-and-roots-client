<template>
  <q-page>
    <q-card bordered>
      <q-card-section>
        <div class="text-h6">Выход</div>
        <div class="text-subtitle2">Здесь вы можете выйти...</div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import AuthService from "src/services/auth.service";

AuthService.logout();
</script>
