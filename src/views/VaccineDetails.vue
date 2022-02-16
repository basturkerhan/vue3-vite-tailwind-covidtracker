<template>
  <page
    :leftTitle="data?.developerResearcher + ' | ' + data?.category"
    :rightTitle="data?.phase"
  >
    {{ trimedName }}

    <template #content>
      <div class="grid md:grid-cols-3 gap-4">
        <div class="col-span-2">
          <div class="p-3 rounded-lg w-full h-full bg-slate-200">
            <h2 class="text-lg font-bold text-slate-500">Description</h2>
            <p>{{ description }}</p>
          </div>
        </div>
        <div class="p-2 bg-slate-200 rounded-lg">
          <div
            v-for="(item, index) in listedDatas"
            :key="index"
            class="grid grid-cols-2 p-1"
          >
            <div class="text-base font-semibold text-slate-700">
              {{ item?.name }}
            </div>
            <div>{{ item?.value }}</div>
          </div>
        </div>
      </div>

      <h2 class="font-bold text-xl mt-4 mb-2 text-slate-500 text-center">
        Next Steps
      </h2>
      <ul class="grid">
        <li
          class="p-3 border-2 mt-2 border-slate-200 rounded-lg bg-slate-200"
          v-for="(step, index) in nextSteps"
          :key="index"
        >
          {{ step }}
        </li>
      </ul>
    </template>
  </page>
</template>


<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Page from "./Page.vue";
import appAxios from "../utils/appAxios";

const router = useRouter();
const trimedName = router?.currentRoute?.value?.params?.trimedName;
const category = router?.currentRoute?.value?.params?.category;
const data = ref(null);
const listedDatas = ref(null);
const nextSteps = ref(null);
const description = ref(null);

appAxios
  .get(
    `/vaccines/get-vaccines/${category
      .replace(" ", "-")
      .toLowerCase()}/${trimedName}`
  )
  .then((response) => {
    data.value = response?.data[0];
    listedDatas.value = [
      { name: "FDA Approved", value: data?.value?.FDAApproved },
      {
        name: "Last Updated",
        value: data?.value?.lastUpdated.substring(0, 10),
      },
      { name: "Funder", value: data?.value?.funder },
      {
        name: "Clinical Trials For Other Diseases",
        value: data?.value?.clinicalTrialsForOtherDiseases,
      },
    ];

    nextSteps.value = data?.value?.nextSteps.split(";");
    description.value = data?.value?.description;
  });
</script>