<script setup>
import SlideInTransition from "~/components/ui/transitions/SlideInTransition.vue";

const props = defineProps({
  class: {
    type: String,
    default: ''
  }
})

const visible = ref(false)

const toggle = () => {
  visible.value = !visible.value
}

const close = () => {
  visible.value = false
}

defineExpose({
  toggle,
  close
})

</script>
<template>
  <SlideInTransition>
    <article
        v-if="visible"
        :class='`absolute top-7/5 -right-4 p-2
        bg-white/10 backdrop-blur-xl rounded-2xl border-1 border-slate-950/5 shadow-sm/5
        dark:shadow-white dark:border-white/5 transition-all duration-200` + props.class'
    >
      <slot/>
    </article>
  </SlideInTransition>
</template>
