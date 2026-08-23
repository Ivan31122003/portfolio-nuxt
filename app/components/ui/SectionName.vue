<template>
  <div class="section-name">
    <div class="section-name__title">
      <BaseHighlight>#</BaseHighlight>
      <h2 class="section-name__title-text"><slot /></h2>
    </div>
    <span class="section-name__line" />
  </div>
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
    display: inline-block;
    font-size: var(--fs-heading);
    font-weight: 600;
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
