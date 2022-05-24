<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IsFilter, IsFilterData, IsJob } from "../interfaces";
import Skill from "./Skill.vue";

export default defineComponent({
  components: { Skill },
  props: {
    job: {
      type: Object as PropType<IsJob>,
      required: true,
    },
  },
  emits: {
    filtered: (filterData: IsFilterData) => true,
  },
  methods: {
    handleFiltered(type: IsFilter, value: string): void {
      this.$emit("filtered", { type, value });
    },
  },
});
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <Skill :name="job.role" @filtered="handleFiltered('roles', job.role)" />
    <Skill :name="job.level" @filtered="handleFiltered('levels', job.level)" />
    <Skill
      v-for="language in job.languages"
      :key="language"
      :name="language"
      @filtered="handleFiltered('languages', language)"
    />
    <Skill
      v-for="tool in job.tools"
      :key="tool"
      :name="tool"
      @filtered="handleFiltered('tools', tool)"
    />
  </div>
</template>
