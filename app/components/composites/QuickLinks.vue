<script setup>
import IconLinkTooltip from "~/components/ui/buttons/IconLinkTooltip.vue";

const links = [
  {name: "GitHub", icon: "mdi:github", link: "https://github.com/Klimondra"},
  {name: "LinkedIn", icon: "mdi:linkedin", link: "https://www.linkedin.com/in/ond%C5%99ej-kl%C3%ADma/"},
  {name: "E-mail", icon: "material-symbols:mail-outline", link: "mailto:ondrej.klima@klimondra.eu"}
]
</script>

<template>
  <aside class="fixed z-10 bottom-0 right-10 flex flex-col items-center justify-center gap-2">
    <IconLinkTooltip v-for="oneLink in links" :key="oneLink" :one-link="oneLink"/>
    <div class="h-40 w-1 bg-slate-950 dark:bg-slate-50 transition-all duration-200"/>
  </aside>
</template>
