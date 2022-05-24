<script setup lang="ts">
const { show } = defineProps<{ show: boolean }>();
</script>

<template>
  <span
    v-if="show"
    class="h-7 rounded-full bg-cyan-darkest px-2 uppercase leading-loose text-white"
  >
    Featured
  </span>
</template>
