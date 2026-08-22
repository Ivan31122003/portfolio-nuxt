<template>
  <div>
    <AppHeader />
    <main id="main">
      <SectionHero />
      <SectionProjects />
    </main>
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
  max-width: 1920px;
  overflow: hidden;

  padding-top: 82px;
  display: flex;
  flex-direction: column;
  gap: 41px;
}
</style>
