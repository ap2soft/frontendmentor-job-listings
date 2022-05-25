<script lang="ts">
import { computed, ComputedRef, defineComponent, reactive } from "vue";
import { getList } from "../data/jobManager";
import {
  IsJobList,
  IsFilters,
  IsFilterData,
  IsFilter,
  IsJob,
} from "../interfaces";
import TheFilters from "./TheFilters.vue";
import TheJob from "./TheJob.vue";
import SlideLeftTransition from "../transitions/SlideLeftTransition.vue";

const filterByProp = (prop: string, filters: string[]): boolean =>
  filters.length ? filters.includes(prop) : true;
const filterByArrayProp = (prop: string[], filters: string[]): boolean =>
  filters.length ? filters.some((filter) => prop.includes(filter)) : true;

export default defineComponent({
  components: { TheJob, TheFilters, SlideLeftTransition },

  async setup() {
    const jobList: IsJobList = await getList();

    const filters: IsFilters = reactive({
      roles: [],
      levels: [],
      languages: [],
      tools: [],
    });

    const filtersAreEmpty = computed(() =>
      Object.values(filters).every((filter) => !filter.length)
    );

    // prettier-ignore
    const filteredJobList: ComputedRef<IsJobList> = computed(() =>
      jobList
        .filter(({ role }: IsJob) => filterByProp(role, filters.roles))
        .filter(({ level }: IsJob) => filterByProp(level, filters.levels))
        .filter(({ languages }: IsJob) => filterByArrayProp(languages, filters.languages))
        .filter(({ tools }: IsJob) => filterByArrayProp(tools, filters.tools))
    );

    const handleAddFilter = (filterData: IsFilterData): void => {
      if (!filters[filterData.type].includes(filterData.value)) {
        filters[filterData.type].push(filterData.value);
      }
    };

    const handleRemoveFilter = (filterData: IsFilterData): void => {
      filters[filterData.type] = filters[filterData.type].filter(
        (theFilter) => theFilter !== filterData.value
      );
    };

    const handleClearFilters = (): void => {
      filters.roles.splice(0);
      filters.levels.splice(0);
      filters.languages.splice(0);
      filters.tools.splice(0);
    };

    return {
      jobList,
      filters,
      filtersAreEmpty,
      filteredJobList,
      handleAddFilter,
      handleRemoveFilter,
      handleClearFilters,
    };
  },
});
</script>

<template>
  <div class="grid gap-10">
    <TheFilters
      v-if="!filtersAreEmpty"
      :filters="filters"
      @clear="handleClearFilters"
      @remove="handleRemoveFilter"
      class="-mt-24 h-min"
    />
    <div class="grid gap-10">
      <SlideLeftTransition>
        <TheJob
          v-for="job in filteredJobList"
          :key="job.id"
          :job="job"
          @filtered="handleAddFilter"
        />
      </SlideLeftTransition>
    </div>
  </div>
</template>
