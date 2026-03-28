<script lang="ts">
    let { children, class: className = '' } = $props();
</script>

<section class={`w-full max-w-7xl mx-auto px-4 md:px-6 ${className}`}>
    {#if children}
        {@render children()}
    {/if}
</section>