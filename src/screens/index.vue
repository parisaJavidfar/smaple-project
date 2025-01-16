<template>
  <div class="p-6" style="height: 100vh">
    <v-btn @click="toggleTheme">ToggleTheme</v-btn>

    <Table :headers="headers" :data="coinsStore.coins" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useTheme } from "vuetify";

import Table from "../components/Table.vue";

import { useGetCoins } from "../composable/web/useGetCoins.ts";

import { useCoinsStore } from "../stores/coins.ts";
import { connectWebSocket } from "../service/socket.ts";

const theme = useTheme();

const coinsStore = useCoinsStore();
const { fetchCoins } = useGetCoins();

const headers = [
  { title: "Id", key: "id", sortable: true },
  { title: "Name", key: "name", sortable: true },
  { title: "Symbol", key: "symbol", sortable: true },
  { title: "Current Price", key: "currentPrice", sortable: true },
  { title: "24h Volume", key: "totalVolume", sortable: true },
];

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
};

onMounted(async () => {
  await fetchCoins();

  connectWebSocket();
});
</script>
