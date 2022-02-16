<template>
  <page leftTitle="Vaccines" rightTitle="All">
    <template #content>
      <table-layout
        searchKey="devResearcher"
        :data="data"
        :labels="labels"
        :route="goDetailsPage"
        rParameter1="trimedName"
        rParameter2="category"
      />
    </template>
  </page>
</template>

<script setup>
import Page from "./Page.vue";
import appAxios from "../utils/appAxios";
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import TableLayout from "../components/TableLayout.vue";
import { useRouter } from "vue-router";

const router = useRouter();

let data = ref([]);
appAxios.get("/vaccines/get-all-vaccines").then((response) => {
  data.value = response.data.map((vaccine) => {
    return {
      devResearcher: vaccine.developerResearcher,
      category: vaccine.category,
      phase: vaccine.phase,
      lastUpdated: vaccine.lastUpdated.substring(0, 10),
      trimedName: vaccine.trimedName,
    };
  });
});

const labels = ref([
  {
    key: "devResearcher",
    value: "Dev. Researcher",
  },
  {
    key: "trimedName",
    value: "Trimed Name",
  },
  {
    key: "phase",
    value: "Phase",
  },
  {
    key: "category",
    value: "Category",
  },
  {
    key: "lastUpdated",
    value: "Last Updated",
  },
]);

const goDetailsPage = (trimedName, category) => {
  router.push({
    name: "VaccineDetailsPage",
    params: {
      trimedName,
      category,
    },
  });
};
</script>