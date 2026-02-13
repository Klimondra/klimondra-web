<script setup lang="ts">
const props = defineProps({
  stringArray: {
    type: Array,
    default: () => []
  },
  writeSpeed: {
    type: Number,
    default: 100
  },
  deleteSpeed: {
    type: Number,
    default: 70
  },
  waitTime: {
    type: Number,
    default: 2000
  },
  textProps: {
    type: Object,
    default: () => ({})
  },
  cursorProps: {
    type: Object,
    default: () => ({})
  }
})

const activeText = ref('')
const currentStringIndex = ref(0)
const state = ref('typing')

const step = () => {
  const target = props.stringArray[currentStringIndex.value] as string

  if (state.value === 'typing') {
    activeText.value = target.slice(0, activeText.value.length + 1)

    if (activeText.value === target) {
      state.value = "waiting"
      return setTimeout(step, props.waitTime) // pauza
    }
    return setTimeout(step, props.writeSpeed)

  } else if (state.value === 'waiting') {
    state.value = "deleting"
    return setTimeout(step, props.deleteSpeed)
  } else if (state.value === 'deleting') {
    const nextTarget = props.stringArray[(currentStringIndex.value + 1) % props.stringArray.length] as string
    const prefixLength = getPrefixLength(target, nextTarget)

    if (activeText.value.length <= prefixLength) {
      currentStringIndex.value = (currentStringIndex.value + 1) % props.stringArray.length
      state.value = "typing"
    } else {
      activeText.value = activeText.value.slice(0, -1)
    }
    return setTimeout(step, props.deleteSpeed)
  }
}

const getPrefixLength = (strA: string, strB: string) => {
  const minLen = Math.min(strA.length, strB.length)

  for (let i = 0; i < minLen; i++) {
    if (strA[i] !== strB[i]) {
      return i
    }
  }
  return minLen
}
step()
</script>

<template>
  <div>
    <span
        class="font-main text-2xl sm:text-4xl inline font-medium text-black dark:text-white transition-all duration-200"
        v-bind="textProps"
    >{{ activeText }}</span>
    <span
      class="typewriter font-main font-medium text-2xl sm:text-4xl inline text-black dark:text-white transition-all duration-200"
      v-bind="cursorProps"
    >|</span>
  </div>
</template>

<style scoped>
.typewriter {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
