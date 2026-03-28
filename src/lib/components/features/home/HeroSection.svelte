<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
    import Section from '$lib/components/ui/Section.svelte';
</script>

<Section class="h-screen pt-18 mt-14 pb-8">
    <!-- TODO: Add background gradient -->
    <div class="w-full h-full px-8 py-24 flex flex-col justify-start items-center gap-3 bg-slate-900 rounded-3xl border border-neutral-800">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">Dělám weby, které fungují</h2>
        <p class="text-base sm:text-lg md:text-xl font-light text-neutral-100 tracking-wide text-center">Profesionální weby, které vás odlišují a přinášejí výsledky.</p>
        <div class="flex flex-col sm:flex-row gap-4 mt-3">
            <Button variant="primary">Zjistit více</Button>
            <Button variant="secondary">Zavolat</Button>
        </div>
    </div>
</Section>
