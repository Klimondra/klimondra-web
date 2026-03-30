<script lang="ts">
	import AboutSection from '$lib/components/features/home/AboutSection.svelte';
    import HeroSection from '$lib/components/features/home/HeroSection.svelte';
	import Section from '$lib/components/ui/Section.svelte';
</script>

<main class="min-h-screen flex flex-col gap-8">
    <HeroSection />
    <AboutSection />
    <Section><h1>Section</h1></Section>
</main>