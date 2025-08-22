<script setup>

</script>

<template>
  <Transition name="slidein">
    <slot/>
  </Transition>
</template>

<style scoped>
.slidein-enter-active,
.slidein-leave-active {
  transition: all 0.25s ease;
}

.slidein-enter-from,
.slidein-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>