<template>
  <q-page>
    <q-table
      :rows="migrations"
      :columns="columns"
      row-key="id"
      class="q-mb-lg col"
    />
    <q-card class="q-mb-lg col">
      <q-card-section>
        {{ pretty(migrations) }}
      </q-card-section>
    </q-card>
    <pre class="q-mb-lg q-card--bordered q-pa-md">{{ pretty(migrations) }}</pre>
    <p class="q-mb-lg q-card--bordered q-pa-md">
      Вы можете динамически настраивать цвета бренда во время выполнения:
      primary, secondary, accent, darkpositive, negativeinfo, warning. Это
      означает, что у вас может быть одна сборка вашего приложения с цветовой
      темой по умолчанию, но показывать ее с выбранной во время выполнения.
      Основная цветовая конфигурация выполняется с использованием
      пользовательских свойств CSS, хранящихся в корневом элементе (:root).
      Каждое свойство имеет имя --q-${name} (пример: --q-primary, --q-secondary)
      и должно иметь допустимый цвет CSS в качестве значения. Пользовательские
      свойства CSS используют те же правила наследования, что и обычный CSS,
      поэтому вы можете переопределить только желаемые цвета, а остальные будут
      унаследованы от родительских элементов. Рекомендуемый рабочий процесс -
      установить индивидуальные свойства цвета для элементов html
      (document.documentElement) или body (document.body). Это позволит вам
      вернуться к цвету по умолчанию, просто удалив свой пользовательский.
      Больше информации о пользовательских свойствах (переменных) CSS на MDN.
    </p>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { api } from "boot/axios";

const migrations = ref([]);
const columns = [
  {
    name: "id",
    label: "ID",
    align: "left",
    field: "id",
    sortable: true,
  },
  {
    name: "migration",
    label: "Name",
    align: "left",
    field: "migration",
    sortable: true,
  },
  // Добавьте дополнительные колонки в зависимости от структуры данных
];

const pretty = (val, indent = 2) => {
  return JSON.stringify(val, null, indent);
};

onMounted(async () => {
  try {
    const response = await api.get("/migrations");
    migrations.value = response.data;
  } catch (error) {
    console.error("Failed to fetch migrations:", error);
  }
});
</script>
