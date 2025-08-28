import {defineStore} from 'pinia'

export const useThemeStore = defineStore('theme', () => {
    const dark = ref(true)
    const isDark = computed(() => dark.value)

    const toggleTheme = () => {
        dark.value = !dark.value

        addClass()
        localStorage.setItem('dark', dark.value)
    }

    const initTheme = () => {
        addClass()
        dark.value = localStorage.getItem('dark') !== 'false'
        addClass()
    }

    const addClass = () => {
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