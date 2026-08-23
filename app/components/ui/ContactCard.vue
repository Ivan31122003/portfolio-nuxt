<template>
  <component
    :is="href ? 'a' : 'div'"
    class="contact-card"
    :class="{ 'contact-card--link': !!href }"
    :href="href"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
  >
    <p class="contact-card__title">{{ title }}</p>
    <p class="contact-card__value">{{ value }}</p>
  </component>
</template>
<script setup lang="ts">
const { href } = defineProps<{
  href?: string;
  title: string;
  value: string;
}>();
const isExternal = computed(() => href?.startsWith('http'));
</script>

<style scoped lang="scss">
.contact-card {
  padding: 8px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  text-decoration: none;
  transition:
    border 0.2s ease-in-out,
    transform 0.2s ease-in-out;

  @include up($bp-lg) {
    padding: 16px;
  }

  &--link:hover {
    border-color: var(--color-accent);
    transform: translateY(-6px);
  }

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-size: var(--fs-body);
    color: var(--color-accent);
  }

  &__value {
    font-size: var(--fs-body);
    color: var(--color-text);
  }
}
</style>
