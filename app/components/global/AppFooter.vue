<template>
  <hr />
  <footer class="footer">
    <BaseContent class="footer__inner">
      <p>Ivan Shestakov | Frontend-разработчик</p>
      <p>© 2024–{{ currentYear }} | Санкт-Петербург</p>
    </BaseContent>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<style scoped lang="scss">
.footer {
  padding: 16px 0;
  display: flex;
  justify-content: center;
  text-align: center;

  @include up($bp-lg) {
    padding: 32px 0;
  }

  &__inner {
    max-width: 1920px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    @include up($bp-lg) {
      flex-direction: row;
      justify-content: space-between;
      gap: 0;
    }
  }
}

hr {
  margin: 0;
}
</style>
