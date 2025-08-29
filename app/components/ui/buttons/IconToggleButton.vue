<script setup>
const props = defineProps({
  iconFalse: {
    type: String,
    required: true
  },
  iconTrue: {
    type: String,
    required: true
  },
  value: {
    type: Boolean,
    default: false
  },
  size: {
    type: Number,
    default: 32
  },
  buttonProps: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['toggle'])
const handleClick = () => {
  emit('toggle')
}

const padding = props.size / 8
const boxWidth = props.size * 2 + (padding * 2) + 2 // Size + 2 x padding + 2 for border
const boxHeight = props.size + (padding * 2) + 2 // Size + 2 x padding + 2 for border
const buttonSize = props.size

</script>

<template>
  <button
      :style="{ width: `${boxWidth}px`, height: `${boxHeight}px`, padding: `${padding}px` }"
      class="border-1 cursor-pointer inset-shadow-sm inset-shadow-black/3 dark:inset-shadow-white/3 border-slate-950/10 dark:border-white/10 rounded-2xl transition-all duration-200"
      v-bind="buttonProps"
      @click="handleClick"
  >
    <div
        :class="`relative bg-slate-950 dark:bg-slate-50 rounded-[12px] ${props.value ? 'translate-x-full' : ''} transition-all duration-200`"
        :style="{ width: `${buttonSize}px`, height: `${buttonSize}px` }"
    >
      <!--suppress JSValidateTypes -->
      <Icon
          :name="props.iconFalse"
          :class="`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
          text-slate-50 dark:text-slate-950
          ${props.value ? 'opacity-0 rotate-360' : 'opacity-100 rotate-0'} transition-all duration-200`"
      />
      <!--suppress JSValidateTypes -->
      <Icon
          :name="props.iconTrue"
          :class="`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
          text-white dark:text-black
          ${!props.value ? 'opacity-0 rotate-0' : 'opacity-100 rotate-360'} transition-all duration-200`"
      />
    </div>
  </button>
</template>
