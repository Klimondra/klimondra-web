<script lang="ts">
    import logo_image from '$lib/assets/branding/Logomark-black.svg';
    import { navigationItems } from '$lib/data/navigationItems';
	import { onMount } from 'svelte';
    import Icon from '@iconify/svelte';
    import { slide } from 'svelte/transition';

    let isScrolled = $state(false);
    let isMobileMenuOpen = $state(false);

    onMount(() => {
        const handleScroll = () => {
            isScrolled = window.scrollY > 50;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    const closeMobileMenu = () => {
        isMobileMenuOpen = false;
    };
</script>

<header class="w-full fixed top-0 left-0 right-0 z-50 h-14 px-4 md:px-6 flex items-center bg-bg-light/95 backdrop-blur-md border-b border-transparent {isScrolled ? 'bg-white/95 border-b-gray-200' : ''} transition-all duration-300">
    <div class="w-full max-w-7xl mx-auto flex items-center justify-between gap-4">
        <a href="/" class="text-gray-900 text-3xl font-bold flex items-center gap-3 relative z-50" onclick={closeMobileMenu}>
            <img src={logo_image} alt="Klimondra" class="h-5">
            Klimondra
        </a>
        <nav class="hidden md:flex items-center gap-4">
            {#each navigationItems as item (item.href)}
                <a href={item.href} class="text-gray-900 text-lg font-normal">{item.label}</a>
            {/each}
        </nav>
        <button 
            class="md:hidden flex items-center justify-center p-2 text-gray-900 relative z-50"
            onclick={() => isMobileMenuOpen = !isMobileMenuOpen}
            aria-label="Přepnout mobilní menu"
            aria-expanded={isMobileMenuOpen}
        >
            <Icon icon={isMobileMenuOpen ? "lucide:x" : "lucide:menu"} class="w-6 h-6" />
        </button>
    </div>
</header>

{#if isMobileMenuOpen}
    <div class="fixed inset-0 z-40 {isScrolled ? 'bg-white/95' : 'bg-bg-light/95'} backdrop-blur-md flex flex-col pt-14 md:hidden overflow-hidden" transition:slide={{ duration: 300 }}>
        <div class="flex-1 flex flex-col items-center justify-center pb-14">
            <nav class="flex flex-col items-center gap-8">
                {#each navigationItems as item (item.href)}
                    <a 
                        href={item.href} 
                        class="text-gray-900 text-2xl font-medium"
                        onclick={closeMobileMenu}
                    >
                        {item.label}
                    </a>
                {/each}
            </nav>
        </div>
    </div>
{/if}