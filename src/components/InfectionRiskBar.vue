<template>
  <div class="mt-4 mb-10">
    <p class="text-gray-600">Infection Risk: {{ props?.infectionRisk }}%</p>
    <div
      :class="{ full: props?.forDetailsPage }"
      class="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden"
    >
      <div
        class="bg-red-700 h-full rounded-lg shadow-md"
        :style="`width: ${props.infectionRisk}%;`"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
const props = defineProps({ infectionRisk: Number, forDetailsPage: Boolean });
const infectionRiskBar = ref(
  `w-${Math.floor(1 + (props?.infectionRisk / 20 || 0))}/5`.toString()
);
</script>

<style>
.full {
  width: 100% !important;
  min-width: 100% !important;
}
</style>