<template>
  <BaseContent>
    <section class="section-experience">
      <SectionName>опыт работы</SectionName>
      <div class="section-experience__content">
        <JobCard v-for="job in jobs" :key="job.title" v-bind="job" />
      </div>
    </section>
  </BaseContent>
</template>

<script setup lang="ts">
import { DATES } from '@/utils/constance';
import { getYearDeclension, getMonthDeclension } from '@/utils/date';

const differenceYear = DATES.TODAY.getFullYear() - DATES.START_WORK_DATE.getFullYear();
const differenceMonth = DATES.TODAY.getMonth() - DATES.START_WORK_DATE.getMonth() + 1;

const jobs = [
  {
    title: 'Frontend-разработчик',
    period: `Июль 2024 - наст. время | ${String(differenceYear)} ${getYearDeclension(differenceYear)} ${String(differenceMonth)} ${getMonthDeclension(differenceMonth)}`,
    company: 'ООО "Альфа-Интегратор-Инфоэнерго"',
    stack: [
      'TypeScript',
      'Vue',
      'Nuxt',
      'Storybook',
      'Vite',
      'Vitest',
      'Pinia',
      'Node.js',
      'PostgreSQL',
      'Docker',
      'Vue Router',
    ],
    points: [
      'Спроектировал и реализовал сложный UI-компонент таблицы с обширной настройкой колонок и inline-редактированием',
      'Разработал кастомный скроллбар для работы с 1M+ строк данных без потери производительности',
      'Внедрил Code Review, Storybook, Changelog, Conventional Commits — снижение обращений в поддержку на 70%',
      'Разработал корпоративный сайт с нуля: Nuxt 3 + Node.js + PostgreSQL',
      'Настроил GitLab CI/CD и серверную инфраструктуру для сайта компании',
    ],
  },
];
</script>

<style lang="scss" scoped>
.section-experience {
  &__content {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    @include up($bp-xl) {
      width: 67%;
    }
  }
}
</style>
