<template>
  <Slide @click="goDetailsPage" class="slider-card">
    <div class="bg-slate-300 p-10 rounded-lg shadow-md slider-card">
      <h1 class="text-xl font-bold">{{ props.item.Country }}</h1>

      <infection-risk-bar :infectionRisk="props.item.Infection_Risk" />

      <svg-component
        :cases="Number(newCases)"
        :recovered="Number(newRecovered)"
        :deaths="Number(newDeaths)"
        gridColsClass="grid-cols-1"
        buttonSizeClass="w-8 h-8"
        :svgSize="Number(12)"
        flexDirectionClass="flex-col"
        itemsPositionClass="items-start"
      />
    </div>
  </Slide>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { Slide } from "vue3-carousel";
import SvgComponent from "../SvgSection/SvgComponent.vue";
import InfectionRiskBar from "../InfectionRiskBar.vue";

const props = defineProps(["item"]);
const router = useRouter();
const newCases = ref(props?.item?.NewCases);
const newRecovered = ref(props?.item?.NewRecovered);
const newDeaths = ref(props?.item?.NewDeaths);

const goDetailsPage = () => {
  router.push({
    name: "CountryDetailsPage",
    params: {
      country: props?.item?.Country || "",
      symbol: props?.item?.ThreeLetterSymbol || "",
    },
  });
};
</script>

<style>
.slider-card {
  cursor: pointer;
  margin-right: 2.5rem !important;
}
</style>