<template>
  <header class="bg-image">
    <div
      class="h-screen w-full bg-main flex flex-col justify-center items-center"
    >
      <router-link :to="{ name: 'HomePage' }">
        <div class="mb-16 flex items-center justify-center">
          <h1 class="text-white font-serif text-4xl mr-4">COVID-19 Tracker</h1>
          <h1 class="text-gray-300 font-arial text-2xl flex">
            with
            <p class="ml-1 mr-1 text-green-400">Vue3</p>
            and
            <p class="text-emerald-400 ml-1">Tailwind</p>
          </h1>
        </div>
      </router-link>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 w-[75%]">
        <div class="flex flex-col items-center">
          <div
            class="
              rounded-full
              w-20
              h-20
              bg-yellow-600
              flex
              items-center
              justify-center
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
              />
            </svg>
          </div>
          <h2 class="text-slate-400 text-2xl mt-2">Cases</h2>
          <h2 class="text-slate-300 text-2xl mt-1 font-bold">
            {{ store?.getters?._getAllTimeCasesInWorld?.TotalCases }}
          </h2>
        </div>

        <div class="flex flex-col items-center">
          <div
            class="
              rounded-full
              w-20
              h-20
              bg-green-700
              flex
              items-center
              justify-center
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="lightgray"
              class="bi bi-check-lg"
              viewBox="0 0 16 16"
            >
              <path
                d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
              />
            </svg>
          </div>

          <h2 class="text-slate-400 text-2xl mt-2">Recovered</h2>
          <h2 class="text-slate-300 text-2xl mt-1 font-bold">
            {{ store?.getters?._getAllTimeCasesInWorld?.TotalRecovered }}
          </h2>
        </div>

        <div class="flex flex-col items-center">
          <div
            class="
              rounded-full
              w-20
              h-20
              bg-teal-800
              flex
              items-center
              justify-center
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="lightgray"
              class="bi bi-thermometer-high"
              viewBox="0 0 16 16"
            >
              <path
                d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585a1.5 1.5 0 0 1 1 1.415z"
              />
              <path
                d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z"
              />
            </svg>
          </div>

          <h2 class="text-slate-400 text-2xl mt-2">Critical</h2>
          <h2 class="text-slate-300 text-2xl mt-1 font-bold">
            {{ store?.getters?._getAllTimeCasesInWorld?.Serious_Critical }}
          </h2>
        </div>

        <div class="flex flex-col items-center">
          <div
            class="
              rounded-full
              w-20
              h-20
              bg-red-800
              flex
              items-center
              justify-center
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="lightgray"
              class="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path
                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
              />
            </svg>
          </div>

          <h2 class="text-slate-400 text-2xl mt-2">Deaths</h2>
          <h2 class="text-slate-300 text-2xl mt-1 font-bold">
            {{ store?.getters?._getAllTimeCasesInWorld?.TotalDeaths }}
          </h2>
        </div>
      </div>

      <router-link :to="{ name: 'VaccinesPage' }"
        ><button
          class="
            transition-all
            ease-linear
            duration-100
            px-8
            py-4
            my-8
            bg-transparent
            border-slate-400 border-2
            text-slate-300 text-xl
            hover:text-2xl
          "
        >
          Go Vaccines
        </button></router-link
      >
    </div>
  </header>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";

const store = useStore();

onMounted(async () => {
  await store.dispatch("getWorldDatas");
});
</script>


<style>
.card {
  padding: 1rem 5rem;
  border-radius: 0.5rem;
}

.bg-image {
  background-image: url("../assets/images/header-background.jpg");
}
</style>