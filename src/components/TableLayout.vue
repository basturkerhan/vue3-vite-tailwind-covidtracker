<template>
  <div class="container">
    <table class="text-left w-full">
      <thead class="bg-header flex text-white w-full">
        <tr class="flex w-full cursor-pointer">
          <th
            v-for="(label, index) in props.labels"
            :key="label.key"
            class="w-1/4 cursor-pointer"
          >
            <p class="p-4" @click="sortData(label.key)" v-if="index != 0">
              {{ label.value }}
            </p>
            <input
              v-else
              v-model="text"
              type="text"
              placeholder="Search"
              class="p-4 w-full bg-transparent outline-none"
            />
          </th>
        </tr>
      </thead>
      <tbody
        class="
          bg-slate-200
          flex flex-col
          items-center
          justify-between
          overflow-y-scroll
          w-full
          min-h-96
          max-h-screen
        "
      >
        <tr
          v-for="(item, index) in tableData"
          :key="`tr-${index}`"
          class="flex w-full mb-4 cursor-pointer"
          @click="props.route(item[props.rParameter1], item[props.rParameter2])"
        >
          <td
            v-for="(label, j) in props.labels"
            :key="`${label.key}-${j}`"
            class="p-4 w-1/4 text-base font-semibold text-slate-700"
          >
            {{ item[label.key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script setup>
import { computed } from "@vue/runtime-core";
import { ref } from "vue";

const props = defineProps({
  data: Array,
  searchKey: String,
  labels: Array,
  route: Function,
  rParameter1: String,
  rParameter2: String,
});

let data = ref(null);
data.value = props.data;

const text = ref("");
// labels format: [{key:"cases",value:"Cases Count"},{}]
// searchKey: search input which variable will it look for

const sortData = (type = "") => {
  data.value = data.value.sort((a, b) =>
    a[type] > b[type] ? -1 : b[type] > a[type] ? 1 : 0
  );
};

const tableData = computed(() => {
  data.value = props.data;
  return data.value.filter(
    (item) =>
      item[props.searchKey].toLowerCase().indexOf(text.value.toLowerCase()) > -1
  );
});
</script>