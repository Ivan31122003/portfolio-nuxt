<template>
  <header class="header">
    <BaseContent class="header__inner">
      <span class="header__logo">Ivan Shestakov</span>
      <nav class="header__nav">
        <a v-for="item in navigation" :key="item.title" :href="item.link" class="header__nav-item">
          {{ item.title }}
        </a>
      </nav>
      <div class="header__actions">
        <ThemeSwitcher />
        <MenuBurger :items="navigation" />
      </div>
    </BaseContent>
  </header>
</template>

<script setup lang="ts">
const navigation = [
  {
    title: 'главная',
    link: '#hero',
  },
  {
    title: 'опыт работы',
    link: '#experience',
  },
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
  padding: 20px 0;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 100;
  background-color: var(--color-header-bg);
  font-size: var(--fs-body);

  &__inner {
    max-width: 1920px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    color: var(--color-text);
  }

  &__nav {
    display: none;
    gap: 32px;

    @include up($bp-lg) {
      display: flex;
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 12px;
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
