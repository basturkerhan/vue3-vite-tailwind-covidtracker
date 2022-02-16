<template>
  <page leftTitle="All Countries" rightTitle="World">
    <template #pre>
      <slider :items="store.getters._getSliderItems" />
      <div class="my-8 bg-dark text-slate-400">
        <svg-component
          :cases="Number(store?.getters?._getNewCasesInWorld?.NewCases)"
          :recovered="Number(store?.getters?._getNewCasesInWorld?.NewRecovered)"
          :deaths="Number(store?.getters?._getNewCasesInWorld?.NewDeaths)"
          gridColsClass="grid-cols-4"
          buttonSizeClass="w-14 h-14"
          :svgSize="Number(24)"
          itemFlexDirectionClass="flex-col"
          itemsPositionClass="items-center"
        />
      </div>
    </template>

    <template #content>
      <table-layout
        searchKey="Country"
        :data="store.getters._getSliderItems"
        :labels="labels"
        :route="goDetailsPage"
        rParameter1="Country"
        rParameter2="ThreeLetterSymbol"
      />
    </template>
  </page>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Page from "./Page.vue";
import Slider from "../components/Slider/SliderSection.vue";
import SvgComponent from "../components/SvgSection/SvgComponent.vue";
import TableLayout from "../components/TableLayout.vue";

const store = useStore();
const router = useRouter();

const labels = ref([
  {
    key: "Country",
    value: "Country",
  },
  {
    key: "NewCases",
    value: "New Cases",
  },
  {
    key: "NewRecovered",
    value: "New Recovered",
  },
  {
    key: "NewDeaths",
    value: "New Deaths",
  },
]);

const goDetailsPage = (country, symbol) => {
  router.push({
    name: "CountryDetailsPage",
    params: {
      country,
      symbol,
    },
  });
};
</script>