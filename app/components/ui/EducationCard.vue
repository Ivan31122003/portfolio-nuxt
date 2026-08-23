<template>
  <div class="education-card">
    <IconUniversity class="education-card__icon" aria-hidden="true" />

    <div class="education-card__content">
      <h3 class="education-card__title">{{ title }}</h3>
      <p class="education-card__meta">{{ meta }}</p>
      <p class="education-card__university">{{ university }}</p>
      <p class="education-card__institute">{{ institute }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  meta: string;
  university: string;
  institute: string;
}>();
</script>

<style scoped lang="scss">
.education-card {
  padding: 20px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  display: flex;
  gap: 20px;

  &__icon {
    width: 64px;
    height: 64px;
    color: var(--color-text);
  }

  &__content {
    display: block;
  }

  &__title {
    font-size: var(--fs-title);
    font-weight: 600;
    color: var(--color-text);
  }

  &__meta {
    margin-top: 8px;
    font-size: var(--fs-subtitle);
    color: var(--color-accent);
  }

  &__university {
    margin-top: 8px;
    font-size: var(--font-body);
    color: var(--color-text-muted);
  }

  &__institute {
    margin-top: 4px;
    font-size: var(--font-body);
    color: var(--color-text-muted);
  }
}
</style>
