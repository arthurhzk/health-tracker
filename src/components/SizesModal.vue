<template>
  <v-row>
    <v-dialog v-model="dialog" persistent width="1024">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props"> Calcular Medidas </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Calcular medida corporal</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Digite a medidas do seu peito (in)"
                  type="number"
                  v-model="state.chest"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Digite as medidas da sua cintura (in)"
                  type="number"
                  v-model="state.waist"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Digite as medidas do seu quadril (in)"
                  type="number"
                  v-model="state.hips"
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
          <v-btn color="blue-darken-1" variant="text" @click="handleAddData">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { fetchSizeData } from "@/composables/useBodySize";
const dialog = ref(false);

const { state, addSizeData } = fetchSizeData();

const handleAddData = () => {
  addSizeData();

  dialog.value = false;
};
</script>
