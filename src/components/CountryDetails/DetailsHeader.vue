<template>
  <div class="pt-1 pb-4 bg-dark text-slate-400">
    <svg-component
      :cases="Number(store?.getters?._getNewCasesInWorld?.NewCases)"
      :recovered="Number(store?.getters?._getNewCasesInWorld?.NewRecovered)"
      :deaths="Number(store?.getters?._getNewCasesInWorld?.NewDeaths)"
      gridColsClass="grid-cols-4"
      buttonSizeClass="w-10 h-10"
      :svgSize="Number(24)"
      itemFlexDirectionClass="flex-col"
      itemsPositionClass="items-center"
    />
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import SvgComponent from "../SvgSection/SvgComponent.vue";

const store = useStore();
</script>