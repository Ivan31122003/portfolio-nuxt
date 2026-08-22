<template>
  <div class="wave" aria-hidden="true">
    <div class="wave__track">
      <svg
        class="wave__svg"
        :viewBox="`0 0 ${String(width)} ${String(height)}`"
        preserveAspectRatio="none"
      >
        <path :d="pathD" fill="none" stroke="currentColor" stroke-width="2" />
      </svg>
      <svg
        class="wave__svg"
        :viewBox="`0 0 ${String(width)} ${String(height)}`"
        preserveAspectRatio="none"
      >
        <path :d="pathD" fill="none" stroke="currentColor" stroke-width="2" />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
const width = 120;
const height = 600;
const periods = 3 + Math.floor(3 * Math.random());
const amplitude = 20 + 15 * Math.random();
const step = 4;

const pathD = (() => {
  const mid = width / 2;
  const lambda = height / periods;
  let d = `M ${String(mid)} 0`;

  for (let y = step; y <= height; y += step) {
    const x = mid + amplitude * Math.sin((2 * Math.PI * y) / lambda);
    d += ` L ${String(x)} ${String(y)}`;
  }

  return d;
})();
</script>

<style scoped lang="scss">
.wave {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 0;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  color: var(--color-accent);
  filter: blur(4px);

  &__track {
    display: flex;
    flex-direction: column;
    height: 200%;
    animation: wave-shift 10s linear infinite;
  }

  &__svg {
    display: block;
    flex: 0 0 50%;
    height: 50%;
    width: auto;
  }
}

@keyframes wave-shift {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-50%);
  }
}
</style>
