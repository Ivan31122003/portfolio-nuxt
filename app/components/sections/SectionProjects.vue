<template>
  <BaseContent>
    <section id="projects" class="projects">
      <SectionName>проекты</SectionName>
      <div class="projects__list">
        <ProjectCard v-for="project in projects" :key="project.id" v-bind="project" />
      </div>
    </section>
  </BaseContent>
</template>

<script setup lang="ts">
const projects = [
  {
    id: 1,
    title: 'Создание UI-библиотека',
    description:
      'Разработка с нуля UI-библиотеки для энергетической отрасли. Сложная таблица с кастомным cкроллбаром для работы с большими данными без потери производительности.',
    achievements: [
      'Проектирование и разработка сложного компонента таблицы, включая модули (8 шт.)',
      'Разработка кастомного скроллбара для работы с большими данными без потери производительности',
    ],
    stack: ['Vue 3', 'TypeScript', 'Storybook', 'Vite', 'Vitest', 'SCSS'],
    isHard: true,
  },
  {
    id: 2,
    title: 'Сайт компании Инфоэнерго',
    description:
      'Корпоративный сайт энергетической IT-компании: главная с секциями решений, жизненного цикла, клиентов и новостей, страница каталога продуктов и форма обратной связи.',
    achievements: [
      'Адаптивная вёрстка',
      'Отложенная гидратация и сжатие ассетов',
      'Конвертация изображений в AVIF/WebP',
    ],
    stack: ['Nuxt 3', 'Vue 3', 'TypeScript', 'Pinia', 'SCSS', 'Swiper', 'Sharp'],
  },
  {
    id: 3,
    title: 'Модуль администрирования для приложения АСУСЭ WEB',
    description:
      'Разработка модуля администрирования АСУСЭ. Разработка функционала для карточек пользователей: настройка персональных данных, блокировок, прав, ролевой модели.',
    achievements: [
      'Карточка пользователя: персональные данные, блокировки, права',
      'Ролевая модель: назначение ролей и прав доступа',
      'Интеграция с REST API: CRUD, состояния загрузки и ошибок',
    ],
    stack: ['Vue 3', 'JavaScript', 'Tailwind CSS', 'Webpack'],
  },
  {
    id: 4,
    title: 'Лендинг-портфолио',
    description:
      'Свой одностраничный сайт с нуля: секции, карточки проектов и визуальные эффекты без готового UI-кита. Статическая сборка Nuxt, чтобы быстро открывался и просто деплоился.',
    achievements: [
      'Компонентная архитектура: секции, UI-примитивы, общий layout',
      'Кастомная SVG-синусоида с бесконечной CSS-анимацией на transform',
      'Анимации появления через VueUse Motion',
      'Адаптивная сетка карточек и тема на CSS-переменных',
    ],
    stack: ['Nuxt 4', 'Vue 3', 'TypeScript', 'SCSS', 'Vite'],
    isPet: true,
  },
];
</script>

<style scoped lang="scss">
.projects {
  &__list {
    position: relative;
    margin-top: 16px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;

    @include up($bp-lg) {
      grid-template-columns: repeat(2, 1fr);
    }

    @include up($bp-xl) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
