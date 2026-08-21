<template>
  <button
    class="theme-switcher"
    type="button"
    :aria-label="theme === 'dark' ? 'Включить светлую тему' : 'Включить тёмную тему'"
    @click="toggle"
  >
    <span class="theme-switcher__track" :class="{ 'is-light': theme === 'light' }">
      <span class="theme-switcher__thumb" />
    </span>
  </button>
</template>

<script setup lang="ts">
const { theme, toggle } = useTheme();
</script>

<style scoped lang="scss">
.theme-switcher {
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
}

.theme-switcher__track {
  display: block;
  width: 44px;
  height: 24px;
  padding: 3px;
  border: 1px solid var(--color-accent);
  border-radius: 999px;
}

.theme-switcher__thumb {
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--color-accent);
  transition: transform 0.2s ease;
}

.theme-switcher__track.is-light .theme-switcher__thumb {
  transform: translateX(20px);
}
</style>
