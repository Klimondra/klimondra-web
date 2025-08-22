import {defineStore} from 'pinia'

export const useThemeStore = defineStore('theme', () => {
    const dark = ref(false)
    const isDark = computed(() => dark.value)

    const toggleTheme = () => {
        dark.value = !dark.value

        if (dark.value) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

        localStorage.setItem('dark', dark.value)
    }

    const initTheme = () => {
        dark.value = localStorage.getItem('dark') === 'true'
        if (dark.value) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    return {
        dark,
        isDark,
        toggleTheme,
        initTheme
    }
})