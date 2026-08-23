<template>
  <div class="tag" :class="[size, `tag--${type}`, { 'tag--dashed': dashed }]">
    <slot />
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: 'small' | 'medium' | 'large';
    type?: 'default' | 'bordered';
    dashed?: boolean;
  }>(),
  {
    size: 'medium',
    type: 'default',
    dashed: false,
  },
);
</script>

<style scoped lang="scss">
.tag {
  display: inline-block;
  color: var(--color-text);
  background-color: var(--color-accent);
  border-radius: 8px;

  &.small {
    padding: 4px 8px;
    font-size: var(--fs-small);
  }

  &.medium {
    padding: 8px 16px;
  }

  &.large {
    padding: 12px 24px;
    font-size: var(--fs-title);
  }

  &--bordered {
    border: 1px solid var(--color-accent);
    background-color: transparent;
    color: var(--color-text);
  }

  &--dashed {
    border-style: dashed;
  }
}
</style>
