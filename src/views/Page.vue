<template>
  <div>
    <slot name="pre" />
    <div class="flex justify-center bg-dark h-full">
      <div class="w-[90%] bg-slate-300 rounded-lg p-4">
        <span class="flex justify-between">
          <h2 class="text-2xl text-slate-700 mb-2 font-bold">
            {{ props.leftTitle }}
          </h2>
          <h2 class="text-xl text-slate-700 mb-2">
            {{ props.rightTitle }}
          </h2>
        </span>
        <hr class="border-slate-600 mb-8" />
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ leftTitle: String, rightTitle: String });
</script>