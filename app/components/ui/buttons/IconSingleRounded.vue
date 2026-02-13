<script setup lang="ts">
import MaterialRippleEffect from "~/components/ui/animations/MaterialRippleEffect.vue";

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  buttonClass: {
    type: String,
    default: '',
  },
  ariaLabel: {
    type: String,
    default: 'Icon button',
  }
})

const rippleEffect = useTemplateRef('ripple')
const emit = defineEmits(['click'])

const handleClick = (e: MouseEvent) => {
  rippleEffect.value?.createRipple(e)
  emit('click')
}
</script>

<template>
  <button
      :class='"flex cursor-pointer items-center justify-center w-10 h-10 rounded-full relative overflow-hidden hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200"
      + props.buttonClass'
      :aria-label="props.ariaLabel"
      @click="handleClick"
  >
    <MaterialRippleEffect
        ref="ripple"
        ripple-class="bg-black/10! dark:bg-white/10!"
    />
    <Icon :name="props.icon" class="text-2xl text-black dark:text-slate-50 transition-all duration-200" />
  </button>
</template>