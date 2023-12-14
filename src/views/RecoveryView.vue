<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Recuperação de senha</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="state.email"
                label="E-mail"
                required
              ></v-text-field>
              <v-spacer></v-spacer>
              <v-btn @click="resetPassword" color="primary">Enviar!</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { supabase } from "@/lib/supabase";
import { useUserStore } from "@/stores/users";

const { state } = useUserStore();

const resetPassword = async () => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(
    state.email,
    {
      redirectTo: "http://localhost:5173/password",
    }
  );
  if (!error) {
    console.log("Check your email for the password reset link");
  } else {
    console.log("mentos");
  }
};
</script>
