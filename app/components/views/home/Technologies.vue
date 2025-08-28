<script setup>
import SectionShadowHeading from "~/components/ui/headings/SectionShadowHeading.vue";
import ClassicSection from "~/components/layouts/ClassicSection.vue";

const technologies = [
  {
    name: "HTML",
    icon: "flowbite:html-solid",
    color: "#e96228",
  },
  {
    name: "CSS",
    icon: "simple-icons:css",
    color: "#633194",
  },
  {
    name: "SASS",
    icon: "akar-icons:sass-fill",
    color: "#bf4080",
  },
  {
    name: "Tailwind",
    icon: "mdi:tailwind",
    color: "#38bdf8",
  },
  {
    name: "JavaScript",
    icon: "ion:logo-javascript",
    color: "#e8d44d",
  },
  {
    name: "Vue",
    icon: "simple-icons:vuedotjs",
    color: "#41b883",
  },
  {
    name: "Nuxt",
    icon: "simple-icons:nuxt",
    color: "#00dc82",
  },
  {
    name: "React",
    icon: "mdi:react",
    color: "#3998b6",
  },
  {
    name: "Next.js",
    icon: "akar-icons:nextjs-fill",
    color: "#0072f5",
  },
  {
    name: "C#",
    icon: "mdi:language-csharp",
    color: "#953dac",
  },
  {
    name: "Go",
    icon: "simple-icons:go",
    color: "#00a7d0",
  },
  {
    name: "Git",
    icon: "mdi:git",
    color: "#de4c36",
  },
  {
    name: "GitHub",
    icon: "mdi:github",
    color: "#1c8139",
  },
]
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
                bg-slate-100/70 dark:bg-white/4 backdrop-blur-xl rounded-lg
                border-1 border-slate-300/20 dark:border-iris-500/5
                shadow-md dark:shadow-white/5
              text-slate-700 dark:text-white font-main text-xl
                transition-all duration-200 hover:shadow-lg hover:scale-105"
          >
            <Icon :name="tech.icon" :style="{color: tech.color}" class="text-3xl"/>
            <span>{{ tech.name }}</span>
        </span>
      </article>
    </div>
  </ClassicSection>
</template>