<script setup>
import IconToggleButton from "~/components/ui/buttons/IconToggleButton.vue";
import IconSingleRounded from "~/components/ui/buttons/IconSingleRounded.vue";
import NavHeaderItemWithDetail from "~/components/composites/navigationHeader/NavHeaderItemWithDetail.vue";

const {locale, setLocale} = useI18n()
const theme = useThemeStore()

const isEnglish = ref(locale.value === 'en')
const langSwitch = () => {
  isEnglish.value = !isEnglish.value
  setLocale(isEnglish.value ? 'en' : 'cs')
}
</script>

<template>
  <header class="w-full h-18 fixed top-0 z-30 flex flex-row items-end justify-center px-4 sm:px-8">
    <div
        class="w-full max-w-7xl h-14 flex items-center justify-between px-4 relative
        rounded-2xl border-1 border-slate-950/5 shadow-sm/5 dark:shadow-white
        dark:border-white/5 transition-all duration-200"
    >
      <div class="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-2xl -z-10"/>

      <NuxtLink
          to="/"
          class="font-bold text-2xl font-main text-black dark:text-white hover:text-iris-400 active:text-iris-500 transition-colors duration-200 ">
        Klimondra
      </NuxtLink>
      <nav class="flex items-center gap-4">
        <ul>
          <NuxtLink class="text-black dark:text-white" to="/projects">
            Projekty
          </NuxtLink>
        </ul>

        <NavHeaderItemWithDetail detail-class="-right-4">
          <template #toggleButton>
            <IconSingleRounded icon="material-symbols:settings-outline"/>
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
      </nav>
    </div>
  </header>
</template>
