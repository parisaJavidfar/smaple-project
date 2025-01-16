<template>
  <div class="chart-container">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Chart, registerables } from "chart.js";
import type {
  CoinHistoryResponse,
  CoinHistoryInterval,
} from "../service/schema.ts";

type TLineChartProps = {
  chartData: CoinHistoryResponse;
};

Chart.register(...registerables);

const chartCanvas = ref<HTMLCanvasElement | null>(null);

const props = defineProps<TLineChartProps>();

const chartData = ref({
  labels: props.chartData?.map((data: CoinHistoryInterval) =>
    new Date(data.time).toDateString(),
  ),
  datasets: [
    {
      label: "Price",
      data: props.chartData?.map((data: CoinHistoryInterval) => data.priceUsd),
      borderColor: "#42A5F5",
      backgroundColor: "rgba(66, 165, 245, 0.2)",
      borderWidth: 2,
      pointRadius: 0,
      fill: true,
      tension: 0.4,
    },
  ],
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      mode: "index" as const,
      intersect: false,
      callbacks: {
        label: (context: any) => {
          const price = context.raw.toLocaleString("en-US", {
            stxyle: "currency",
            currency: "USD",
          });
          return `Price: ${price}`;
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
          color: "#fff",
        },
        grid: {
          display: false,
        },
        ticks: {
          color: "#fff",
        },
      },
      y: {
        title: {
          display: true,
          text: "Price (USD)",
          color: "#fff",
        },
        grid: {
          color: "#444",
        },
        ticks: {
          color: "#fff",
          callback: (value: number) => `$${value.toLocaleString()}`,
        },
      },
    },
  },
});

onMounted(() => {
  if (chartCanvas.value) {
    new Chart(chartCanvas.value, {
      type: "line",
      data: chartData.value,
      options: chartOptions.value,
    });
  }
});
</script>

<style scoped>
.chart-container {
  display: flex;
  justify-items: center;
  height: 60vh;
  padding: 2em;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}

canvas {
  background-color: transparent;
}
</style>
