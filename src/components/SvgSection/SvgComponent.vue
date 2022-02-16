<template>
  <h5
    v-if="props?.title?.length > 0"
    class="text-xl font-bold text-slate-500 mb-1"
  >
    {{ props?.title }}
  </h5>

  <div
    :class="`
        grid 
        gap-4 
        justify-center 
        ${itemsPositionClass} 
        ${flexDirectionClass} 
        ${marginClass} 
        ${gridColsClass} 
        `"
  >
    <div v-if="gridColsClass == 'grid-cols-4'">
      <h3 class="text-xl text-center">In the World today...</h3>
    </div>

    <svg-button
      v-for="option in buttonOptions"
      :key="option.id"
      :svgSize="props.svgSize"
      :buttonSizeClass="buttonSizeClass"
      :fill="option.fill"
      :svgClass="option.svgClass"
      :statistic="
        option.id == 1
          ? props.cases
          : option.id == 2
          ? props.recovered
          : props.deaths
      "
      :buttonColorClass="option.buttonColorClass"
      :itemFlexDirectionClass="props.itemFlexDirectionClass"
    >
      <template #default>
        <path
          v-if="option.id == 1"
          fill-rule="evenodd"
          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
        />
        <path
          v-else-if="option.id == 2"
          d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
        />
        <path
          v-else
          d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
        />
      </template>
    </svg-button>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import SvgButton from "./SvgButton.vue";

const props = defineProps({
  title: String,
  cases: Number,
  recovered: Number,
  deaths: Number,
  gridColsClass: String,
  buttonSizeClass: String,
  svgSize: Number,
  flexDirectionClass: String,
  itemFlexDirectionClass: String,
  marginClass: String,
  itemsPositionClass: String,
});

const buttonOptions = ref([
  {
    id: 1,
    fill: "lightgray",
    svgClass: "bi bi-plus-lg",
    buttonColorClass: "bg-yellow-600",
  },
  {
    id: 2,
    fill: "lightgray",
    svgClass: "bi bi-check-lg",
    buttonColorClass: "bg-green-700",
  },
  {
    id: 3,
    fill: "lightgray",
    svgClass: "bi bi-heart",
    buttonColorClass: "bg-red-700",
  },
]);
</script>


