<template>
  <a class="write-me-button" href="https://t.me/shestiv" target="_blank" rel="noopener noreferrer">
    Написать в Telegram
  </a>
</template>

<style scoped lang="scss">
.write-me-button {
  text-decoration: none;
  padding: 8px 16px;
  border: 1px solid var(--color-accent);
  border-radius: 8px;
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
