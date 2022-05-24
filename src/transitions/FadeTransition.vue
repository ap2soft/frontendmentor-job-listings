<template>
  <TransitionGroup
    enter-active-class="transition"
    enter-from-class="opacity-0"
    leave-active-class="transition"
    leave-to-class="opacity-0"
  >
    <slot />
  </TransitionGroup>
</template>
