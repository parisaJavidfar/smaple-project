<template>
  <line-chart :chart-data="chartData" />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

import LineChart from "../../../components/LineChart.vue";
import { useGetCoinHistory } from "../../../composable/web/useGetCoinHistory.ts";

const route = useRoute();
const router = useRouter();

const chartData = ref();

onMounted(() => {
  const coinId = String(route.query.id);
  if (coinId) {
    chartData.value = useGetCoinHistory(coinId);
  } else {
    router.replace("/");
  }
});
</script>
