import { supabase } from "@/lib/supabase";
import { ref } from "vue";

export function useAddData() {
  const initialState = {
    glicemy: undefined,
    heart_beat: undefined,
    systole: undefined,
    diastole: undefined,
    created_at: new Date(),
  };

  const state = ref(initialState);

  const addData = async () => {
    const { error } = await supabase.from("monitoring").upsert(state.value);
    if (error) throw new Error(error.message);
  };

  return { addData, state };
}
