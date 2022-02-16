<template>
  <page :rightTitle="data?.Continent + ' Continent'" :leftTitle="country">
    <template #pre>
      <details-header />
    </template>
    <template #content>
      <!-- Details -->
      <div class="grid lg:grid-cols-2 gap-8 mt-4">
        <div>
          <chart :symbol="symbol" />
          <infection-risk-bar
            :infectionRisk="Number(data.Infection_Risk)"
            forDetailsPage="true"
          />
        </div>

        <div>
          <svg-component
            title="Total"
            :cases="Number(data.TotalCases)"
            :recovered="Number(data.TotalRecovered)"
            :deaths="Number(data.TotalDeaths)"
            gridColsClass="grid-cols-3"
            buttonSizeClass="w-10 h-10"
            :svgSize="Number(18)"
            flexDirectionClass="flex-row"
            itemFlexDirectionClass="items-center"
            marginClass="mb-6"
          />

          <svg-component
            title="New"
            :cases="data.NewCases"
            :recovered="data.NewRecovered"
            :deaths="data.NewDeaths"
            gridColsClass="grid-cols-3"
            buttonSizeClass="w-10 h-10"
            :svgSize="Number(18)"
            flexDirectionClass="flex-row"
            itemFlexDirectionClass="items-center"
            marginClass="mb-6"
          />

          <div
            v-for="(item, index) in listedDatas"
            :key="index"
            class="grid grid-cols-2 border-b-2 border-slate-500 p-1"
          >
            <div class="text-base font-semibold text-slate-700">
              {{ item?.name }}
            </div>
            <div>{{ item?.value }}</div>
          </div>
        </div>
      </div>
      <!-- Details end -->
    </template>
  </page>
</template>

<script setup>
import { onMounted, reactive, ref } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import DetailsHeader from "../components/CountryDetails/DetailsHeader.vue";
import Chart from "../components/CountryDetails/Chart.vue";
import appAxios from "../utils/appAxios";
import SvgComponent from "../components/SvgSection/SvgComponent.vue";
import InfectionRiskBar from "../components/InfectionRiskBar.vue";
import Page from "./Page.vue";

const router = useRouter();
const country = router?.currentRoute?.value?.params?.country;
const symbol = ref(router?.currentRoute?.value?.params?.symbol);
let data = ref({});

let listedDatas = ref(null);

onMounted(async () => {
  const response = await appAxios.get(
    `/npm-covid-data/country-report-iso-based/${country}/${symbol.value}`
  );
  data.value = response?.data[0];
  console.log(data.value);
  listedDatas.value = [
    { name: "Active Cases", value: data?.value?.ActiveCases },
    { name: "Case Fatality Rate", value: data?.value?.Case_Fatality_Rate },
    { name: "1M Population Deaths", value: data?.value?.Deaths_1M_pop },
    { name: "Population", value: data?.value?.Population },
    { name: "Serious Critical", value: data?.value?.Serious_Critical },
    { name: "Total Tests", value: data?.value?.TotalTests },
    { name: "Test Percentage", value: data?.value?.Test_Percentage },
  ];
});
</script>