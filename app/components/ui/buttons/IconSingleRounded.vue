<script setup>
import MaterialRippleEffect from "~/components/ui/animations/MaterialRippleEffect.vue";

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  buttonClass: {
    type: String,
    default: '',
  }
})

const rippleEffect = useTemplateRef('ripple')
const emit = defineEmits(['click'])

const handleClick = (e) => {
  rippleEffect.value.createRipple(e)
  emit('click')
}
</script>

<template>
  <button
      :class='"flex items-center justify-center w-10 h-10 rounded-full relative overflow-hidden"
      + props.buttonClass'
      @click="handleClick"
  >
    <MaterialRippleEffect
        ref="ripple"
        ripple-class="bg-black/10! dark:bg-white/10!"
    />
    <Icon :name="props.icon" class="text-2xl text-black dark:text-slate-50 transition-all duration-200" />
  </button>
</template>