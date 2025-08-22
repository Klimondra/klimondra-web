<script setup>
const props = defineProps({
  innerClass: {
    type: String,
    default: ''
  },
  outerClass: {
    type: String,
    default: ''
  },
  innerProps: {
    type: Object,
    default: () => ({})
  },
  outerProps: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <section
      :class="'w-full min-h-dvh px-4 sm:px-8 ' + props.outerClass"
      v-bind="props.outerProps"
  >
    <div
        :class="'w-full max-w-7xl mx-auto h-full ' + props.innerClass"
        v-bind="props.innerProps"
    >
      <slot/>
    </div>
  </section>
</template>