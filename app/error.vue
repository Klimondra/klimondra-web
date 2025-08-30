<script setup>
import Default from "~/layouts/default.vue";
import PrimaryActionButton from "~/components/ui/buttons/PrimaryActionButton.vue";

const props = defineProps({
  error: {
    type: Object,
    required: true
  }
})

useHead({
  title: `Klimondra | Error ${props.error?.statusCode || ''}`,
})
const isNotFound = props.error?.statusCode === 404
</script>

<template>
  <default>
    <section
        v-if="isNotFound"
        class="w-full min-h-screen flex flex-col items-center justify-center gap-6"
    >
      <h1 class="text-5xl sm:text-6xl font-main font-bold text-center text-black dark:text-white transition-all duration-200">
        {{ $t("pages.error.notFound.title")}}
      </h1>
      <h2 class="text-3xl sm:text-4xl font-main font-medium text-center text-black dark:text-white transition-all duration-200">
        {{ $t("pages.error.notFound.subtitle")}}
      </h2>
      <NuxtLink href="/">
        <PrimaryActionButton :text="$t('pages.error.notFound.backHome')"/>
      </NuxtLink>
    </section>
    <section
        v-else
        class="w-full min-h-screen flex flex-col items-center justify-center gap-6"
    >
      <h1 class="text-5xl sm:text-6xl font-main font-bold text-center text-black dark:text-white transition-all duration-200">
        {{ props.error?.statusCode }}
      </h1>
      <h2 class="text-3xl sm:text-4xl font-main font-medium text-center text-black dark:text-white transition-all duration-200">
        {{ props.error?.message }}
      </h2>
      <NuxtLink href="/">
        <PrimaryActionButton :text="$t('pages.error.notFound.backHome')"/>
      </NuxtLink>
    </section>
  </default>
</template>