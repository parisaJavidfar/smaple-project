<template>
  <v-container>
    <v-text-field
      v-model="searchQuery"
      label="Search"
      placeholder="Search"
      clearable
    />

    <v-data-table :headers="headers" :items="filteredData">
      <template v-slot:item="{ item }">
        <tr @click="navigateToDetail(item.id)">
          <td v-for="header in headers" :key="header.key">
            {{ item[header.key] }}
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

type TTableProps = {
  headers: Array<{ title: string; key: string; sortable?: boolean }>;
  data: Array<Record<string, any>>;
};

const props = defineProps<TTableProps>();

const searchQuery = ref("");
const router = useRouter();

const filteredData = computed(() => {
  if (!searchQuery.value) {
    return props.data;
  }

  const query = searchQuery.value.toLowerCase();

  return props.data.filter((item) => {
    return (
      item.name.toLowerCase().includes(query) ||
      item.symbol.toLowerCase().includes(query) ||
      item.id.toLowerCase().includes(query)
    );
  });
});

const navigateToDetail = (id: string) => {
  router.push({
    path: `/coin/${id}`,
  });
};
</script>

<style scoped>
:deep(.v-data-table tr:hover) {
  background-color: #b4c0c6;
  cursor: pointer;
}
</style>
