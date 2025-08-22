<script setup>
import SlideInTransition from "~/components/ui/transitions/SlideInTransition.vue";

const visible = ref(false)
const reference = useTemplateRef('componentReference')

const toggle = () => {
  visible.value = !visible.value
}

function handleClickOutside(event) {
  if (reference.value && !reference.value.parentElement.value.contains(event.target)) {
    visible.value = false
  }
}

defineExpose({
  toggle
})

// TODO: Udělat aby se po kliknutí mimo komponentu zavřela
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <SlideInTransition>
    <article
        v-if="visible"
        ref="componentReference"
        class="absolute top-7/5 p-2
      bg-white/10 backdrop-blur-xl rounded-2xl border-1 border-slate-950/5 shadow-sm/5
      dark:shadow-white dark:border-white/5 transition-all duration-200"
    >
      <slot/>
    </article>
  </SlideInTransition>
</template>