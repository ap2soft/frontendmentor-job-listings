<template>
  <TransitionGroup
    enter-active-class="transition"
    enter-from-class="opacity-0 -translate-x-1/2"
    leave-active-class="transition"
    leave-to-class="opacity-0 -translate-x-1/2"
  >
    <slot />
  </TransitionGroup>
</template>
