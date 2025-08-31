<script setup>
import ClassicSection from "~/components/layouts/ClassicSection.vue";
import SectionShadowHeading from "~/components/ui/headings/SectionShadowHeading.vue";
</script>

<template>
  <ClassicSection
      id="contact"
      outer-class="min-h-0!"
      inner-class="flex flex-col gap-12 pb-12 "
  >
    <SectionShadowHeading :text="$t('pages.home.contact.title')"/>
    <div class="w-full flex flex-col md:flex-row gap-12">
      <div class="flex-1 flex flex-col gap-8">
        <h3 class="font-main font-semibold text-4xl sm:text-5xl text-black dark:text-white transition-all duration-200">{{$t("pages.home.contact.subtitle")}}</h3>
        <p class="font-main text-xl text-neutral-700 dark:text-neutral-300 transition-all duration-200">{{$t("pages.home.contact.description")}}</p>
      </div>
      <div class="flex-1 flex flex-col gap-2">
        <a
            href="mailto:ondrej.klima@klimondra.eu"
            target="_blank"
            class="flex justify-center items-center gap-4 w-full max-w-lg mx-auto rounded-2xl p-2 bg-black/10 dark:bg-white/10 border-2 border-iris-500/10 hover:border-iris-500/25 transition-all duration-200"
        >
          <Icon name="material-symbols:mail-outline" class="text-4xl text-black dark:text-white transition-all duration-200"/>
          <span class="font-main text-2xl text-neutral-700 dark:text-neutral-300 transition-all duration-200">
            E-mail
          </span>
        </a>
        <a
            href="https://www.linkedin.com/in/ond%C5%99ej-kl%C3%ADma/"
            target="_blank"
            class="flex justify-center items-center gap-4 w-full max-w-lg mx-auto rounded-2xl p-2 bg-black/10 dark:bg-white/10 border-2 border-iris-500/10 hover:border-iris-500/25 transition-all duration-200"
        >
          <Icon name="akar-icons:linkedin-box-fill" class="text-4xl text-black dark:text-white transition-all duration-200"/>
          <span class="font-main text-2xl text-neutral-700 dark:text-neutral-300 transition-all duration-200">
            LinkedIn
          </span>
        </a>
        <a
            href="https://www.instagram.com/klimondra/"
            target="_blank"
            class="flex justify-center items-center gap-4 w-full max-w-lg mx-auto rounded-2xl p-2 bg-black/10 dark:bg-white/10 border-2 border-iris-500/10 hover:border-iris-500/25 transition-all duration-200"
        >
          <Icon name="mdi:instagram" class="text-4xl text-black dark:text-white transition-all duration-200"/>
          <span class="font-main text-2xl text-neutral-700 dark:text-neutral-300 transition-all duration-200">
            Instagram
          </span>
        </a>
        <a
            href="https://discordapp.com/users/821336004643520512"
            target="_blank"
            class="flex justify-center items-center gap-4 w-full max-w-lg mx-auto rounded-2xl p-2 bg-black/10 dark:bg-white/10 border-2 border-iris-500/10 hover:border-iris-500/25 transition-all duration-200"
        >
          <Icon name="ic:baseline-discord" class="text-4xl text-black dark:text-white transition-all duration-200"/>
          <span class="font-main text-2xl text-neutral-700 dark:text-neutral-300 transition-all duration-200">
            Discord
          </span>
        </a>
      </div>
    </div>
  </ClassicSection>
</template>
