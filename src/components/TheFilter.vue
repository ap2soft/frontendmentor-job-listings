<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  emits: {
    remove: () => true,
  },
});
</script>

<template>
  <div class="flex overflow-hidden rounded">
    <span class="flex-1 bg-cyan-light px-2 py-1 font-bold text-cyan-dark">
      {{ name }}
    </span>
    <button class="bg-cyan-dark px-2 text-white hover:bg-cyan-darkest transition" @click="$emit('remove')">
      <img src="/src/assets/images/icon-remove.svg" alt="Remove" />
    </button>
  </div>
</template>
