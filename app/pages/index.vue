<script setup>
import QuickLinks from "~/components/composites/QuickLinks.vue";
import Hero from "~/components/views/home/Hero.vue";
import AboutMe from "~/components/views/home/AboutMe.vue";
import Technologies from "~/components/views/home/Technologies.vue";
import Projects from "~/components/views/home/Projects.vue";
import Contact from "~/components/views/home/Contact.vue";

useHead({
  title: `Klimondra | ${$t("pages.home.meta.title")}`,
  meta: [
    { name: 'description', content: $t("pages.home.meta.description") }
  ],
})
</script>

<template>
  <QuickLinks/>
  <Hero />
  <AboutMe/>
  <Technologies />
  <Projects />
  <Contact />
</template>