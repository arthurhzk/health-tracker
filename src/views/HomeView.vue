<template>
  <div class="flex justify-center">
    <section class="mt-[40px]">
      <div class="flex items-center">
        <div>
          <h4 class="text-h4">Rastreador de Saúde</h4>
        </div>
        <CheckupForm />
      </div>

      <div class="flex justify-center gap-8 mt-12">
        <TheCard
          name="Glicemia no sangue"
          :value="getLastGlicemyValue"
          :status="lastGlicemyStatus"
          meter="mg/dL"
        >
          <BloodSugar />
        </TheCard>
        <TheCard
          name="Batimentos cardíacos"
          :value="getLastHeartBeat"
          :status="lastHeartRateStatus"
          meter="bpm"
        >
          <HeartCheck />
        </TheCard>
        <TheCard
          name="Pressão arterial"
          :value="getLastSystole"
          :second-value="getLastDiastole"
          :status="lastPressureStatus ?? undefined"
          meter="mmhg"
        >
          <BloodPressure />
        </TheCard>
        <div class="flex items-center justify-center"></div>
      </div>
    </section>

    <div class="bg-gray-500 w-full h-screen ml-12 rounded-xl">
      <div class="mt-14 ml-6">
        <div class="flex items-center justify-center">
          <h4 class="text-h4 text-white">Calculadora de IMC</h4>
          <MassModal />
        </div>
        <div class="flex items-center gap-4">
          <div class="flex flex-col">
            <MiniCard
              name="Altura"
              :value="getLastHeight"
              meter="cm"
              weight-color="bg-yellow-100"
            />
            <MiniCard
              name="Peso"
              :value="getLastWeight"
              meter="kg"
              weight-color="bg-white"
            />
          </div>

          <MassCard :value="calculateBMI || 0" />
        </div>

        <div class="flex flex-col justify-between">
          <h4 class="text-h4 text-white my-4">Medidas corporais</h4>
          <h7 class="text-h7 text-white">Checado há dois dias atrás</h7>
        </div>
        <div class="absolute bottom-2 right-10">
          <img src="@/assets/male.png" alt="" />
        </div>
        <div class="space-y-5 mt-20">
          <SmallestCard name="Peito (in)" :value="42" />
          <SmallestCard name="Cintura (in)" :value="34" />
          <SmallestCard name="Quadril (in)" :value="42.5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TheCard from "@/components/TheCard.vue";
import BloodPressure from "@/assets/icons/BloodPressure.vue";
import HeartCheck from "@/assets/icons/HeartCheck.vue";
import BloodSugar from "@/assets/icons/BloodSugar.vue";
import MiniCard from "@/components/MiniCard.vue";
import MassCard from "@/components/charts/MassCard.vue";
import SmallestCard from "@/components/SmallestCard.vue";
import CheckupForm from "@/components/CheckupForm.vue";
import MassModal from "@/components/MassModal.vue";
import { fetchData } from "@/composables/useFetchData";
import { fetchMassData } from "@/composables/useCheckMass";

const {
  getLastGlicemyValue,
  getLastHeartBeat,
  getLastSystole,
  getLastDiastole,
  lastGlicemyStatus,
  lastHeartRateStatus,
  lastPressureStatus,
} = fetchData();

const { getLastHeight, getLastWeight, calculateBMI } = fetchMassData();
</script>

<style scoped>
.size {
  width: 200px;
  height: 200px;
}
</style>
