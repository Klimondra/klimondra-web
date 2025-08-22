<script setup>
const {oneLink} = defineProps({
  oneLink: {
    type: Object,
    required: true
  }
})

const hover = ref(false)
</script>

<template>
  <a
      :key="oneLink.name"
      :href="oneLink.link"
      class="relative flex justify-center items-center"
  >
    <Icon
        :name="oneLink.icon"
        size="56"
        class="text-black dark:text-white hover:text-iris-500 hover:dark:text-iris-400 hover:scale-105 transition-all duration-200"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
    />
    <span
        :class='`absolute top-1/2 -translate-y-1/2 -left-7/5  font-main font-medium text-lg text-black: dark:text-white
        ${hover ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"} transition-all duration-200`'
    >{{oneLink.name}}</span>
  </a>
</template>
