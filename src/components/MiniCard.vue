<template>
  <section
    :class="weightColor"
    class="w-[187px] h-[82px] rounded-xl p-3 mt-[32px]"
  >
    <MassMeter />
    <div class="flex justify-around">
      <h7 class="text-h7 font-bold">{{ props.name }}</h7>
      <h7 class="text-h7 font-semibold">{{ props.value }} {{ props.meter }}</h7>
    </div>
  </section>
</template>

<script setup lang="ts">
import MassMeter from "@/assets/icons/MassMeter.vue";
import { defineProps } from "vue";

const props = defineProps({
  name: String,
  value: Number,
  meter: String,
  weightColor: String,
});
</script>
