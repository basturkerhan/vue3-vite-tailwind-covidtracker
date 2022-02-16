<template>
  <h2 class="text-2xl text-slate-300 text-center mb-4">Daily Statistics</h2>
  <Carousel
    :class="'pt-2 pb-4 ' + bgClass"
    :settings="settings"
    :autoplay="3000"
    :wrap-around="true"
    :breakpoints="breakpoints"
  >
    <slider-item
      v-for="item in props.items"
      :key="item.ThreeLetterSymbol"
      :item="item"
    />
  </Carousel>
</template>


<script setup>
import { Carousel } from "vue3-carousel";
import SliderItem from "./SliderItem.vue";
import "vue3-carousel/dist/carousel.css";
const props = defineProps({ bgClass: String, items: Array });
const bgClass = props?.bgClass || "bg-header";

const settings = {
  itemsToShow: 1,
  snapAlign: "center",
};

const breakpoints = {
  // 700px and up
  700: {
    itemsToShow: 3.5,
    snapAlign: "center",
  },
  // 1024 and up
  1024: {
    itemsToShow: 5,
    snapAlign: "start",
  },
};
</script>

<style>
.bg-header {
  background-color: rgba(11, 36, 51, 0.85) !important;
}
</style>



