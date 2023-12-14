<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        permanent
      >
        <v-list nav>
          <v-list-item
            prepend-icon="mdi-email"
            title="Inbox"
            value="inbox"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account-supervisor-circle"
            title="Supervisors"
            value="supervisors"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-clock-start"
            title="Clock-in"
            value="clockin"
          ></v-list-item>
          <v-btn @click="signOut">Sair</v-btn>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>

<script lang="ts" setup>
import { useUserStore } from "@/stores/users";
import { useRouter } from "vue-router";

const store = useUserStore();

const router = useRouter();

const signOut = () => {
  store.signOutUser();
  router.push("/login");
};
</script>
