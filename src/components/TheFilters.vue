<script lang="ts">
import { defineComponent, PropType } from "vue";
import TheFilter from "./TheFilter.vue";
import FadeTransition from "../transitions/FadeTransition.vue";
import { IsFilters, FilterDataInterface, IsFilter } from "../interfaces";

export default defineComponent({
  components: { TheFilter, FadeTransition },
  props: {
    filters: {
      type: Object as PropType<IsFilters>,
      required: true,
    },
  },
  emits: {
    clear: () => true,
    remove: (filter: FilterDataInterface) => true,
  },
  setup(props, { emit }) {
    const handleRemove = (type: IsFilter, value: string) =>
      emit("remove", { type, value });

    return { handleRemove };
  },
});
</script>

<template>
  <div class="rounded-md bg-white p-6 shadow-md shadow-cyan-dark/30">
    <div class="flex items-center justify-between gap-2">
      <div class="flex flex-grow flex-wrap gap-4">
        <FadeTransition>
          <TheFilter
            v-for="filter in filters.roles"
            :key="filter"
            :name="filter"
            @remove="handleRemove('roles', filter)"
          />
          <TheFilter
            v-for="filter in filters.levels"
            :key="filter"
            :name="filter"
            @remove="handleRemove('levels', filter)"
          />
          <TheFilter
            v-for="filter in filters.languages"
            :key="filter"
            :name="filter"
            @remove="handleRemove('languages', filter)"
          />
          <TheFilter
            v-for="filter in filters.tools"
            :key="filter"
            :name="filter"
            @remove="handleRemove('tools', filter)"
          />
        </FadeTransition>
      </div>
      <div>
        <button
          class="border-y border-y-transparent font-bold text-gray transition hover:border-b-cyan-dark hover:text-cyan-dark"
          @click="$emit('clear')"
        >
          Clear
        </button>
      </div>
    </div>
  </div>
</template>
