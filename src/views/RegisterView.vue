<template>
  <div class="d-flex align-center justify-center" style="height: 100vh">
    <v-sheet width="400" class="mx-auto">
      <v-form fast-fail @submit.prevent="signUp">
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

        <v-btn @click="signUp" type="submit" color="primary" block class="mt-2"
          >Cadastre-se</v-btn
        >
      </v-form>
      <div class="mt-2">
        <p class="text-body-2">
          Já tem uma conta?
          <router-link to="/login">
            <a href="#">Faça o seu acesso</a></router-link
          >
        </p>
      </div>
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/users";
import { supabase } from "@/lib/supabase";

const { state } = useUserStore();

async function signUp() {
  const { data, error } = await supabase.auth.signUp({
    email: state.email,
    password: state.password,
  });
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
}
</script>
