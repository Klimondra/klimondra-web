<script setup>
const props = defineProps({
  speed: { type: Number, default: 600 },
  rippleClass: { type: String, default: '' }
});

const ripples = ref([]);

function createRipple(e) {
  const target = e.currentTarget.closest('button, .ripple-parent');
  if (!target) return;

  const rect = target.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;

  const id = Date.now();

  ripples.value.push({ id, x, y, size });

  setTimeout(() => {
    ripples.value = ripples.value.filter(r => r.id !== id);
  }, props.speed);
}

defineExpose({
  createRipple
});
</script>

<template>
  <span
      v-for="r in ripples"
      :key="r.id"
      :class="'absolute rounded-full bg-white/10 pointer-events-none animate-ripple ' + props.rippleClass"
      :style="{
      left: r.x + 'px',
      top: r.y + 'px',
      width: r.size + 'px',
      height: r.size + 'px',
      animationDuration: props.speed + 'ms'
    }"
  />
  <slot @click="createRipple" />
</template>

<style scoped>
@keyframes ripple {
  from {
    transform: scale(0);
    opacity: 0.5;
  }
  to {
    transform: scale(4);
    opacity: 0;
  }
}
.animate-ripple {
  animation: ripple linear;
  transform: scale(0);
}
</style>
