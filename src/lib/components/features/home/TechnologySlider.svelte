<script lang="ts">
    import Section from '$lib/components/ui/Section.svelte';
    import Icon from '@iconify/svelte';
    import { technologies } from '$lib/data/Technologies';

    let isHovered = $state(false);
</script>

<Section>
    <h2 class="text-3xl font-semibold text-black mb-3 leading-0">Technologie</h2>
    <p class="text-lg text-neutral-600 translate-x-0.75">které používám</p>
    <div class="relative flex py-8 overflow-hidden">
        {#each Array(3).fill(0) as group, i (group + i)}
            <div 
                class="flex flex-row justify-center gap-8 pr-8 technology-list-group shrink-0"
                class:paused={isHovered}
                aria-hidden={i > 0}
            >
                {#each technologies as technology (technology.name)}
                    <div class="relative group">
                        <Icon 
                            icon={technology.icon} 
                            class="min-w-12 min-h-12 
                                shrink-0 text-azure-950/60 hover:text-(--tech-color) transition-colors duration-200"
                            style="--tech-color: {technology.color}"
                            onmouseenter={() => isHovered = true}
                            onmouseleave={() => isHovered = false}
                        />
                        <span class="absolute left-1/2 -translate-x-1/2 mt-1 top-full opacity-0 text-sm text-black group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                            {technology.name}
                        </span>
                    </div>
                {/each}
            </div>
        {/each}
        <div class="absolute left-0 top-0 bottom-0 w-1/5 bg-linear-to-r from-bg-light to-transparent pointer-events-none"></div>
        <div class="absolute right-0 top-0 bottom-0 w-1/5 bg-linear-to-l from-bg-light to-transparent pointer-events-none"></div>
    </div>
    
</Section>

<style>
    .technology-list-group {
        animation: scroll 15s linear infinite;
    }

    .technology-list-group.paused {
        animation-play-state: paused;
    }
    
    @keyframes scroll {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-100%);
        }
    }
</style>