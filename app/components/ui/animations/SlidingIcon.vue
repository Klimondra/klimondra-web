<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  spanClass: {
    type: String,
    default: ''
  },
  iconClass: {
    type: String,
    default: ''
  },
  hoverModel: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <span :class="'relative w-6 h-6 flex items-center justify-center overflow-hidden' + props.spanClass">
    <Icon :name="icon" :class="`absolute transition-all duration-200 ${hoverModel ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'} ${props.iconClass}`" />
    <Icon :name="icon" :class="`absolute transition-all duration-200 ${hoverModel ? 'opacity-0 translate-x-full' : 'opacity-100 translate-x-0'} ${props.iconClass}`"/>
  </span>
</template>
