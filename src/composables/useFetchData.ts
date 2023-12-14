import { supabase } from "@/lib/supabase";
import { ref, computed } from "vue";

export function fetchData() {
  const monitoring = ref<null | any[]>(null);
  async function getData() {
    const { data } = await supabase.from("monitoring").select();
    monitoring.value = data;
  }

  const getLastGlicemyValue = computed(() => {
    if (monitoring.value) {
      return monitoring.value[monitoring.value.length - 1].glicemy;
    }
    return null;
  });

  const getLastHeartBeat = computed(() => {
    if (monitoring.value) {
      return monitoring.value[monitoring.value.length - 1].heart_beat;
    }
    return null;
  });

  const getLastSystole = computed(() => {
    if (monitoring.value) {
      return monitoring.value[monitoring.value.length - 1].systole;
    }
    return null;
  });

  const getLastDiastole = computed(() => {
    if (monitoring.value) {
      return monitoring.value[monitoring.value.length - 1].diastole;
    }
    return null;
  });
  const lastGlicemyStatus = computed(() => {
    const glicemyValue = getLastGlicemyValue.value;

    if (glicemyValue < 70) {
      return "Baixo";
    } else if (glicemyValue >= 70 && glicemyValue <= 99) {
      return "Normal";
    } else if (glicemyValue >= 100 && glicemyValue <= 125) {
      return "Elevado";
    } else {
      return "Diabetes";
    }
  });

  const lastHeartRateStatus = computed(() => {
    const heartRateValue = getLastHeartBeat.value;

    if (heartRateValue < 60) {
      return "Baixo";
    } else if (heartRateValue >= 60 && heartRateValue <= 100) {
      return "Normal";
    } else if (heartRateValue > 100 && heartRateValue <= 120) {
      return "Elevado";
    } else {
      return "Muito Elevado";
    }
  });

  const lastPressureStatus = computed(() => {
    const lastSystoleValue = getLastSystole.value;
    const lastDiastoleValue = getLastDiastole.value;

    if (lastSystoleValue < 90 && lastDiastoleValue < 60) {
      return "Baixa";
    } else if (
      lastSystoleValue >= 90 &&
      lastSystoleValue <= 120 &&
      lastDiastoleValue >= 60 &&
      lastDiastoleValue <= 80
    ) {
      return "Normal";
    } else if (
      (lastSystoleValue > 120 && lastSystoleValue <= 140) ||
      (lastDiastoleValue > 80 && lastDiastoleValue <= 90)
    ) {
      return "Elevada";
    } else {
      return "Hipertensão";
    }
  });

  const averageGlicemy = computed(() => {
    if (monitoring.value) {
      const sum = monitoring.value.reduce((acc, curr) => {
        return acc + curr.glicemy;
      }, 0);
      return sum / monitoring.value.length;
    }
    return null;
  });

  const averageHeartBeat = computed(() => {
    if (monitoring.value) {
      const sum = monitoring.value.reduce((acc, curr) => {
        return acc + curr.heart_beat;
      }, 0);
      return sum / monitoring.value.length;
    }
    return null;
  });

  const averagePressure = computed(() => {
    const systole = getLastSystole.value;
    const diastole = getLastDiastole.value;

    if (systole !== null && diastole !== null) {
      return (systole + diastole) / 2;
    }
    return null;
  });

  getData();

  return {
    monitoring,
    getData,
    getLastGlicemyValue,
    getLastHeartBeat,
    getLastSystole,
    getLastDiastole,
    lastGlicemyStatus,
    lastHeartRateStatus,
    lastPressureStatus,
    averageGlicemy,
    averageHeartBeat,
    averagePressure,
  };
}
