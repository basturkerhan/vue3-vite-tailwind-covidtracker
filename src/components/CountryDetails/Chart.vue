<template>
  <div class="w-[80%] lg:w-full mx-auto">
    <div
      class="
        grid grid-cols-4
        gap-4
        mb-2
        bg-slate-400
        text-center text-slate-100
      "
    >
      <div
        class="p-2 cursor-pointer"
        :class="{ 'bg-slate-500': selectedData[0] }"
        @click="updateChartData(casesData, 0)"
      >
        Total Cases
      </div>
      <div
        class="p-2 cursor-pointer"
        :class="{ 'bg-slate-500': selectedData[1] }"
        @click="updateChartData(deathsData, 1)"
      >
        Total Deaths
      </div>
      <div
        class="p-2 cursor-pointer"
        :class="{ 'bg-slate-500': selectedData[2] }"
        @click="updateChartData(newCasesData, 2)"
      >
        New Cases
      </div>
      <div
        class="p-2 cursor-pointer"
        :class="{ 'bg-slate-500': selectedData[3] }"
        @click="updateChartData(newDeathsData, 3)"
      >
        New Deaths
      </div>
    </div>

    <vue3-chart-js
      :id="lineChart.id"
      ref="chartRef"
      :type="lineChart.type"
      :data="lineChart.data"
    ></vue3-chart-js>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import appAxios from "../../utils/appAxios";
const props = defineProps({ symbol: String, labels: Array, datas: Array });

const chartRef = ref(null);
let casesData = ref([]);
let deathsData = ref([]);
let newCasesData = ref([]);
let newDeathsData = ref([]);
let selectedData = ref([true, false, false, false]);

const lineChart = {
  id: "line",
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        backgroundColor: [],
        data: [],
      },
    ],
  },
};

onMounted(async () => {
  let response = await appAxios.get(
    `/covid-ovid-data/sixmonth/${props.symbol.toUpperCase()}`
  );
  response = response.data.slice(0, 50).reverse();
  let labels = response.map((item) => item.date);

  response.map((item) => {
    casesData.value.push(item.total_cases);
    deathsData.value.push(item.total_deaths);
    newCasesData.value.push(item.new_cases);
    newDeathsData.value.push(item.new_deaths);
  });

  lineChart.data.labels = labels;
  updateChartData(casesData.value);
});

const updateChartData = (value, selectedDataId = 0) => {
  selectedData.value = [false, false, false, false];
  selectedData.value[selectedDataId] = true;
  lineChart.data.datasets = [
    {
      backgroundColor: ["#0a2431"],
      data: value,
    },
  ];

  chartRef.value.update();
};
</script>