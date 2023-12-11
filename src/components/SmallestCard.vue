<template>
  <section class="bg-white rounded-lg max-w-[144px]">
    <div class="flex flex-col justify-center items-center py-6 px-8">
      <p>{{ props.name }}</p>
      <div class="flex">
        <p>{{ props.value }}</p>
        <v-icon :class="getColoredIcon">{{ icon }}</v-icon>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  name: String,
  value: Number,
  icon: String,
  getColoredIcon: String,
});
</script>
