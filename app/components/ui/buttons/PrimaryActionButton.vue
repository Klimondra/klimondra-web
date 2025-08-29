<script setup>
import SlidingIcon from "~/components/ui/animations/SlidingIcon.vue";
import MaterialRippleEffect from "~/components/ui/animations/MaterialRippleEffect.vue";

const props = defineProps({
  text: {
    type: String,
    default: 'Click Me!'
  }
})

const emit = defineEmits(['click'])

const hover = ref(false)
const rippleEffect = useTemplateRef('ripple')

const handleClick = (e) => {
  rippleEffect.value.createRipple(e)
  emit('click')
}
</script>

<template>
  <button
      class="flex flex-row items-center gap-1 px-4 py-2 relative overflow-hidden
        bg-iris-500 rounded-2xl shadow-sm border-1 border-iris-500 cursor-pointer
        hover:border-iris-600 hover:shadow-md
          active:scale-98 active:border-iris-700 transition-all duration-200"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
      @click="handleClick"
  >
    <MaterialRippleEffect ref="ripple"/>
    <span class="text-white text-xl font-main font-light">{{ props.text }}</span>
    <SlidingIcon icon="material-symbols:chevron-right" icon-class="text-white text-2xl" :hover-model="hover"/>
  </button>
</template>
