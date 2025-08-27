<script setup>
import { motion } from "motion-v"

defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="w-full h-64 py-8 flex justify-center items-end relative">
    <h3
        class="font-main font-bold text-black dark:text-white text-5xl sm:text-6xl transition-all duration-200"
    >
      {{ text }}
    </h3>
    <motion.p
        class="font-main font-bold text-4xl sm:text-6xl
          bg-clip-text text-transparent bg-gradient-to-br from-black/6 to-black/2 dark:from-white/8 dark:to-white/4
          absolute select-none pointer-events-none"

        :initial="{
            scale: 1.25,
            opacity: 0
        }"
        :while-in-view="{
            scale: 2,
            y: -8,
            opacity: 1,
        }"
        :transition="{
            duration: 1.5,
            delay: 0.5,
        }"
    >
      {{ text }}
    </motion.p>
  </div>
</template>
