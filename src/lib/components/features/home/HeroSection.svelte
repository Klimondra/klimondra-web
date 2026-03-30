<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
    import Section from '$lib/components/ui/Section.svelte';
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';
    import { heroImages } from '$lib/data/HeroImages';

    gsap.registerPlugin(ScrollTrigger);

    // Appear animation
    let sectionContainer: HTMLDivElement;
    let photosContainer: HTMLDivElement;

    onMount(() => {
        let ctx = gsap.context(() => {
            // Full section animation
            gsap.fromTo(sectionContainer, 
            {
                autoAlpha: 0,
                y: 100,
                filter: 'blur(12px)',
            },
            {
                scrollTrigger: {
                    start: 'top 100%',
                    toggleActions: 'play none none reverse'
                },
                duration: 1.5,
                autoAlpha: 1,
                filter: 'blur(0px)',
                y: 0,
                ease: 'power3.out'
            });
            
            // Animate hero images with blur effect
            gsap.from(".animated-hero-image", {
                scrollTrigger: {
                    trigger: photosContainer,
                    start: 'top 100%',
                    toggleActions: 'play none none reverse'
                },
                duration: 1,
                delay: 1.5,
                opacity: 0,
                y: 100,
                ease: 'power3.out',
                stagger: 0.2,
                filter: 'blur(8px)'
            });
        });
        
        return () => ctx.revert();
    });
</script>

<Section class="h-screen mt-6 py-20">
    <div 
        bind:this={sectionContainer}
        class="w-full h-full relative p-8 flex flex-col justify-center items-center gap-6
            bg-linear-to-br from-azure-950 via-azure-900 to-azure-800 rounded-3xl overflow-hidden invisible"
    >
        <div class="flex flex-col gap-3">
            <h2 class="text-5xl sm:text-6xl md:text-7xl font-bold text-white text-center">Dělám weby, které fungují</h2>
            <p class="text-base sm:text-lg md:text-2xl font-light text-neutral-100 tracking-wide text-center">Profesionální weby, které vás odlišují a přinášejí výsledky.</p>
        </div>
        <div class="flex flex-col sm:flex-row gap-4 mt-3">
            <Button variant="primary">Zjistit více</Button>
            <Button variant="secondary">Zavolat</Button>
        </div>
        <div class="absolute top-0 left-0 w-full h-full bg-linear-to-b from-transparent via-transparent to-azure-800 blur-3xl"></div>
        <div bind:this={photosContainer} class="absolute -bottom-8 w-full h-36 flex items-center justify-center gap-8">
            {#each heroImages as image, index (index)}
                <img src={image.src} alt={image.alt} class={"animated-hero-image h-36 rounded-sm " + (index % 2 === 0 ? "-rotate-3" : "rotate-3")} />
            {/each}
        </div>
    </div>
</Section>
