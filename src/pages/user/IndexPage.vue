<template>
  <q-page>
    <q-card bordered>
      <q-card-section>
        <div class="text-h6">Профиль пользователя</div>
        <div class="text-subtitle2">
          Здесь вы можете настроить свой профиль...
        </div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <q-table :rows="list" row-key="name" flat bordered />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import AuthService from "src/services/auth.service";

const userData = AuthService.getUserData();
const list = [];
list.push(userData);
</script>
