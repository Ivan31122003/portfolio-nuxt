<template>
  <div class="menu-burger" :class="{ 'is-open': isOpen }">
    <button
      class="menu-burger__button"
      type="button"
      :aria-label="isOpen ? 'Закрыть меню' : 'Открыть меню'"
      :aria-expanded="isOpen"
      aria-controls="mobile-menu"
      @click="toggle"
    >
      <span class="menu-burger__line" />
      <span class="menu-burger__line" />
      <span class="menu-burger__line" />
    </button>

    <div
      id="mobile-menu"
      class="menu-burger__overlay"
      :class="{ 'is-open': isOpen }"
      :inert="!isOpen"
      @click.self="close"
    >
      <nav class="menu-burger__nav" aria-label="Мобильная навигация">
        <a
          v-for="item in items"
          :key="item.title"
          :href="item.link"
          class="menu-burger__nav-item"
          @click="close"
        >
          {{ item.title }}
        </a>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
interface NavItem {
  title: string;
  link: string;
}

defineProps<{
  items: NavItem[];
}>();

const isOpen = ref(false);

const close = () => {
  isOpen.value = false;
};

const toggle = () => {
  isOpen.value = !isOpen.value;
};

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    close();
  }
};

watch(isOpen, (open) => {
  if (!import.meta.client) {
    return;
  }

  document.body.classList.toggle('is-menu-open', open);
});

onMounted(() => {
  const mediaQuery = window.matchMedia('(min-width: 1024px)');

  const onViewportChange = (event: MediaQueryListEvent) => {
    if (event.matches) {
      close();
    }
  };

  mediaQuery.addEventListener('change', onViewportChange);
  window.addEventListener('keydown', onKeydown);

  onUnmounted(() => {
    mediaQuery.removeEventListener('change', onViewportChange);
    window.removeEventListener('keydown', onKeydown);
    document.body.classList.remove('is-menu-open');
  });
});
</script>

<style scoped lang="scss">
.menu-burger {
  display: flex;
  align-items: center;

  @include up($bp-lg) {
    display: none;
  }

  &__button {
    position: relative;
    z-index: 1;
    width: 40px;
    height: 40px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  &__line {
    position: absolute;
    left: 8px;
    right: 8px;
    height: 2px;
    border-radius: 1px;
    background-color: var(--color-text);
    transition:
      top 0.25s ease,
      transform 0.25s ease,
      opacity 0.25s ease,
      background-color 0.2s ease;

    &:nth-child(1) {
      top: 11px;
    }

    &:nth-child(2) {
      top: 19px;
    }

    &:nth-child(3) {
      top: 27px;
    }
  }

  &__button:hover &__line {
    background-color: var(--color-accent);
  }

  &.is-open &__line {
    &:nth-child(1) {
      top: 19px;
      transform: rotate(45deg);
    }

    &:nth-child(2) {
      opacity: 0;
    }

    &:nth-child(3) {
      top: 19px;
      transform: rotate(-45deg);
    }
  }

  &__overlay {
    position: fixed;
    z-index: -1;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: color-mix(in srgb, var(--color-bg) 94%, transparent);
    backdrop-filter: blur(16px);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition:
      opacity 0.25s ease,
      visibility 0.25s ease;

    &.is-open {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }
  }

  &__nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    padding: 0 16px;
  }

  &__nav-item {
    text-decoration: none;
    color: var(--color-text);
    font-size: var(--fs-title);
    transition: color 0.2s ease-in-out;

    &:hover {
      color: var(--color-accent);
    }
  }
}

:global(body.is-menu-open) {
  overflow: hidden;
}

@media (prefers-reduced-motion: reduce) {
  .menu-burger__line,
  .menu-burger__overlay {
    transition: none;
  }
}
</style>
