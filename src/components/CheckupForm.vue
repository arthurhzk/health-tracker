<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="1024">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> Faça a sua monitoração! </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Monitoramento</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="state.glicemy"
                  type="number"
                  label="Glicemia"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="state.heart_beat"
                  type="number"
                  label="Batimentos cardíacos"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="state.systole"
                  type="number"
                  label="Pressão Arterial Sistólica"
                  persistent-hint
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="state.diastole"
                  type="number"
                  label="Pressão Arterial Diastólica"
                  persistent-hint
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
            Close
          </v-btn>
          <v-btn @click="handleAddData" color="blue-darken-1" variant="text">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useAddData } from "@/composables/useAddData";

const dialog = ref(false);
const { addData, state } = useAddData();

const handleAddData = () => {
  addData();
  dialog.value = false;
  console.log(addData);
  console.log(state);
};
</script>
