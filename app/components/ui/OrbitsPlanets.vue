<template>
  <div class="orbits-planets">
    <div
      v-for="planet in planets"
      :key="planet.id"
      class="orbits-planets__planet"
      :style="{
        '--bg-color': planet.color,
        '--radius': planet.radius,
        '--angle': 360 * Math.random(),
        '--time-animation': `${5 + 5 * Math.random()}s`,
      }"
    />
  </div>
</template>

<script setup lang="ts">
const planets = [
  {
    id: 1,
    radius: '20%',
    color: 'violet',
  },
  {
    id: 2,
    radius: '40%',
    color: 'red',
  },
  {
    id: 3,
    radius: '60%',
    color: 'blue',
  },
  {
    id: 4,
    radius: '80%',
    color: 'green',
  },
  {
    id: 5,
    radius: '100%',
    color: 'yellow',
  },
];
</script>

<style scoped lang="scss">
.orbits-planets {
  display: inline-block;
  position: relative;
  width: 300px;
  min-width: 300px;
  height: 300px;

  &__planet {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: var(--radius);
    height: var(--radius);
    border: 1px solid var(--color-text);
    border-radius: 50%;
    animation: orbit var(--time-animation) linear infinite;

    @keyframes orbit {
      from {
        transform: translate(-50%, -50%) rotate(calc(var(--angle) * 1deg));
      }
      to {
        transform: translate(-50%, -50%) rotate(calc((var(--angle) + 360) * 1deg));
      }
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 15px;
      height: 15px;
      background-color: var(--bg-color);
      border-radius: 50%;
    }
  }
}
</style>
