<script lang="ts">
import { computed, ComputedRef, defineComponent, reactive } from "vue";
import { getList } from "../data/jobManager";
import {
  IsJobList,
  IsFilters,
  FilterDataInterface,
  IsFilter,
  IsJob,
} from "../interfaces";
import TheFilters from "./TheFilters.vue";
import TheJob from "./TheJob.vue";
import SlideLeftTransition from "../transitions/SlideLeftTransition.vue";

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

    const byRole = ({ role }: IsJob): boolean =>
      !filters.roles.length || filters.roles.includes(role);
    const byLevel = ({ level }: IsJob): boolean =>
      !filters.levels.length || filters.levels.includes(level);
    const byLanguages = ({ languages }: IsJob): boolean =>
      !filters.languages.length ||
      languages.some((theLanguage) => filters.languages.includes(theLanguage));
    const byTools = ({ tools }: IsJob): boolean =>
      !filters.tools.length ||
      tools.some((theTool) => filters.tools.includes(theTool));

    const filteredJobList: ComputedRef<IsJobList> = computed(() =>
      jobList.filter(byRole).filter(byLevel).filter(byLanguages).filter(byTools)
    );

    const handleAddFilter = (filterData: FilterDataInterface): void => {
      if (!filters[filterData.type].includes(filterData.value)) {
        filters[filterData.type].push(filterData.value);
      }
    };

    const handleRemoveFilter = (filterData: FilterDataInterface): void => {
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
