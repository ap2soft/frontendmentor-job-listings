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
    filtered: () => true,
  },
});
</script>

<template>
  <button
    class="rounded bg-cyan px-2 py-1 font-bold text-cyan-dark hover:bg-cyan-dark hover:text-white"
    @click="$emit('filtered')"
  >
    {{ name }}
  </button>
</template>
