<template>
  <AsideBar />
  <div class="ml-[300px]">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import AsideBar from "@/components/AsideBar.vue";
</script>
