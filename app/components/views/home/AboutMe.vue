<script setup>
import ClassicSection from "~/components/layouts/ClassicSection.vue";
import SectionShadowHeading from "~/components/ui/headings/SectionShadowHeading.vue";
import HomeAboutCard from "~/components/composites/special/HomeAboutCard.vue";
import PrimaryActionButton from "~/components/ui/buttons/PrimaryActionButton.vue";
import { sub } from "date-fns";

const articleParagraphs = $t("pages.home.aboutme.article").split("\n")

const age = sub(new Date(), { years: 2009, months: 7, days: 10 });
</script>

<template>
  <ClassicSection
      inner-class="min-h-lvh flex flex-col gap-12 pb-12"
  >
    <SectionShadowHeading :text="$t('pages.home.aboutme.title')"/>
    <div class="w-full h-full flex flex-col lg:flex-row gap-12">
      <div class="flex-1 flex flex-col gap-12">
        <h4 class="text-6xl sm:text-7xl font-extrabold font-main text-black dark:text-white transition-all duration-200">
          Ondřej<br>Klíma
        </h4>
        <div class="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <HomeAboutCard
              icon="material-symbols:globe"
              :heading="$t('pages.home.aboutme.cards.nationality.title')"
          >
            <div class="flex-1 flex items-center justify-center gap-4">
              <Icon name="circle-flags:cz" class="text-4xl"/>
              <p class="text-3xl text-iris-950 dark:text-iris-50 font-main font-medium transition-all duration-200">
                {{ $t('pages.home.aboutme.cards.nationality.czechia') }}
              </p>
            </div>
          </HomeAboutCard>
          <HomeAboutCard
              icon="material-symbols:person-outline"
              :heading="$t('pages.home.aboutme.cards.age.title')"
          >
            <div class="flex-1 flex items-center justify-center gap-4">
              <p class="text-3xl text-iris-950 dark:text-iris-50 font-main font-medium transition-all duration-200">{{age.getFullYear() + ` ${$t("pages.home.aboutme.cards.age.years")}`}}</p>
            </div>
          </HomeAboutCard>
          <HomeAboutCard
              icon="mdi:vinyl"
              :heading="$t('pages.home.aboutme.cards.music.title')"
          >
            <div class="flex-1 flex items-center justify-center gap-4">
              <p class="text-3xl text-iris-950 dark:text-iris-50 font-main font-medium transition-all duration-200">{{$t('pages.home.aboutme.cards.music.rock')}}</p>
            </div>
          </HomeAboutCard>
          <HomeAboutCard
              icon="material-symbols:share-outline"
              :heading="$t('pages.home.aboutme.cards.follow.title')"
          >
            <div class="flex-1 flex items-center justify-center gap-4">
              <a
                  href="https://www.instagram.com/klimondra/"
                  target="_blank"
                  :aria-label="$t('pages.home.aboutme.cards.follow.accessLabels.instagram')"
              ><Icon name="mdi:instagram" class="text-5xl text-iris-950 dark:text-iris-50 hover:text-iris-400 active:scale-98 transition-all duration-200"/></a>
              <a
                  href="https://www.threads.com/@klimondra"
                  target="_blank"
                  :aria-label="$t('pages.home.aboutme.cards.follow.accessLabels.threads')"
              ><Icon name="ion:logo-threads" class="text-5xl text-iris-950 dark:text-iris-50 hover:text-iris-400 active:scale-98 transition-all duration-200"/></a>
              <a
                  href="https://discordapp.com/users/821336004643520512"
                  target="_blank"
                  :aria-label="$t('pages.home.aboutme.cards.follow.accessLabels.discord')"
              ><Icon name="ic:baseline-discord" class="text-5xl text-iris-950 dark:text-iris-50 hover:text-iris-400 active:scale-98 transition-all duration-200"/></a>
            </div>
          </HomeAboutCard>
        </div>
      </div>
      <article class="flex-1 flex flex-col gap-8 justify-between items-end">
        <p class="w-full font-main font-light text-black dark:text-white text-lg leading-relaxed transition-all duration-200">
          <span v-for="(paragraph, index) in articleParagraphs" :key="index">
            {{ paragraph }} <br v-if="index !== articleParagraphs.length - 1">
          </span>
        </p>
        <PrimaryActionButton :text="$t('pages.home.aboutme.moreAboutMe')"/>
      </article>
    </div>
  </ClassicSection>
</template>
