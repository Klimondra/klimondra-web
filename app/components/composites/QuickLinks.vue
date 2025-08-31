<script setup>
import IconLinkTooltip from "~/components/ui/buttons/IconLinkTooltip.vue";
import {quicklinks} from "~/data/quicklinks.js"

// Scroll detection
const scrolled = ref(false)
const visible = ref(false)

function handleScroll() {
  scrolled.value = window.scrollY > 256
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>

<template>
  <aside
      :class="[
          'max-md:hidden fixed z-10 bottom-0 right-4 2xl:right-10 rounded-t-2xl max-2xl:px-2 max-2xl:pt-1 flex flex-col items-center justify-center gap-2 transition-all duration-200',
          scrolled ? `backdrop-blur-xl max-2xl:bg-white/10 ' ${visible ? 'max-2xl:translate-y-0' : 'max-2xl:translate-y-9/10' }` : '',
      ]"
      @mouseenter="visible = true"
      @mouseleave="visible = false"
  >
    <div
      :class="[
        'transition-all duration-200',
        scrolled ? 'max-2xl:opacity-100 opacity-0' : 'opacity-0',
      ]"
    >
      <Icon
        name="material-symbols:keyboard-arrow-up"
        :class="`text-black dark:text-white text-3xl transition-all duration-200 ${visible ? 'rotate-180' : 'rotate-0'}`"/>
    </div>
    <IconLinkTooltip v-for="oneLink in quicklinks" :key="oneLink" :one-link="oneLink"/>
    <div class="h-40 w-1 bg-slate-950 dark:bg-slate-50 transition-all duration-200"/>
  </aside>
</template>
