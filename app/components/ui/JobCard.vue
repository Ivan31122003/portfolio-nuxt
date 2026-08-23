<template>
  <div class="job-card">
    <div class="job-card__header">
      <h3 class="job-card__title">{{ title }}</h3>
      <BaseTag type="bordered" size="small">{{ period }}</BaseTag>
    </div>
    <p class="job-card__company">{{ company }}</p>
    <div class="job-card__stack">
      <BaseTag v-for="tech in stack" :key="tech" type="bordered" size="small">{{ tech }}</BaseTag>
    </div>
    <ul class="job-card__points">
      <li
        v-for="(point, i) in points"
        :key="point"
        v-motion-slide-visible-once-left
        :delay="i * 100"
        class="job-card__item"
      >
        {{ point }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  period: string;
  company: string;
  stack: string[];
  points: string[];
}>();
</script>

<style scoped lang="scss">
.job-card {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 16px;

  @include up($bp-lg) {
    padding: 24px;
  }

  &__header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    @include up($bp-lg) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  &__title {
    font-size: var(--fs-title);
    color: var(--color-text);
  }

  &__company {
    margin-top: 8px;
    font-size: var(--fs-title);
    color: var(--color-text);
  }

  &__stack {
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  &__points {
    margin-top: 16px;
    padding-left: 16px;
  }

  &__item {
    margin-top: 8px;
    font-size: var(--fs-body);
  }
}
</style>
