<template>
  <line-chart
    v-if="coinsStore.coinHistory.length"
    :chart-data="coinsStore.coinHistory"
  />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

import LineChart from "../../../components/LineChart.vue";
import { useGetCoinHistory } from "../../../composable/web/useGetCoinHistory.ts";
import { useCoinsStore } from "../../../stores/coins.ts";

const route = useRoute();
const router = useRouter();

const coinId = String(route.params.id);

const coinsStore = useCoinsStore();

onMounted(() => {
  if (coinId) {
    const { fetchCoinHistory } = useGetCoinHistory(coinId);
    fetchCoinHistory();
  } else {
    router.replace("/");
  }
});
</script>
