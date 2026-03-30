<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
    import Section from '$lib/components/ui/Section.svelte';
</script>

<Section class="h-screen mt-6 py-20">
    <!-- TODO: Add background gradient -->
    <div 
        class="w-full h-full p-8 flex flex-col justify-center items-center gap-4
            bg-linear-to-br from-azure-950 via-azure-900 to-azure-800 rounded-3xl"
    >
        <h2 class="text-5xl sm:text-6xl md:text-7xl font-bold text-white text-center">Dělám weby, které fungují</h2>
        <p class="text-base sm:text-lg md:text-2xl font-light text-neutral-100 tracking-wide text-center">Profesionální weby, které vás odlišují a přinášejí výsledky.</p>
        <div class="flex flex-col sm:flex-row gap-4 mt-3">
            <Button variant="primary">Zjistit více</Button>
            <Button variant="secondary">Zavolat</Button>
        </div>
    </div>
</Section>
