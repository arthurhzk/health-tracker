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

  const accessToken = ref();

  const signOutUser = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      console.log("User signed out successfully");
    } else {
      console.log("Error signing out user");
    }
  };
  const signInWithEmail = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: state.value.email,
        password: state.value.password,
      });
      accessToken.value = data.session?.access_token;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  return { state, isLoggedIn, signOutUser, signInWithEmail, accessToken };
});
