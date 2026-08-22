<template>
  <h2 class="section-name">
    <div class="sectio-name__title">
      <BaseHighlight>#</BaseHighlight>
      <span class="section-name__title-text"><slot /></span>
    </div>
    <span class="section-name__line" />
  </h2>
</template>

<style scoped lang="scss">
.section-name {
  display: flex;
  align-items: center;
  gap: 16px;

  &__title {
    display: inline;
    font-size: var(--fs-heading);
    font-weight: 600;
  }

  &__title-text {
    color: var(--color-text);
  }

  &__line {
    flex: 1;
    height: 1px;
    min-width: 0;
    background-color: var(--color-accent);
  }
}
</style>
