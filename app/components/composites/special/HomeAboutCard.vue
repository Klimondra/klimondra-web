<script setup>
const props = defineProps({
  icon: {
    type: String,
    default: '',
  },
  heading: {
    type: String,
    default: 'Some Heading',
  }
})
</script>

<template>
  <article
      class="flex-1 flex flex-col text-center gap-6 p-4
      bg-iris-600/12 dark:bg-iris-200/5 rounded-2xl border-2 border-iris-600/12 dark:border-iris-200/5 hover:border-iris-600/30 hover:dark:border-iris-400/20
        transition-all duration-200"
  >
    <div class="flex flex-row justify-between items-center">
      <span class="w-14 bg-iris-500/35 dark:bg-iris-500/20 h-14 rounded-2xl flex items-center justify-center">
        <Icon :name="props.icon" class="text-iris-500 dark:text-iris-400 text-3xl"/>
      </span>
      <h5 class="font-main text-iris-500 dark:text-iris-400 text-lg mr-2">{{heading}}</h5>
    </div>
    <slot/>
  </article>
</template>
