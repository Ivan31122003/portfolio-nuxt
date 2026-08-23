<template>
  <header class="header">
    <span class="header__logo">shestiv</span>
    <div class="header__right">
      <nav class="header__nav">
        <a v-for="item in navigation" :key="item.title" :href="item.link" class="header__nav-item">
          {{ item.title }}
        </a>
      </nav>
      <ThemeSwitcher />
    </div>
  </header>
</template>

<script setup lang="ts">
const navigation = [
  {
    title: 'проекты',
    link: '#projects',
  },
  {
    title: 'образование',
    link: '#education',
  },
  {
    title: 'контакты',
    link: '#contacts',
  },
];
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  position: fixed;
  z-index: 100;
  padding: 20px 16px;
  display: flex;
  justify-content: space-between;
  background-color: var(--color-header-bg);
  font-size: var(--fs-body);

  &__logo {
    color: var(--color-text);
  }

  &__right {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &__nav {
    display: flex;
    gap: 16px;
  }

  &__nav-item {
    text-decoration: none;
    color: var(--color-text);
    transition: color 0.2s ease-in-out;

    &:hover {
      color: var(--color-accent);
    }
  }
}
</style>
