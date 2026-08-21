<template>
  <div class="content">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.content {
  padding: 0 16px;

  @include up($bp-md) {
    padding: 0 64px;
  }

  @include up($bp-lg) {
    padding: 0 80px;
  }

  @include up($bp-xl) {
    padding: 0 96px;
  }

  @include up($bp-xxl) {
    padding: 0 120px;
  }
}
</style>
