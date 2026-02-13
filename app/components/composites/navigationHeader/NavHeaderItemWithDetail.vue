<script setup lang="ts">
import NavHeaderDetails from "~/components/composites/navigationHeader/NavHeaderDetails.vue";

const props = defineProps({
  detailClass: {
    type: String,
    default: '',
  },
  class: {
    type: String,
    default: '',
  }
})

const reference = useTemplateRef('componentReference')
const detail = useTemplateRef('detail')

function handleClickOutside(event: MouseEvent) {
  if (reference.value && !reference.value.contains(event.target as Element)) {
    detail.value?.close()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div ref="componentReference" class="flex items-center justify-center relative" :class="props.class" >
    <span @click="detail?.toggle">
      <slot name="toggleButton"/>
    </span>
    <NavHeaderDetails ref="detail" :class='props.detailClass' >
      <slot name="detail"/>
    </NavHeaderDetails>
  </div>
</template>

<style scoped>

</style>