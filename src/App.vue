<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "./components/TheHeader.vue";
import JobList from "./components/JobList.vue";

export default defineComponent({
  components: { TheHeader, JobList },
});
</script>

<template>
  <TheHeader />
  <main class="mx-auto max-w-7xl px-6 py-16">
    <Suspense>
      <JobList />
    </Suspense>
  </main>
</template>
