import { ref } from "vue";
import { defineStore } from "pinia";
import { supabase } from "@/lib/supabase";
export const useUserStore = defineStore("user", () => {
  const isLoggedIn = ref<boolean>(false);

  const initialState = {
    email: "",
    password: "",
  };

  const state = ref(initialState);

  const signOutUser = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      console.log("User signed out successfully");
    } else {
      console.log("Error signing out user");
    }
  };

  return { state, isLoggedIn, signOutUser };
});
