<template>
  <BaseContent>
    <section class="hero">
      <div>
        <BaseTag type="bordered" dashed
          ><span class="hero__tag">Открыт к новым предложениям</span></BaseTag
        >
        <h1 class="hero__title">
          Иван Шестаков<br />
          <BaseHighlight>Frontend</BaseHighlight> разработчик
        </h1>
        <p class="hero__desc">
          /* Создаю удобные и красивые <BaseHighlight>интерфейсы</BaseHighlight>, которые не боятся
          нагрузки&nbsp;*/
        </p>
        <div class="hero__tags">
          <BaseTag
            v-for="(tag, i) of tags"
            :key="tag"
            v-motion
            type="bordered"
            bordered
            :initial="{ opacity: 0, y: 8 }"
            :visible-once="{
              opacity: 1,
              y: 0,
              transition: { duration: 400, delay: i * 80 },
            }"
          >
            {{ tag }}
          </BaseTag>
        </div>
      </div>
      <OrbitsPlanets />
    </section>
  </BaseContent>
</template>

<script setup lang="ts">
const startDate = new Date('2024-07-22');
const now = new Date();
const experience = now.getFullYear() - startDate.getFullYear();
const tags = ['Vue / Nuxt', 'TypeScript', `${String(experience)}+ лет`];
</script>

<style scoped lang="scss">
.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @include up($bp-lg) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &__tag {
    color: var(--color-text);
    animation: pulse 2s infinite;

    @keyframes pulse {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0.3;
      }
      100% {
        opacity: 1;
      }
    }
  }

  &__title {
    margin-top: 25px;
    font-size: var(--fs-display);
    color: var(--color-text);
    line-height: 1.2;

    &--highlight {
      color: var(--color-accent);
    }
  }

  &__desc {
    margin-top: 25px;
  }

  &__tags {
    margin-top: 12px;
    display: inline-flex;
    flex-wrap: wrap;
    gap: 10px;
  }
}
</style>
