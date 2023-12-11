<template>
  <section class="bg-gray-300 w-full h-[220px] mt-[32px] mr-[16px] rounded-lg">
    <div class="p-4">
      <h7 class="text-h7">IMC - Índice de Massa Corporal</h7>
      <div class="flex items-center justify-around pt-5">
        <h6 class="text-h6">{{ props.value }}</h6>
        <v-chip variant="flat" :color="healthColor">
          {{ healthStatus }}
        </v-chip>
      </div>
      <div class="flex items-center justify-center mx-5 pt-20">
        <div>
          <span class="colored-bar w-[243px] h-[14px] flex"></span>
          <div class="flex justify-between">
            <ul v-for="(mass, index) in massValues" :key="index">
              <li>{{ mass }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps, ref, computed } from "vue";
import imcValues from "@/constants/imcValues";
const massValues = ref(imcValues);
const props = defineProps({
  value: {
    type: Number,
  },
});

const healthStatus = computed(() => {
  if (props.value === undefined) {
    return "Valor indefinido";
  } else if (props.value < 18.5) {
    return "Você está abaixo do peso";
  } else if (props.value >= 18.5 && props.value <= 24.9) {
    return "Você está saudável";
  } else if (props.value >= 25 && props.value <= 29.9) {
    return "Você está com sobrepeso";
  } else if (props.value >= 30 && props.value <= 34.9) {
    return "Você está com obesidade grau 1";
  } else if (props.value >= 35 && props.value <= 39.9) {
    return "Você está com obesidade grau 2";
  } else if (props.value >= 40) {
    return "Você está com obesidade grau 3";
  } else {
    return "Valor fora do intervalo";
  }
});

const healthColor = computed(() => {
  if (props.value === undefined) {
    return "gray";
  }
  if (props.value >= 18.5 && props.value <= 24.9) {
    return "green";
  } else if (props.value >= 25 && props.value <= 29.9) {
    return "yellow";
  } else if (props.value >= 30 && props.value <= 34.9) {
    return "orange";
  } else if (props.value >= 35 && props.value <= 39.9) {
    return "red";
  } else if (props.value >= 40) {
    return "purple";
  } else {
    return "gray";
  }
});
</script>

<style scoped>
.colored-bar {
  border-radius: 21px;
  background: linear-gradient(
    90deg,
    #b5d4f1 0%,
    #81e5db 37.77%,
    #e8d284 70.4%,
    #e2798e 100%
  );
}
</style>
