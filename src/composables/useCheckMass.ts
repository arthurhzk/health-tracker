import { supabase } from "@/lib/supabase";
import { ref, computed } from "vue";
export function fetchMassData() {
  const massMonitoring = ref<null | any[]>(null);
  const initialState = {
    height: undefined,
    weight: undefined,
  };

  const state = ref(initialState);

  async function getMassData() {
    const { data } = await supabase.from("mass_monitoring").select();
    massMonitoring.value = data;
  }
  async function addMassData() {
    const { error } = await supabase
      .from("mass_monitoring")
      .upsert(state.value);

    if (error) throw new Error(error.message);
  }

  const getLastWeight = computed(() => {
    if (massMonitoring.value && massMonitoring.value.length > 0) {
      return massMonitoring.value[massMonitoring.value.length - 1].weight;
    }
    return null;
  });

  const getLastHeight = computed(() => {
    if (massMonitoring.value && massMonitoring.value.length > 0) {
      return massMonitoring.value[massMonitoring.value.length - 1].height;
    }
    return null;
  });

  const calculateBMI = computed(() => {
    if (getLastWeight.value && getLastHeight.value) {
      const heightInMeters = getLastHeight.value / 100;
      const getValue = getLastWeight.value / (heightInMeters * heightInMeters);
      const stringValue = getValue.toFixed(2);
      const bmi = parseFloat(stringValue);
      return bmi;
    }
    return null;
  });
  getMassData();

  return {
    massMonitoring,
    getMassData,
    addMassData,
    state,
    getLastHeight,
    getLastWeight,
    calculateBMI,
  };
}
