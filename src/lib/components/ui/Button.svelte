<script lang="ts">
    import type { Snippet } from 'svelte';

    interface Props {
        children: Snippet;
        variant?: 'primary' | 'secondary' | 'outline';
        href?: string;
    }

    let { children, variant = 'primary', href }: Props = $props();

    const variantClasses = {
        primary: 'bg-white text-blue-950 text-lg hover:bg-neutral-200',
        secondary: 'bg-transparent border border-white/40 text-white hover:bg-white/10 hover:border-white/60',
        outline: 'bg-transparent border-2 border-white/60 text-white hover:bg-white hover:text-blue-950'
    };

    const baseClasses = 'px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ease-out active:scale-95';
</script>

{#if href}
    <a {href} class="{baseClasses} {variantClasses[variant]}">
        {@render children()}
    </a>
{:else}
    <button class="{baseClasses} {variantClasses[variant]}">
        {@render children()}
    </button>
{/if}