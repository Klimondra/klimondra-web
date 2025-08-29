<script setup>
import SectionShadowHeading from "~/components/ui/headings/SectionShadowHeading.vue";
import ClassicSection from "~/components/layouts/ClassicSection.vue";
import {technologies} from "~/data/technologies.js";
</script>

<template>
  <ClassicSection
      outer-class="min-h-0!"
      inner-class="flex flex-col gap-12 pb-24 overflow-x-hidden"
  >
    <SectionShadowHeading :text="$t('pages.home.technologies.title')"/>
    <div class="w-full h-full flex flex-col items-center justify-center">
      <article class="w-full max-w-4xl flex flex-row items-center justify-center flex-wrap gap-4">
          <span
              v-for="tech in technologies"
              :key="tech.name"
              class="p-2 flex flex-row items-center gap-3
                bg-slate-100/70 dark:bg-white/5 backdrop-blur-xl rounded-lg
                border-1 border-iris-600/15 dark:border-iris-500/5
                shadow-sm dark:shadow-white/5
              text-slate-700 dark:text-white font-main text-xl
                transition-all duration-200 hover:shadow-lg hover:scale-102"
          >
            <Icon :name="tech.icon" :style="{color: tech.color}" class="text-3xl"/>
            <span>{{ tech.name }}</span>
        </span>
      </article>
    </div>
  </ClassicSection>
</template>