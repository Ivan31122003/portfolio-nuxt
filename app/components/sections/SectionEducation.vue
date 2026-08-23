<template>
  <BaseContent>
    <section id="education" class="section-education">
      <SectionName>образование</SectionName>
      <div class="section-education__content">
        <EducationCard
          v-for="item in education"
          :key="item.title"
          :title="item.title"
          :meta="item.meta"
          :university="item.university"
          :institute="item.institute"
        />
      </div>
    </section>
  </BaseContent>
</template>

<script setup lang="ts">
const education = [
  {
    title: 'Программная инженерия',
    meta: 'Бакалавр | 2022-2026',
    university: 'Санкт-Петербургский политехнический университет Петра Великого',
    institute: 'Институт компьютерных наук и кибербезопасности',
  },
];
</script>

<style scoped lang="scss">
.section-education {
  &__content {
    margin-top: 16px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;

    @include up($bp-xl) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
