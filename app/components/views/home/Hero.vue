<script setup>
import Typewriter from "~/components/ui/animations/Typewriter.vue";
import ClassicSection from "~/components/layouts/ClassicSection.vue";
import PrimaryActionButton from "~/components/ui/buttons/PrimaryActionButton.vue";
import { motion } from "motion-v"
</script>

<template>
  <ClassicSection
      outer-class="relative"
      inner-class="min-h-dvh flex flex-col justify-center items-start"
  >
    <motion.div
        class="absolute top-0 left-0 right-0 w-full h-96 bg-gradient-to-b dark:from-iris-400/20 from-iris-500/20 to-transparent transition-all duration-200"
        :initial="{
          opacity: 0
        }"
        :animate="{
          opacity: 1
        }"
        :transition="{
          duration: 1.5,
          delay: 0.5,
        }"
    />

    <div class="flex flex-col gap-8">
      <div class="flex flex-col gap-1">
        <h2 class="font-main text-2xl sm:text-4xl font-medium text-black dark:text-slate-200 transition-all duration-200">
          {{ $t("pages.home.hero.hiIam") }}</h2>
        <h1 class="font-main text-6xl sm:text-8xl font-bold text-black dark:text-white -translate-x-1.25 transition-all duration-200">
          Klimondra</h1>
        <Typewriter
            :string-array='[
          $t("pages.home.hero.typewriter.1"),
          $t("pages.home.hero.typewriter.2"),
          $t("pages.home.hero.typewriter.3"),
          $t("pages.home.hero.typewriter.4")
        ]'
        />
      </div>

      <div class="flex flex-row gap-2">
        <PrimaryActionButton :text="$t('pages.home.hero.learnMore')"/>
      </div>
    </div>
  </ClassicSection>
</template>