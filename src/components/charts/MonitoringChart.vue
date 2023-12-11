<template>
  <Bar id="my-chart-id" :data="chartData" />
</template>

<script lang="ts">
import { Bar } from "vue-chartjs";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  props: {
    lastMonth: {
      type: Number,
      required: true,
    },
  },
  computed: {
    chartData() {
      const monthNames = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
      ];
      const currentMonth = new Date().getMonth();
      const lastMonths = monthNames.slice(
        (currentMonth - 3 + 12) % 12,
        currentMonth + 1
      );
      return {
        labels: lastMonths,
        datasets: [
          {
            label: "Média por mês",
            backgroundColor: ["#64B5F6", "#FFB74D", "#81C784", "#BA68C8"],
            data: [80, 40, 50, this.lastMonth],
          },
        ],
      };
    },
  },
};
</script>
