<template>
  <div>
    <AppHeader />
    <main id="main">
      <SectionHero />
      <SectionExperience />
      <SectionProjects />
      <SectionEducation />
      <SectionContacts />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const { theme } = useTheme();

const siteUrl = 'https://shestiv.tech';

useSeoMeta({
  title: 'Иван Шестаков — Frontend-разработчик (Vue / Nuxt)',
  description:
    'Портфолио frontend-разработчика из Санкт-Петербурга: Vue 3, Nuxt, TypeScript. UI-библиотеки, корпоративные сайты, админки. Открыт к предложениям.',
  ogTitle: 'Иван Шестаков — Frontend-разработчик',
  ogDescription: 'Vue / Nuxt / TypeScript. Санкт-Петербург. Открыт к новым предложениям.',
  ogType: 'website',
  ogUrl: siteUrl,
  ogLocale: 'ru_RU',
  ogSiteName: 'Иван Шестаков',
  ogImage: `${siteUrl}/og.png`,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Иван Шестаков — Frontend-разработчик',
  twitterDescription: 'Vue / Nuxt / TypeScript. Открыт к новым предложениям.',
  twitterImage: `${siteUrl}/og.png`,
});

useHead({
  htmlAttrs: { lang: 'ru', 'data-theme': theme },
  link: [{ rel: 'canonical', href: siteUrl }],
});
</script>

<style scoped lang="scss">
#main {
  width: 100%;
  max-width: 1920px;
  margin-inline: auto;
  overflow: hidden;
  padding: 80px 0 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>
