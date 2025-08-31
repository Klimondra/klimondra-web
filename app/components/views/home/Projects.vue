<script setup>
import ClassicSection from "~/components/layouts/ClassicSection.vue";
import SectionShadowHeading from "~/components/ui/headings/SectionShadowHeading.vue";
import HomeProjectArticle from "~/components/composites/special/HomeProjectArticle.vue";
</script>

<template>
  <ClassicSection
      id="projects"
      inner-class="flex flex-col gap-12 pb-12 "
  >
    <SectionShadowHeading :text="$t('pages.home.projects.title')"/>
    <div class="w-full flex flex-col gap-24">
      <HomeProjectArticle
          title="Chat App"
          :subtitle="$t('pages.home.projects.projects.chatapp.subtitle')"
          :description="$t('pages.home.projects.projects.chatapp.description')"
          :used-technologies="['Next.js', 'React', 'Tailwind', 'Go', 'Git', 'GitHub']"
          image="/images/chat-app-screenshot.webp"
          image-background-class="bg-gradient-to-b from-emerald-700/50 to-emerald-500/90"
          :links="[
              { label: 'Demo', url: 'https://chatapp.klimondra.eu'},
          ]"
      />
    </div>
  </ClassicSection>
</template>
