<script lang="ts">
    import logo_image from '$lib/assets/branding/Logomark-black.svg';
    import { navigationItems } from '$lib/data/NavigationItems';
</script>

<header class="w-full fixed top-0 left-0 right-0 z-50 h-14 px-4 md:px-6 flex items-center bg-white/95 backdrop-blur-md border-b border-gray-200">
    <div class="w-full max-w-7xl mx-auto flex items-center justify-between gap-4">
        <a href="/" class="text-gray-900 text-3xl font-bold flex items-center gap-3">
            <img src={logo_image} alt="Klimondra" class="h-5">
            Klimondra
        </a>
        <nav class="flex items-center gap-4">
            {#each navigationItems as item (item.href)}
                <a href={item.href} class="text-gray-900 text-lg font-normal">{item.label}</a>
            {/each}
        </nav>
    </div>
</header>