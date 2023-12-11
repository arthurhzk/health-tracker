import { supabase } from "@/lib/supabase";
import { ref, computed } from "vue";
export function fetchSizeData() {
  const sizeMonitoring = ref<null | any[]>(null);
  const initialState = {
    chest: undefined,
    waist: undefined,
    hips: undefined,
  };

  const state = ref(initialState);

  async function getSizeData() {
    const { data } = await supabase.from("size_monitoring").select();
    sizeMonitoring.value = data;
  }
  async function addSizeData() {
    const { error } = await supabase
      .from("size_monitoring")
      .upsert(state.value);

    if (error) throw new Error(error.message);
  }

  const getLastChest = computed(() => {
    if (sizeMonitoring.value && sizeMonitoring.value.length > 0) {
      return sizeMonitoring.value[sizeMonitoring.value.length - 1].chest;
    }
    return null;
  });

  const getLastWaist = computed(() => {
    if (sizeMonitoring.value && sizeMonitoring.value.length > 0) {
      return sizeMonitoring.value[sizeMonitoring.value.length - 1].waist;
    }
    return null;
  });

  const getLastHips = computed(() => {
    if (sizeMonitoring.value && sizeMonitoring.value.length > 0) {
      return sizeMonitoring.value[sizeMonitoring.value.length - 1].hips;
    }
    return null;
  });

  const getTrendingIconWaist = computed(() => {
    if (sizeMonitoring.value && sizeMonitoring.value.length > 1) {
      const lastValue =
        sizeMonitoring.value[sizeMonitoring.value.length - 1].waist;
      const secondLastValue =
        sizeMonitoring.value[sizeMonitoring.value.length - 2].waist;

      if (lastValue > secondLastValue) {
        return "mdi-trending-up";
      } else if (lastValue < secondLastValue) {
        return "mdi-trending-down";
      }
    }
    return "mdi-trending-neutral";
  });
  const getTrendingIconChest = computed(() => {
    if (sizeMonitoring.value && sizeMonitoring.value.length > 1) {
      const lastValue =
        sizeMonitoring.value[sizeMonitoring.value.length - 1].chest;
      const secondLastValue =
        sizeMonitoring.value[sizeMonitoring.value.length - 2].chest;

      if (lastValue > secondLastValue) {
        return "mdi-trending-up";
      } else if (lastValue < secondLastValue) {
        return "mdi-trending-down";
      }
    }
    return "mdi-trending-neutral";
  });

  const getTrendingIconHips = computed(() => {
    if (sizeMonitoring.value && sizeMonitoring.value.length > 1) {
      const lastValue =
        sizeMonitoring.value[sizeMonitoring.value.length - 1].hips;
      const secondLastValue =
        sizeMonitoring.value[sizeMonitoring.value.length - 2].hips;

      if (lastValue > secondLastValue) {
        return "mdi-trending-up";
      } else if (lastValue < secondLastValue) {
        return "mdi-trending-down";
      }
    }
    return "mdi-trending-neutral";
  });

  const getTrendingIconWaistColor = computed(() => {
    if (sizeMonitoring.value && sizeMonitoring.value.length > 1) {
      const lastValue =
        sizeMonitoring.value[sizeMonitoring.value.length - 1].waist;
      const secondLastValue =
        sizeMonitoring.value[sizeMonitoring.value.length - 2].waist;

      if (lastValue > secondLastValue) {
        return "text-green-500";
      } else if (lastValue < secondLastValue) {
        return "text-red-500";
      }
    }
    return "text-gray-500";
  });
  const getTrendingIconChestColor = computed(() => {
    if (sizeMonitoring.value && sizeMonitoring.value.length > 1) {
      const lastValue =
        sizeMonitoring.value[sizeMonitoring.value.length - 1].chest;
      const secondLastValue =
        sizeMonitoring.value[sizeMonitoring.value.length - 2].chest;

      if (lastValue > secondLastValue) {
        return "text-green-500";
      } else if (lastValue < secondLastValue) {
        return "text-red-500";
      }
    }
    return "text-gray-500";
  });

  const getTrendingIconHipsColor = computed(() => {
    if (sizeMonitoring.value && sizeMonitoring.value.length > 1) {
      const lastValue =
        sizeMonitoring.value[sizeMonitoring.value.length - 1].hips;
      const secondLastValue =
        sizeMonitoring.value[sizeMonitoring.value.length - 2].hips;

      if (lastValue > secondLastValue) {
        return "text-green-500";
      } else if (lastValue < secondLastValue) {
        return "text-red-500";
      }
    }
    return "text-gray-500";
  });

  getSizeData();

  return {
    addSizeData,
    getLastChest,
    getLastWaist,
    getLastHips,
    state,
    getTrendingIconWaist,
    getTrendingIconHips,
    getTrendingIconChest,
    getTrendingIconWaistColor,
    getTrendingIconChestColor,
    getTrendingIconHipsColor,
  };
}
