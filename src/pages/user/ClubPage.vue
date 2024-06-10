<template>
  <q-page>
    <q-card bordered>
      <q-card-section>
        <div class="text-h6">Пользовательский клуб</div>
        <div class="text-subtitle2">
          Здесь вы можете найти себе друзей по интересам...
        </div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <q-table
          :columns="columns"
          :rows="friends"
          row-key="name"
          hide-pagination
          flat
          bordered
          separator="cell"
          :title="tableTitle"
          :no-data-label="noDataLabel"
          :no-results-label="noResultsLabel"
        >
          <template v-slot:no-data>
            <div class="full-width row flex-center q-py-lg">
              <span class="text-body1">{{ noDataLabel }}</span>
            </div>
          </template>
        </q-table>
      </q-card-section>
      <q-card-section>
        <q-table
          :columns="columns"
          :rows="friendsEmpty"
          row-key="name"
          hide-pagination
          flat
          bordered
          separator="cell"
          title="Список друзей 2"
          :no-data-label="noDataLabel"
          :no-results-label="noResultsLabel"
        >
          <template v-slot:no-data>
            <div class="full-width row flex-center q-py-lg">
              <span class="text-body1">{{ noDataLabel }}</span>
            </div>
          </template>
        </q-table>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import AuthService from "src/services/auth.service";

const tableTitle = "Список друзей";
const noDataLabel = "На данный момент список друзей пуст";
const noResultsLabel = "Список для указанных параметров пуст";
const columns = [
  {
    name: "id",
    field: "id",
    label: "ID",
    type: "number",
    align: "left",
    style: "width: 10%",
    headerClasses: "myClass",
  },
  {
    name: "name",
    field: "name",
    label: "Имя",
    headerClasses: "th-name",
  },
  {
    name: "surname",
    field: "surname",
    label: "Фамилия",
    headerClasses: "th-surname",
  },
];
const friends = AuthService.getUserFriends();
const friendsEmpty = [];
</script>

<style lang="sass">
.myClass
  width: 10%
.th-name
  width: 40%
.th-surname
  width: 40%
</style>
