<template>
  <div class="project-card">
    <div class="project-card__wave">
      <BaseSinWave />
    </div>
    <div class="project-card__content">
      <div class="project-card__meta-info">
        <h3>{{ directionProject }}</h3>
        <BaseTag v-if="isHard" type="hard" size="small">HARD</BaseTag>
      </div>
      <h3 class="project-card__name">{{ title }}</h3>
      <p class="project-card__description">{{ description }}</p>
      <div class="project-card__achievements">
        <h4 class="project-card__achievements-title">Важные поинты:</h4>
        <ul class="project-card__achievements-list">
          <li
            v-for="achievement in achievements"
            :key="achievement"
            class="project-card__achievement-item"
          >
            {{ achievement }}
          </li>
        </ul>
      </div>
      <div class="project-card__stack">
        <h4 class="project-card__stack-title">Используемые технологии:</h4>
        <div class="project-card__stack-list">
          <BaseTag
            v-for="(tech, i) in stack"
            :key="tech"
            v-motion-slide-visible-once-right
            :delay="(i - 1) * 120 + i * 80"
            type="bordered"
            size="small"
          >
            {{ tech }}
          </BaseTag>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string;
    description: string;
    stack: string[];
    achievements: string[];
    isPet?: boolean;
    isHard?: boolean;
  }>(),
  {
    isPet: false,
    isHard: false,
  },
);

const directionProject = props.isPet ? 'Pet-проект' : 'Коммерческий проект';
</script>

<style scoped lang="scss">
.project-card {
  position: relative;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 16px;
  transition:
    border-color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    border-color: var(--color-accent);
    transform: translateY(-10px);
  }

  &__wave {
    z-index: 0;
  }

  &__content {
    position: relative;
    z-index: 2;
  }

  &__meta-info {
    display: flex;
    justify-content: space-between;
  }

  &__name {
    margin-top: 8px;
    font-size: var(--fs-title);
    font-weight: 600;
    color: var(--color-text);
  }

  &__description {
    margin-top: 16px;
  }

  &__achievements-title {
    margin-top: 8px;
    font-size: var(--fs-subtitle);
    color: var(--color-text);
  }

  &__achievements-list {
    margin-top: 4px;
    padding-left: 24px;
  }

  &__stack-title {
    margin-top: 8px;
    font-size: var(--fs-subtitle);
    color: var(--color-text);
  }

  &__stack-list {
    margin-top: 4px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
}
</style>
