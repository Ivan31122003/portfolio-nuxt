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

useHead({
  htmlAttrs: {
    'data-theme': theme,
  },
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
