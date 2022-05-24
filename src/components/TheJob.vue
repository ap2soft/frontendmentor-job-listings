<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IsJob } from "../interfaces";
import NewBadge from "./NewBadge.vue";
import FeaturedBadge from "./FeaturedBadge.vue";
import SkillSet from "./SkillSet.vue";

export default defineComponent({
  components: { NewBadge, FeaturedBadge, SkillSet },
  props: {
    job: {
      type: Object as PropType<IsJob>,
      required: true,
    },
  },
  emits: {
    filtered: (filter: string) => true,
  },
});
</script>

<template>
  <figure
    class="relative rounded-md border-l-[6px] bg-white px-6 pt-12 pb-6 shadow-md shadow-cyan-dark/30"
    :class="job.featured ? 'border-l-cyan-dark' : 'border-l-transparent'"
  >
    <img
      :src="job.logo"
      :alt="`${job.company} Logo`"
      class="absolute -top-6 h-14 w-14"
    />
    <figcaption>
      <div class="flex items-center gap-6">
        <h3 class="font-bold text-cyan-dark">{{ job.company }}</h3>
        <div class="flex gap-2">
          <NewBadge :show="job.new" />
          <FeaturedBadge :show="job.featured" />
        </div>
      </div>
    </figcaption>
    <h4 class="mt-4 font-bold text-cyan-darkest">{{ job.position }}</h4>
    <div class="mt-4 flex gap-2 text-gray">
      <span>{{ job.postedAt }}</span>
      &middot;
      <span>{{ job.contract }}</span>
      &middot;
      <span>{{ job.location }}</span>
    </div>
    <hr class="mt-4 border-gray" />
    <SkillSet class="mt-4" :job="job" @filtered="$emit('filtered', $event)" />
  </figure>
</template>
