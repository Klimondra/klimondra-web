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
  },
  id: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <section
      v-bind="props.outerProps"
      :id="props.id"
      :class="'w-full min-h-dvh px-4 sm:px-8 xl:px-22 transition-all duration-200 ' + props.outerClass"
  >
    <div
        :class="'w-full max-w-7xl mx-auto h-full transition-all duration-200 ' + props.innerClass"
        v-bind="props.innerProps"
    >
      <slot/>
    </div>
  </section>
</template>