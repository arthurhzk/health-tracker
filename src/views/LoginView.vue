<template>
  <div class="d-flex align-center justify-center" style="height: 100vh">
    <v-sheet width="400" class="mx-auto">
      <v-form fast-fail @submit.prevent="signInWithEmail">
        <v-text-field
          type="email"
          v-model="state.email"
          label="Email"
        ></v-text-field>

        <v-text-field
          type="password"
          v-model="state.password"
          label="Senha"
        ></v-text-field>
        <a href="#" class="text-body-2 font-weight-regular"
          >Esqueceu a sua senha?</a
        >

        <v-btn
          @click="signInWithEmail"
          type="submit"
          color="primary"
          block
          class="mt-2"
          >Acessar</v-btn
        >
      </v-form>
      <div class="mt-2">
        <p class="text-body-2">
          Não tem uma conta?
          <router-link to="/register"><a href="#">Cadastre-se</a></router-link>
        </p>
        <p class="text-body-2">
          Esqueceu a sua senha?
          <router-link to="/recovery"><a href="#">Acesse aqui</a></router-link>
        </p>
      </div>
    </v-sheet>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { supabase } from "@/lib/supabase";
import { useUserStore } from "@/stores/users";

const { state, isLoggedIn } = useUserStore();

const router = useRouter();

const signInWithEmail = async () => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: state.email,
      password: state.password,
    });
    if (!error) {
      router.push({ name: "Home" });
    }
  } catch (error) {
    console.error("An error occurred during sign in:", error);
  }
};
</script>
