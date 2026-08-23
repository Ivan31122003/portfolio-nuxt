<template>
  <button class="base-button">
    <slot />
  </button>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.base-button {
  padding: 10px 20px;
  border: 1px solid var(--color-border);
  background-color: var(--color-bg);
  color: var(--color-text);
  font-size: var(--color-text);
  cursor: pointer;
  transition:
    border-color 0.2s ease-in-out,
    background-color 0.2s ease-in-out,
    transform 0.2s ease-in-out;

  &:hover {
    border-color: var(--color-accent);
    background-color: var(--color-accent);
  }
}
</style>
