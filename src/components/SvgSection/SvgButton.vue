<template>
  <div :class="`${itemFlexDirectionClass} flex gap-2 items-center`">
    <div
      :class="`${buttonColorClass} ${buttonSizeClass} rounded-md flex items-center justify-center`"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="props.svgSize"
        :height="props.svgSize"
        :fill="props.fill"
        :svgClass="props.svgClass"
        viewBox="0 0 16 16"
      >
        <slot />
      </svg>
    </div>
    <h2 class="text-lg mt-1 font-semibold">
      {{ props.statistic == 0 ? "0 or not published" : props.statistic }}
    </h2>
  </div>
</template>

<script setup>
const props = defineProps({
  svgSize: Number,
  buttonSizeClass: String,
  fill: String,
  svgClass: String,
  statistic: Number,
  buttonColorClass: String,
  itemFlexDirectionClass: String,
});
</script>