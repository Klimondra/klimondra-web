<script setup>
import {technologies} from "~/data/technologies";

const props = defineProps({
  title: {
    type: String,
    default: 'Project Title'
  },
  subtitle: {
    type: String,
    default: 'Project Subtitle'
  },
  description: {
    type: String,
    default: 'Project Description'
  },
  image: {
    type: String,
    default: ''
  },
  imageBackgroundClass: {
    type: String,
    default: 'bg-gradient-to-b from-iris-700/50 to-iris-500/90'
  },
  usedTechnologies: {
    type: Array,
    default: () => []
  },
  links: {
    type: Array,
    default: () => ([])
  }
})
</script>

<template>
  <article
      class="w-full min-h-114 flex flex-col lg:flex-row gap-8"
  >
    <div class="flex-1 p-2 border-2 border-black/10 dark:border-white/10 rounded-2xl flex">
      <div :class="`flex-1 max-lg:min-h-100 rounded-lg relative overflow-hidden ${props.imageBackgroundClass}`">
        <NuxtImg
            :src="props.image"
            :alt="`Image of project ${props.title}`"
            class="absolute w-4/5 rounded-lg left-1/2 -translate-x-1/2 bottom-0 translate-y-4 -rotate-4 hover:translate-y-0 hover:rotate-0 transition-all duration-200"
        />
      </div>
    </div>
    <div class="flex-1 p-2 flex flex-col justify-between items-start gap-4 ">
      <div class="flex flex-col gap-3 items-start justify-start">
        <h4 class="text-black dark:text-white font-main font-semibold text-4xl transition-all duration-200">
          {{ props.title }}</h4>
        <p class="text-neutral-600 dark:text-neutral-400 font-main font-medium text-xl transition-all duration-200">
          {{ props.subtitle }}</p>
        <div class="flex items-center gap-4 flex-wrap">
          <span
              v-for="(item, index) in props.usedTechnologies"
              :key="index"
              class="flex items-center gap-2 py-1 px-1.5 rounded-2xl bg-black/10 dark:bg-white/10 font-main text-black dark:text-white transition-all duration-200"
          >
            <Icon :name="technologies.find(tech => tech.name === item)?.icon || ''" class="inline text-xl"/>
            {{ item }}
          </span>
        </div>
        <p class="text-neutral-500 font-main font-light">{{ props.description }}</p>
      </div>
      <div class="flex items-center gap-2">
        <span
            v-for="(link, index) in props.links"
            :key="index"
            class="flex items-center gap-2 text-black dark:text-white font-main font-medium text-lg transition-all duration-200"
        >
          <span v-if="index !== 0">|</span>
          <a :href="link.url" class="underline-offset-2 hover:underline flex gap-1 items-center">{{link.label}} <Icon name="material-symbols:open-in-new" class="text-xl "/></a>
        </span>
      </div>
    </div>
  </article>
</template>
