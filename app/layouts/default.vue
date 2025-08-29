<script setup>
import NavigationHeader from "~/components/composites/navigationHeader/NavigationHeader.vue";
import Footer from "~/components/composites/Footer.vue";

const theme = useThemeStore()
onMounted(() => {
  theme.initTheme()
})
</script>

<template>
  <main class="w-full min-h-dvh relative bg-slate-50 dark:bg-slate-950 transition-all duration-200">
    <NavigationHeader/>
    <slot/>
    <Footer/>
  </main>
</template>