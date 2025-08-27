<script setup>
import QuickLinks from "~/components/composites/QuickLinks.vue";
import Hero from "~/components/views/home/Hero.vue";
import AboutMe from "~/components/views/home/AboutMe.vue";

definePageMeta({
  title: "Klimondra",
})
</script>

<template>
  <QuickLinks/>
  <Hero />
  <AboutMe/>
</template>