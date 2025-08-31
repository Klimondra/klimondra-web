<script setup>
import IconToggleButton from "~/components/ui/buttons/IconToggleButton.vue";
import IconSingleRounded from "~/components/ui/buttons/IconSingleRounded.vue";
import NavHeaderItemWithDetail from "~/components/composites/navigationHeader/NavHeaderItemWithDetail.vue";
import IconLinkTooltip from "~/components/ui/buttons/IconLinkTooltip.vue";
import {quicklinks} from "~/data/quicklinks.js";

const {locale, setLocale} = useI18n()
const theme = useThemeStore()

const mobileVisible = ref(false)

const isEnglish = ref(locale.value === 'en')
const langSwitch = () => {
  isEnglish.value = !isEnglish.value
  setLocale(isEnglish.value ? 'en' : 'cs')
}

const links = [
  { name: $t("composites.navigation.links.about"), href: '/#about' },
  { name: $t("composites.navigation.links.technologies"), href: '/#technologies' },
  { name: $t("composites.navigation.links.projects"), href: '/#projects' },
  { name: $t("composites.navigation.links.contact"), href: '/#contact' },
]
watch(locale, () => {
  links[0].name = $t("composites.navigation.links.about")
  links[1].name = $t("composites.navigation.links.technologies")
  links[2].name = $t("composites.navigation.links.projects")
  links[3].name = $t("composites.navigation.links.contact")
})
</script>

<template>
  <header class="w-full h-18 fixed top-0 z-50 flex flex-row items-end justify-center px-4 sm:px-8">
    <div
        class="w-full max-w-7xl h-14 flex items-center justify-between px-4 relative
        rounded-2xl border-1 border-slate-950/5 shadow-sm/5 dark:shadow-white
        dark:border-white/5 transition-all duration-200"
    >
      <div class="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-2xl -z-10"/>

      <NuxtLink
          to="/#hero"
          class="font-bold text-2xl font-main text-black dark:text-white hover:text-iris-400 active:text-iris-500 transition-colors duration-200 ">
        Klimondra
      </NuxtLink>

      <nav class="flex items-center gap-4">
        <div class="max-md:hidden flex flex-row items-center gap-4">
          <NuxtLink
              v-for="link in links"
              :key="link.name"
              class="font-main font-light text-black dark:text-white hover:-translate-y-0.25 transition-all duration-200"
              :to="link.href"
          >
            {{ link.name }}
          </NuxtLink>
        </div>

        <NavHeaderItemWithDetail class="max-md:hidden" detail-class=" -right-4">
          <template #toggleButton>
            <IconSingleRounded icon="material-symbols:settings-outline" :aria-label="$t('composites.navigation.settings.accessName')"/>
          </template>
          <template #detail>
            <div class="flex flex-col items-end gap-2">
              <div class="flex items-center gap-3 font-main font-extralight text-lg text-black/90 dark:text-white/90 transition-all duration-200">
                <p>{{ $t("composites.navigation.settings.theme")}}</p>
                <IconToggleButton
                    icon-true="material-symbols:dark-mode-outline"
                    icon-false="material-symbols:light-mode-outline"
                    :value="theme.isDark"
                    :size="32"
                    :button-props="{
                    ariaLabel: theme.isDark ? $t('composites.navigation.themeSwitcher.switchToLight') : $t('composites.navigation.themeSwitcher.switchToDark'),
                  }"
                    @toggle="theme.toggleTheme"
                />
              </div>

              <div class="flex items-center gap-3 font-main font-extralight text-lg text-black/90 dark:text-white/90 transition-all duration-200">
                <p>{{ $t("composites.navigation.settings.language")}}</p>
                <IconToggleButton
                    icon-true="circle-flags:lang-en"
                    icon-false="circle-flags:cz"
                    :value="isEnglish"
                    :size="32"
                    :button-props="{
                    ariaLabel: theme.isDark ? $t('composites.navigation.themeSwitcher.switchToLight') : $t('composites.navigation.themeSwitcher.switchToDark'),
                  }"
                    @toggle="langSwitch"
                />
              </div>
            </div>
          </template>
        </NavHeaderItemWithDetail>

        <button 
            class="md:hidden flex items-center justify-center p-1"
            :aria-label="mobileVisible ? $t('composites.navigation.mobileMenu.close') : $t('composites.navigation.mobileMenu.open')"
            @click="mobileVisible=!mobileVisible"
        >
          <Icon name="material-symbols:menu" class="text-4xl text-black dark:text-white active:scale-95 transition-all duration-200 md:hidden"/>
        </button>
      </nav>
    </div>
  </header>
  <section
      class="md:hidden fixed top-0 left-0 z-40 w-screen h-dvh p-4 pt-24 flex flex-col justify-between
      bg-iris-900/20 dark:bg-iris-900/30 backdrop-blur-xl transition-all duration-200"
      :class="mobileVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-20'"
  >
    <nav class="flex flex-col gap-4 ">
      <NuxtLink
          v-for="link in links"
          :key="link.name"
          class="font-main font-light text-black text-3xl dark:text-white hover:-translate-y-0.25 active:translate-x-1.5 transition-all duration-200"
          :to="link.href"
          @click="mobileVisible = false"
      >
        {{ link.name }}
      </NuxtLink>
    </nav>
    <div class="w-full flex flex-row items-end">
      <div class="flex-1 flex flex-col items-end gap-2">
        <div class="flex items-center gap-4 font-main font-extralight text-xl text-black/90 dark:text-white/90 transition-all duration-200">
          <p>{{ $t("composites.navigation.settings.theme")}}</p>
          <IconToggleButton
              icon-true="material-symbols:dark-mode-outline"
              icon-false="material-symbols:light-mode-outline"
              :value="theme.isDark"
              :size="48"
              :button-props="{
                    ariaLabel: theme.isDark ? $t('composites.navigation.themeSwitcher.switchToLight') : $t('composites.navigation.themeSwitcher.switchToDark'),
                  }"
              @toggle="theme.toggleTheme"
          />
        </div>

        <div class="flex items-center gap-4 font-main font-extralight text-xl text-black/90 dark:text-white/90 transition-all duration-200">
          <p>{{ $t("composites.navigation.settings.language")}}</p>
          <IconToggleButton
              icon-true="circle-flags:lang-en"
              icon-false="circle-flags:cz"
              :value="isEnglish"
              :size="48"
              :button-props="{
                    ariaLabel: theme.isDark ? $t('composites.navigation.themeSwitcher.switchToLight') : $t('composites.navigation.themeSwitcher.switchToDark'),
                  }"
              @toggle="langSwitch"
          />
        </div>
      </div>
      <div class="flex-1 flex flex-col items-end gap-2 justify-end">
        <IconLinkTooltip v-for="oneLink in quicklinks" :key="oneLink" :one-link="oneLink"/>
      </div>
    </div>
  </section>
</template>
